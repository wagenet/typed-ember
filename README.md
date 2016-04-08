# Typed Ember Js
The type definition for [`ember.js`](https://github.com/emberjs/ember.js)

## LICENSE
MIT

## Installation
```sh
typings install github:wagenet/typed-ember
```

## Contributing

```sh
# Fork this repo
npm install

npm run watch

# add tests, make changes, pass tests ... then [ctrl+c]
npm run publish
```

## Updating
Update `typings.json/version` to match the source version you are typing against.
e.g. if you are creating typings for `chai@3.5.0`, then:
```js
// typings.json
{
  "version": "3.5.0"
  // ...
}
```

## To Do

* Properly handle prototype extensions
* Define types of arrays where possible
* Ignore Handlebars helpers?
* Make Ember.Handlebars accessible
* Class constructors?
* See if we can further improve methods with multiple signatures
* Better handling of undeclared constants
* Consider pre-processing the docs.json so we can move hacks out of main generator code
