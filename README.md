# ember.d.ts

Intellisense d.ts generator for Ember

## Use

* Copy generated YUIDoc `data.json` from the Ember repo to `docs.json`.
* `node generate.js`

## TODO

* Generate separate definition without prototype extensions
* Handle additional JSDoc properties (@param, @return)
* Define types of arrays where possible
* Review situations where multiple types are possible
* JSDoc for classes and namespaces if supported
* Ignore Handlebars helpers?
* Don't hardcode docs.json path
* Declare DOM classes, e.g. DOMElement
* Declare generic Promise
* Depend on jQuery
* Declare methods with multiple signatures multiple times