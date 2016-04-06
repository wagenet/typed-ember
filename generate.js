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

function relativeName(name, base) {
  let parts = base.split('.');
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
    this.name = name;
    this.fullName = data.name;
    this.builtIn = BUILT_IN.indexOf(this.name) > -1;
    // REVIEW: Is it correct to treat prototype extensions as an interface?
    this.type = (this.builtIn || data.extension_for.length > 0) ? 'interface' : 'class';
    this.extends = data.extends;
    this.implements = data.uses;
    this.private = data.access === 'private';
    this.deprecated = data.deprecated;
    this.deprecationMessage = data.deprecationMessage;

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

  static find(fullName) {
    let names = namespaceAndKlassName(fullName);
    let namespace = Namespace.for(names[0]);

    if (!namespace) {
      throw `No namespace found; name=${fullName}`;
    }

    return namespace.classes.get(names[1]);
  }

  get declaration() {
    let str = `${this.type} ${this.name}`;

    if (this.extends) {
      str += ` extends ${relativeName(this.extends, this.fullName)}`;
    }

    if (this.implements) {
      str += ` implements ${this.implements.map(i => relativeName(i, this.fullName)).join(', ')}`;
    }

    return str;
  }
}


// Does this matter?
const RETURN_TYPES = {
  'Any': 'any',
  '*': 'any',
  'Boolean': 'boolean',
  'String': 'string',
  'Number': 'number',
  'Object': '{}',
  'Hash': '{}'
};

function convertType(type) {
  if (type.indexOf('|') > -1) {
    let types = type.split('|');
    return types.map(t => convertType(t)).join('|');
  }

  if (type === 'Array') {
    return 'any[]';
  } else {
    return RETURN_TYPES[type] || type;
  }
}

function abbreviateDescription(str) {
   return str.split('\n\n')[0].replace(/\s*\n\s*/g, ' ');
}

class ClassItem {
  constructor(data, klass) {
    this.name = data.name;
    this.klass = klass;
    this.itemType = data.itemtype;
    this.type = data.type ? convertType(data.type) : 'any';
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
        this.params = data.params.map(p => new ClassItemParam(p));
      }
    }

    if (data.return) {
      this.returnType = data.return.type ? convertType(data.return.type) : 'void';
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

    if (this.klass.isNamespace) {
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

    // REVIEW: Is quoting strings with dashes the correct thing to do?
    str += this.name.match('-') ? `'${this.name}'` : this.name;

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
  constructor(data) {
    this.name = data.name;
    this.type = data.type ? convertType(data.type) : 'any';
  }

  toString() {
    return `${this.name}: ${this.type}`;
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

// Now that we should have created all namespaces, check to see if the klass
// is actually a namespace
classes.forEach(klass => {
  let namespace = Namespace.for(klass.fullName, { autocreate: false });
  klass.isNamespace = !!namespace;
});

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
  if (namespace.private) { return; }

  prefix = prefix || '';

  let childPrefix = namespace.root ? '' : prefix + '  ';

  if (!namespace.root) {
    if (prefix === '') { // top-level
      wstream.write(`declare `);
    }

    wstream.write(`${prefix}namespace ${namespace.name} {\n`);

    let selfClass = namespace.parent.classes.get(namespace.name);
    if (selfClass) {
      writeItems(wstream, selfClass, childPrefix);
    }
  }

  namespace.namespaces.forEach(ns => writeNamespace(wstream, ns, childPrefix));
  namespace.classes.forEach(klass => {
    if (klass.isNamespace) { return; }
    wstream.write(`${childPrefix}${klass.declaration} {\n`);
    writeItems(wstream, klass, childPrefix+'  ');
    wstream.write(`${childPrefix}}\n`);
  });

  if (!namespace.root) {
    wstream.write(`${prefix}}\n`);
  }
}

var wstream = fs.createWriteStream('ember.d.ts');
wstream.once('open', () => {
  writeNamespace(wstream, Namespace.root);
  wstream.end();
});
