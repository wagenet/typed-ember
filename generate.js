"use strict";

const fs = require('fs');


const NAMESPACES = new Map();

class Namespace {
  constructor(name, parent) {
    if (name) {
      this.name = name;
    } else {
      this.root = true;
    }

    this.parent = parent;

    this.fullName = this.parent ? [name, this.parent.name].join('.') : null;

    this.namespaces = new Map();
    this.classes = new Map();
  }

  static for(name, options) {
    if (!options) {
      options = { autocreate: false };
    }

    let root = Namespace.root;
    if (!name) { return root; }

    let parts = name.split('.');
    let parent = root;
    let namespace;

    parts.forEach((name, i) => {
      if (!parent) { return; } // Not as good as a break

      if (!parent.namespaces.has(name)) {
        if (options.autocreate) {
          parent.namespaces.set(name, new Namespace(name, parent));
        }
      }

      namespace = parent.namespaces.get(name);
      parent = namespace;
    });

    return namespace;
  }
}

Namespace.root = new Namespace();


function namespaceAndKlassName(fullName) {
  let parts = fullName.split('.');
  let namespaceName = parts.slice(0,-1).join('.');
  let klassName = parts[parts.length-1];

  return [namespaceName, klassName];
}

function partsRegexp(parts) {
  let str = `${parts.shift()}\\.`;
  if (parts.length > 0) {
    str += `(${partsRegexp(parts)})?`;
  }
  return str;
}

const RELATIVE_NAMES = {
  'Ember.Array': 'Ember.Array',
  'RSVP.Promise': 'RSVP.Promise'
};

function relativeName(name, base) {
  let parts = base.split('.');

  // Find the full class name so we can handle it correctly in RELATIVE_NAMES!
  if (/^[A-Z]/.test(name)) {
    for (let size=parts.length; size > 0; size--) {
      let klass = Klass.find(parts.slice(0,size).join('.')+`.${name}`, { allowMissingNamespace: true });
      if (klass) {
        name = klass.fullName;
        break;
      }
    }
  }

  if (RELATIVE_NAMES[name]) { return RELATIVE_NAMES[name]; }

  let reStr = `^(${partsRegexp(parts)})`;
  return name.replace(new RegExp(reStr), '');
}

const BUILT_IN = [
  'Function',
  'String',
  'Array'
];

class Klass {
  constructor(name, data) {
    this.data = data;
    this.name = name;
    this.fullName = data.name;
    this.builtIn = BUILT_IN.indexOf(this.fullName) > -1;
    // Not used, but may be useful later
    this.mixin = data.extension_for.length > 0;
    // REVIEW: Is it correct to treat prototype extensions as an interface?
    this.type = this.builtIn ? 'interface' : 'class';
    this.private = data.access === 'private';
    this.deprecated = data.deprecated;
    this.deprecationMessage = data.deprecationMessage;

    // If it extends or uses anything, we can know it's a true class.
    // However, it may be a true class without either of these being true.
    // In the Ember docs we pretend certain namespaces are classes, which isn't great.
    this.isTrueClass = data.extends || data.uses;

    // Hack for correct RSVP promise
    if (this.fullName === 'RSVP.Promise') {
      this.implements = ['Promise<T>'];
      this.generics = "T";
    }

    this.items = new Map();
  }

  static create(fullName, data) {
    let names = namespaceAndKlassName(fullName);
    let namespace = Namespace.for(names[0], { autocreate: true });

    if (namespace.classes.has(names[1])) {
      throw `Class already exists; name=${fullName}`;
    }

    let klass = new Klass(names[1], data);
    namespace.classes.set(names[1], klass);

    return klass;
  }

  static find(fullName, options) {
    options = options || { allowMissingNamespace: false };

    let names = namespaceAndKlassName(fullName);
    let namespace = Namespace.for(names[0]);

    if (!namespace) {
      if (options.allowMissingNamespace) {
        return;
      } else {
        throw `No namespace found; name=${fullName}`;
      }
    }

    return namespace.classes.get(names[1]);
  }

