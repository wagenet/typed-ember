# ember.d.ts

Intellisense d.ts generator for Ember

## Use

* Copy generated YUIDoc `data.json` from the Ember repo to `docs.json`.
* `node generate.js`

## TODO

* Properly handle prototype extensions
* Define types of arrays where possible
* Ignore Handlebars helpers?
* Don't hardcode docs.json path
* Make Ember.Handlebars accessible
* Proper external dependencies, e.g. jQuery, Handlebars
* Class constructors?
* See if we can further improve methods with multiple signatures