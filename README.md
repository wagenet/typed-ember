# Typed Ember Js
The type definition for [`ember.js`](https://github.com/emberjs/ember.js)

See also ['ember-typings-generator'](https://github.com/wagenet/ember-typings-generator).

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
* Make Ember.Handlebars accessible
* Better handling of undeclared constants
* Run some of Ember's tests with typings enabled