  // Run after all items have been initialize from the JSON
  postProcess() {
    if (this.postProcessed) { return; }
    this.postProcessed = true;

    let namespace = Namespace.for(this.fullName, { autocreate: false });
    this.isNamespace = !!namespace;

    if (this.data.extends) {
      let klass = Klass.find(this.data.extends);
      this.extends = klass;
    }

    if (this.data.uses) {
      let impls = this.data.uses.map(i => Klass.find(i)).filter(i => i);
      if (impls.length > 0) {
        this.implements = impls;
      }
    }

    if (this.implements) {
      this.implements.forEach(k => {
        if (k instanceof Klass) {
          // Make sure it's already been post processed so their methods are correct
          k.postProcess();

          // Copy over all items that aren't defined
          k.items.forEach((i, name) => {
            if (i.private) { return; }

            let existing = this.items.get(name);
            if (existing) {
              if (existing.private) {
                console.warn(`Setting private to false for ${this.fullName}#${name} since it's required for implementation`);
                existing.private = false;
              }
            } else {
              this.items.set(name, new ClassItem(i.data, this));
            }
          });
        }
      });
    }
  }

  get declaration() {
    let str = `${this.type} ${this.name}`;

    if (this.generics) {
      str += `<${this.generics}>`;
    }

    if (this.extends) {
      str += ` extends ${relativeName(this.extends.fullName, this.fullName)}`;
    }

    if (this.implements) {
      let impls = this.implements.map(i => {
        return typeof i === 'string' ? i : relativeName(i.fullName, this.fullName);
      });
      str += ` implements ${impls.join(', ')}`;
    }

    return str;
  }
}


// Does this matter?
const RETURN_TYPES = {
  'Any': 'any',
  '*': 'any',
  'Class': 'any', // What is this really?
  'Mixed': 'any',
  'Array': 'any[]',
  'Tuple': 'any[]', // Typescript can handle tuples better, but we don't have the info
  'Boolean': 'boolean',
  'String': 'string',
  'Number': 'number',
  'Object': '{}',
  'Object?': '{}', // Why does this have a question mark?
  'Hash': '{}',
  'Void': 'void',
  'RSVP.Promise': 'RSVP.Promise<any>',  // 'any' may not actually be correct, but we don't know
  'Promise': 'Promise<any>' // 'any' may not actually be correct, but we don't know
};

function convertType(type, relativeBase) {
  // Make types in generics bar separated, not comma
  type = type.replace(/<(.+)>/, m => m.replace(/\s*,\s*/,'|'));

  let curlies = type.match(/^\{(.+)\}/);
  if (curlies) {
    type = curlies[1];
  } else {
    // Throw away any additional descriptions (maybe should handle that elsewhere)
    type = type.split(' ')[0];
  }

  // Handle type list
  if (type.indexOf('|') > -1) {
    let types = type.split('|');
    return types.map(t => convertType(t, relativeBase)).join('|');
  }

  if (relativeBase) {
    type = relativeName(type, relativeBase);
  }

  return RETURN_TYPES[type] || type;
}

function abbreviateDescription(str) {
   return str.split('\n\n')[0].replace(/\s*\n\s*/g, ' ');
}

class ClassItem {
  constructor(data, klass) {
    this.data = data;
    this.name = data.name;
    this.klass = klass;
    this.itemType = data.itemtype;
    this.type = data.type ? convertType(data.type, this.klass.fullName) : 'any';
    this.static = !!data.static;
    this.description = data.description;
    this.private = data.access === 'private';
    this.deprecated = data.deprecated;
    this.deprecationMessage = data.deprecationMessage;

    if (data.params) {
      if (this.itemType !== 'method') {
        throw `Not a method but has params; name=${data.name}, type=${this.itemType}`;
      }

      if (this.itemType === 'method') {
        this.params = data.params.map(p => new ClassItemParam(p, this));
      }
    }

    if (data.return) {
      this.returnType = data.return.type ? convertType(data.return.type, this.klass.fullName) : 'void';
    }
  }

  get jsDoc() {
    let lines = [];

    if (this.description) {
      lines.push(`@description ${abbreviateDescription(this.description)}`);
    }

    if (this.deprecated) {
      lines.push(`@deprecated ${this.deprecationMessage || ''}`);
    } else if (this.klass.deprecated) {
      console.warn(`Parent deprecated but item isn't; parent=${this.klass.fullName}, method=${this.name}`);
      lines.push(`@deprecated ${this.klass.deprecationMessage || ''}`);
    }

    if (lines.length > 0) {
      let str = `/**\n${lines.map(l => ` * ${l}`).join('\n')}\n */`;
      return str;
    }
  }

  get declaration() {
    let str = '';

    if (this.klass.isNamespace && !this.klass.isTrueClass) {
      // REVIEW: Should we expect these items to be marked as static?
      if (this.itemType === 'method') {
        str += 'function ';
      } else {
        // Property
        str += 'var ';
      }
    } else if (this.static) {
      str += 'static ';
    }

    // REVIEW: Is quoting strings with special chars the correct thing to do?
    // Consider using js-string-escape
    str += this.name.match(/^[$A-Z_][0-9A-Z_$]*$/i) ? this.name : `'${this.name}'`;

    if (this.itemType === 'method') {
      str += `(${this.params ? this.params.join(', ') : ''})`;
      if (this.returnType) {
        str += `: ${this.returnType}`;
      }
    } else {
      str += `: ${this.type}`;
    }

    return str;
  }
}

class ClassItemParam {
  constructor(data, item) {
    if (data.name[data.name.length-1] === '*') {
      this.name = data.name.slice(0,-1);
      this.spread = true;
    } else {
      this.name = data.name;
    }

    // Commonly used in docs, but arguments is protected
    if (this.name === 'arguments') {
      this.name = 'args';
    }

    // Sometimes the spread is in the type, seems weird.
    let rawType = data.type;
    if (rawType && rawType.indexOf('...') > -1) {
      // FIXME: In some cases this may not be correct, e.g. "String...|Array" in Ember.getProperties
      rawType = rawType.replace('...', '');
      this.spread = true;
    }

    this.type = rawType ? convertType(rawType, item.klass.fullName) : 'any';
  }

  toString() {
    let nameStr = this.name;
    let typeStr = this.type;

    if (this.spread) {
      nameStr = `...${nameStr}`;
      // FIXME: Ignoring the other types isn't really correct
      let type = this.type.split('|')[0];
      typeStr = (type === '{}' ? 'any' : type) + '[]';
    }

    return `${nameStr}: ${typeStr}`;
  }
}

let rawData = fs.readFileSync('docs.json', { encoding: 'utf8' });
let docs = JSON.parse(rawData);


// Classes
let classes = [];

for (let name in docs.classes) {
  // Initialize the Klass
  let klass = Klass.create(name, docs.classes[name]);
  classes.push(klass);
}

docs.classitems.forEach(data => {
  let klass = Klass.find(data.class);

  // If no name exists, it's bad data
  if (data.name && (data.itemtype === 'method' || data.itemtype === 'property')) {
    let item = new ClassItem(data, klass);
    if (klass.items.has(item.name)) {
      console.warn(`Duplicate item for klass; klass=${klass.fullName}, item=${item.name}`);
    }
    klass.items.set(item.name, item);
  }
});

// Do this after all data has been loaded from the JSON
classes.forEach(k => k.postProcess());

function prefixLines(str, prefix) {
  let lines = str.split('\n');
  return lines.map(l => prefix+l).join('\n');
}

function writeItems(wstream, klass, prefix) {
  klass.items.forEach(item => {
    if (item.private) { return; }
    if (item.jsDoc) {
      wstream.write(prefixLines(item.jsDoc, prefix)+'\n');
    }
    wstream.write(`${prefix}${item.declaration};\n`);
  });
}

function writeNamespace(wstream, namespace, prefix) {
  prefix = prefix || '';

  let childPrefix = namespace.root ? '' : prefix + '  ';

  if (!namespace.root) {
    let declareExport = (prefix === '') ? 'declare' : 'export';
    wstream.write(`${prefix}${declareExport} namespace ${namespace.name} {\n`);

    let selfClass = namespace.parent.classes.get(namespace.name);
    if (selfClass) {
      writeItems(wstream, selfClass, childPrefix);
    }
  }

  namespace.namespaces.forEach(ns => writeNamespace(wstream, ns, childPrefix));
  namespace.classes.forEach(klass => {
    if (klass.isNamespace && !klass.isTrueClass) { return; }
    let declareExport = (childPrefix === '') ? 'declare' : 'export';
    wstream.write(`${childPrefix}${declareExport} ${klass.declaration} {\n`);
    writeItems(wstream, klass, childPrefix+'  ');
    wstream.write(`${childPrefix}}\n`);
  });

  if (!namespace.root) {
    wstream.write(`${prefix}}\n`);
  }
}

var wstream = fs.createWriteStream('ember.d.ts');
wstream.once('open', () => {
  // From browser
  wstream.write('interface DOMElement {}\n');
  // Use https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/es6-promise/es6-promise.d.ts
  wstream.write('interface Promise<T> {}\n');
  // From Ember container but docs not generated for the container
  wstream.write('declare class Registry {}\n');
  // Is this from Router internals?
  wstream.write('declare class Transition {}\n');
  // Import Handlebars d.ts instead
  wstream.write('declare namespace Handlebars { class SafeString {} }\n');
  // Import jQuery d.ts instead
  wstream.write('declare class JQuery {}\n');

  wstream.write('\n\n');

  writeNamespace(wstream, Namespace.root);

  wstream.end();
});
