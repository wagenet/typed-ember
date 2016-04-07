interface DOMElement {}
interface Promise<T> {}
declare class Registry {}
declare class Transition {}
declare namespace Handlebars { class SafeString {} }
declare class JQuery {}


declare module 'ember' {
  export namespace RSVP {
    /**
     * @description This is a convenient alias for `RSVP.Promise.all`.
     */
    function all(array: any[], label: string);
    /**
     * @description This is a convenient alias for `RSVP.Promise.race`.
     */
    function race(array: any[], label: string);
    /**
     * @description This is a convenient alias for `RSVP.Promise.reject`.
     */
    function reject(reason: any, label: string): RSVP.Promise<any>;
    /**
     * @description This is a convenient alias for `RSVP.Promise.resolve`.
     */
    function resolve(value: any, label: string): RSVP.Promise<any>;
    /**
     * @description `RSVP.allSettled` is similar to `RSVP.all`, but instead of implementing a fail-fast method, it waits until all the promises have returned and shows you all the results. This is useful if you want to handle multiple promises' failure states together as a set.
     */
    function allSettled(entries: any[], label: string): RSVP.Promise<any>;
    /**
     * @description `RSVP.defer` returns an object similar to jQuery's `$.Deferred`. `RSVP.defer` should be used when porting over code reliant on `$.Deferred`'s interface. New code should use the `RSVP.Promise` constructor instead.
     */
    function defer(label: string): {};
    /**
     * @description `RSVP.filter` is similar to JavaScript's native `filter` method, except that it waits for all promises to become fulfilled before running the `filterFn` on each item in given to `promises`. `RSVP.filter` returns a promise that will become fulfilled with the result of running `filterFn` on the values the promises become fulfilled with.
     */
    function filter(promises: any[], filterFn: Function, label: string): RSVP.Promise<any>;
    /**
     * @description `RSVP.hashSettled` is similar to `RSVP.allSettled`, but takes an object instead of an array for its `promises` argument.
     */
    function hashSettled(object: {}, label: string): RSVP.Promise<any>;
    /**
     * @description `RSVP.hash` is similar to `RSVP.all`, but takes an object instead of an array for its `promises` argument.
     */
    function hash(object: {}, label: string): RSVP.Promise<any>;
    /**
     * @description `RSVP.map` is similar to JavaScript's native `map` method, except that it waits for all promises to become fulfilled before running the `mapFn` on each item in given to `promises`. `RSVP.map` returns a promise that will become fulfilled with the result of running `mapFn` on the values the promises become fulfilled with.
     */
    function map(promises: any[], mapFn: Function, label: string): RSVP.Promise<any>;
    /**
     * @description `RSVP.denodeify` takes a 'node-style' function and returns a function that will return an `RSVP.Promise`. You can use `denodeify` in Node.js or the browser when you'd prefer to use promises over using callbacks. For example, `denodeify` transforms the following:
     */
    function denodeify(nodeFunc: Function, options: boolean|any[]): Function;
    /**
     * @description `RSVP.rethrow` will rethrow an error on the next turn of the JavaScript event loop in order to aid debugging.
     */
    function rethrow(reason: Error);
    export class EventTarget {
    }
    export class Promise<T> implements Promise<T> {
      /**
       * @description The primary way of interacting with a promise is through its `then` method, which registers callbacks to receive either a promise's eventual value or the reason why the promise cannot be fulfilled.
       */
      then(onFulfillment: Function, onRejection: Function, label: string): RSVP.Promise<any>;
      /**
       * @description `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same as the catch block of a try/catch statement.
       */
      catch(onRejection: Function, label: string): RSVP.Promise<any>;
      /**
       * @description `finally` will be invoked regardless of the promise's fate just as native try/catch/finally behaves
       */
      finally(callback: Function, label: string): RSVP.Promise<any>;
    }
  }
  export namespace Ember {
    /**
     * @description Display a deprecation warning with the provided message and a stack trace (Chrome and Firefox only). Ember build tools will remove any calls to `Ember.deprecate()` when doing a production build.
     */
    function deprecate(message: string, test: boolean, options: {});
    /**
     * @description Define an assertion that will throw an exception if the condition is not met. Ember build tools will remove any calls to `Ember.assert()` when doing a production build. Example:
     */
    function assert(desc: string, test: boolean);
    /**
     * @description Display a debug notice. Ember build tools will remove any calls to `Ember.debug()` when doing a production build.
     */
    function debug(message: string);
    /**
     * @description Run a function meant for debugging. Ember build tools will remove any calls to `Ember.runInDebug()` when doing a production build.
     */
    function runInDebug(func: Function);
    /**
     * @description Display a warning with the provided message. Ember build tools will remove any calls to `Ember.warn()` when doing a production build.
     */
    function warn(message: string, test: boolean, options: {});
    /**
     * @description Copy properties from a source object to a target object.
     */
    function assign(original: {}, args: {}): {};
    /**
     * @description Debug parameter you can turn on. This will log all bindings that fire to the console. This should be disabled in production code. Note that you can also enable this from the console or temporarily.
     */
    var LOG_BINDINGS: boolean;
    /**
     * @description Global helper method to create a new binding. Just pass the root object along with a `to` and `from` path to create and connect the binding.
     */
    function bind(obj: {}, to: string, from: string): Binding;
    /**
     * @description Returns the cached value for a property, if one exists. This can be useful for peeking at the value of a computed property that is generated lazily, without accidentally causing it to be created.
     */
    function cacheFor(obj: {}, key: string): {};
    /**
     * @description The semantic version.
     */
    var VERSION: string;
    /**
     * @description The hash of environment variables used to control various configuration settings. To specify your own or override default settings, add the desired properties to a global hash named `EmberENV` (or `ENV` for backwards compatibility with earlier versions of Ember). The `EmberENV` hash must be created before loading Ember.
     */
    var ENV: {};
    /**
     * @description Determines whether Ember should add to `Array`, `Function`, and `String` native object prototypes, a few extra methods in order to provide a more friendly API.
     */
    var EXTEND_PROTOTYPES: boolean;
    /**
     * @description The `LOG_STACKTRACE_ON_DEPRECATION` property, when true, tells Ember to log a full stack trace during deprecation warnings.
     */
    var LOG_STACKTRACE_ON_DEPRECATION: boolean;
    /**
     * @description The `LOG_VERSION` property, when true, tells Ember to log versions of all dependent libraries in use.
     */
    var LOG_VERSION: boolean;
    /**
     * @description An empty function useful for some operations. Always returns `this`.
     */
    function K(): {};
    /**
     * @description Add an event listener
     */
    function addListener(obj: any, eventName: string, target: {}|Function, method: Function|string, once: boolean);
    /**
     * @description Remove an event listener
     */
    function removeListener(obj: any, eventName: string, target: {}|Function, method: Function|string);
    /**
     * @description Send an event. The execution of suspended listeners is skipped, and once listeners are removed. A listener without a target is executed on the passed object. If an array of actions is not passed, the actions stored on the passed object are invoked.
     */
    function sendEvent(obj: any, eventName: string, params: Ember.Array, actions: Ember.Array): void;
    /**
     * @description Define a property as a function that should be executed when a specified event or events are triggered.
     */
    function on(eventNames: string, func: Function): void;
    /**
     * @description To get multiple properties at once, call `Ember.getProperties` with an object followed by a list of strings or an array:
     */
    function getProperties(obj: {}, ...list: string[]): {};
    /**
     * @description A value is blank if it is empty or a whitespace string.
     */
    function isBlank(obj: {}): boolean;
    /**
     * @description Verifies that a value is `null` or an empty string, empty array, or empty function.
     */
    function isEmpty(obj: {}): boolean;
    /**
     * @description Returns true if the passed value is null or undefined. This avoids errors from JSLint complaining about use of ==, which can be technically confusing.
     */
    function isNone(obj: {}): boolean;
    /**
     * @description A value is present if it not `isBlank`.
     */
    function isPresent(obj: {}): boolean;
    /**
     * @description Merge the contents of two objects together into the first object.
     */
    function merge(original: {}, updates: {}): {};
    /**
     * @description Makes a method available via an additional name.
     */
    function aliasMethod(methodName: string);
    /**
     * @description Specify a method that observes property changes.
     */
    function observer(propertyNames: string, func: Function): void;
    function addObserver(obj: any, _path: string, target: {}|Function, method: Function|string);
    function removeObserver(obj: any, path: string, target: {}|Function, method: Function|string);
    /**
     * @description Gets the value of a property on an object. If the property is computed, the function will be invoked. If the property is not defined but the object implements the `unknownProperty` method then that will be invoked.
     */
    function get(obj: {}, keyName: string): {};
    /**
     * @description Retrieves the value of a property from an Object, or a default value in the case that the property returns `undefined`.
     */
    function getWithDefault(obj: {}, keyName: string, defaultValue: {}): {};
    /**
     * @description Sets the value of a property on an object, respecting computed properties and notifying observers and other listeners of the change. If the property is not defined but the object implements the `setUnknownProperty` method then that will be invoked as well.
     */
    function set(obj: {}, keyName: string, value: {}): {};
    /**
     * @description Error-tolerant form of `Ember.set`. Will not blow up if any part of the chain is `undefined`, `null`, or destroyed.
     */
    function trySet(root: {}, path: string, value: {});
    /**
     * @description Set a list of properties on an object. These properties are set inside a single `beginPropertyChanges` and `endPropertyChanges` batch, so observers will be buffered.
     */
    function setProperties(obj: any, properties: {}): void;
    /**
     * @description Returns a unique id for the object. If the object does not yet have a guid, one will be assigned to it. You can call this on any object, `Ember.Object`-based or not, but be aware that it will add a `_guid` property.
     */
    function guidFor(obj: {}): string;
    /**
     * @description Checks to see if the `methodName` exists on the `obj`, and if it does, invokes it with the arguments passed.
     */
    function tryInvoke(obj: {}, methodName: string, args: Ember.Array): any;
    /**
     * @description Creates an `Ember.NativeArray` from an Array like object. Does not modify the original object. Ember.A is not needed if `Ember.EXTEND_PROTOTYPES` is `true` (the default value). However, it is recommended that you use Ember.A when creating addons for ember or when you can not guarantee that `Ember.EXTEND_PROTOTYPES` will be `true`.
     */
    function A(): NativeArray;
    /**
     * @description Compares two javascript values and returns:
     */
    function compare(v: {}, w: {}): number;
    /**
     * @description Creates a shallow copy of the passed object. A deep copy of the object is returned if the optional `deep` argument is `true`.
     */
    function copy(obj: {}, deep: boolean): {};
    /**
     * @description Compares two objects, returning true if they are equal.
     */
    function isEqual(a: {}, b: {}): boolean;
    /**
     * @description Returns true if the passed object is an array or Array-like.
     */
    function isArray(obj: {}): boolean;
    /**
     * @description Returns a consistent type for the passed object.
     */
    function typeOf(item: {}): string;
    /**
     * @description Alias for jQuery
     */
    function $();
    export namespace ApplicationInstance {
      export class BootOptions {
        /**
         * @description Run in a full browser environment.
         */
        isBrowser: boolean;
        /**
         * @description Disable rendering completely.
         */
        shouldRender: boolean;
        /**
         * @description If present, render into the given `Document` object instead of the global `window.document` object.
         */
        document: Document;
        /**
         * @description If present, overrides the application's `rootElement` property on the instance. This is useful for testing environment, where you might want to append the root view to a fixture area.
         */
        rootElement: string|Element;
        /**
         * @description If present, overrides the router's `location` property with this value. This is useful for environments where trying to modify the URL would be inappropriate.
         */
        location: string;
      }
    }
    export namespace Templates {
      export class helpers {
        /**
         * @description Concatenates input params together.
         */
        concat();
        /**
         * @description The `{{each-in}}` helper loops over properties on an object. It is unbound, in that new (or removed) properties added to the target object will not be rendered.
         */
        'each-in'();
        /**
         * @description The `{{#each}}` helper loops over elements in a collection. It is an extension of the base Handlebars `{{#each}}` helper.
         */
        each();
        /**
         * @description Use the `{{hash}}` helper to create a hash to pass as an option to your components. This is specially useful for contextual components where you can just yield a hash:
         */
        hash(options: {}): {};
        /**
         * @description Use the `if` block helper to conditionally render a block depending on a property. If the property is "falsey", for example: `false`, `undefined`, `null`, `""`, `0`, `NaN` or an empty array, the block will not be rendered.
         */
        if();
        /**
         * @description The `unless` helper is the inverse of the `if` helper. Its block will be rendered if the expression contains a falsey value.  All forms of the `if` helper can also be used with `unless`.
         */
        unless();
        /**
         * @description Calls [Ember.String.loc](/api/classes/Ember.String.html#method_loc) with the provided string. This is a convenient way to localize text within a template. For example:
         */
        loc(str: string);
        /**
         * @description `log` allows you to output the value of variables in the current rendering context. `log` also accepts primitive types such as strings or numbers.
         */
        log(values: any);
        /**
         * @description Use the `{{with}}` helper when you want to alias a property to a new name. This is helpful for semantic clarity as it allows you to retain default scope or to reference a property from another `{{with}}` block.
         */
        with(options: {}): string;
        /**
         * @description `{{collection}}` is a template helper for adding instances of `Ember.CollectionView` to a template. See [Ember.CollectionView](/api/classes/Ember.CollectionView.html) for additional information on how a `CollectionView` functions.
         * @deprecated Use `{{each}}` helper instead.
         */
        collection();
        /**
         * @description The `{{component}}` helper lets you add instances of `Ember.Component` to a template. See [Ember.Component](/api/classes/Ember.Component.html) for additional information on how a `Component` functions. `{{component}}`'s primary use is for cases where you want to dynamically change which type of component is rendered as the state of your application changes. The provided block will be applied as the template for the component. Given an empty `<body>` the following template:
         */
        component();
        /**
         * @description Execute the `debugger` statement in the current template's context.
         */
        debugger();
        /**
         * @description Dynamically look up a property on an object. The second argument to `{{get}}` should have a string value, although it can be bound.
         */
        get();
        /**
         * @description The `{{input}}` helper lets you create an HTML `<input />` component. It causes an `Ember.TextField` component to be rendered.  For more info, see the [Ember.TextField](/api/classes/Ember.TextField.html) docs and the [templates guide](http://emberjs.com/guides/templates/input-helpers/).
         */
        input(options: {});
        /**
         * @description The `mut` helper lets you __clearly specify__ that a child `Component` can update the (mutable) value passed to it, which will __change the value of the parent component__.
         */
        mut(attr: {});
        /**
         * @description The `{{outlet}}` helper lets you specify where a child routes will render in your template. An important use of the `{{outlet}}` helper is in your application's `application.hbs` file:
         */
        outlet(name: string);
        /**
         * @description The `partial` helper renders another template without changing the template context:
         */
        partial(partialName: string);
        /**
         * @description `{{textarea}}` inserts a new instance of `<textarea>` tag into the template. The attributes of `{{textarea}}` match those of the native HTML tags as closely as possible.
         */
        textarea(options: {});
        /**
         * @description The `{{unbound}}` helper disconnects the one-way binding of a property, essentially freezing its value at the moment of rendering. For example, in this example the display of the variable `name` will not change even if it is set with a new value:
         */
        unbound();
        /**
         * @description `{{view}}` inserts a new instance of an `Ember.View` into a template passing its options to the `Ember.View`'s `create` method and using the supplied block as the view's own template.
         * @deprecated 
         */
        view();
        /**
         * @description This is a helper to be used in conjunction with the link-to helper. It will supply url query parameters to the target route.
         */
        'query-params'(hash: {}): {};
        /**
         * @description The `{{action}}` helper provides a way to pass triggers for behavior (usually just a function) between components, and into components from controllers.
         */
        action();
        /**
         * @description Calling ``{{render}}`` from within a template will insert another template that matches the provided name. The inserted template will access its properties on its own controller (rather than the controller of the parent template). If a view class with the same name exists, the view class also will be used. Note: A given controller may only be used *once* in your app in this manner. A singleton instance of the controller will be created for you. Example:
         */
        render(name: string, context: {}, options: {}): string;
        /**
         * @description The `{{link-to}}` component renders a link to the supplied `routeName` passing an optionally supplied model to the route as its `model` context of the route. The block for `{{link-to}}` becomes the innerHTML of the rendered element:
         */
        'link-to'(routeName: string, context: {}, options: {}): string;
      }
    }
    export namespace streams {
      export namespace Ember {
        export class stream {
        }
      }
      export class Dependency {
      }
      export class Subscriber {
      }
    }
    export namespace stream {
      export class Stream {
      }
    }
    export namespace Test {
      /**
       * @description Loads a route, sets up any controllers, and renders any templates associated with the route as though a real user had triggered the route change while using your app.
       */
      function visit(url: string): RSVP.Promise<any>;
      /**
       * @description Clicks an element and triggers any actions triggered by the element's `click` event.
       */
      function click(selector: string): RSVP.Promise<any>;
      /**
       * @description Simulates a key event, e.g. `keypress`, `keydown`, `keyup` with the desired keyCode
       */
      function keyEvent(selector: string, type: string, keyCode: number): RSVP.Promise<any>;
      /**
       * @description Fills in an input element with some text.
       */
      function fillIn(selector: string, text: string): RSVP.Promise<any>;
      /**
       * @description Finds an element in the context of the app's container element. A simple alias for `app.$(selector)`.
       */
      function find(selector: string): {};
      /**
       * @description Like `find`, but throws an error if the element selector returns no results.
       */
      function findWithAssert(selector: string): {};
      /**
       * @description Causes the run loop to process any pending events. This is used to ensure that any async operations from other helpers (or your assertions) have been processed.
       */
      function wait(value: {}): RSVP.Promise<any>;
      /**
       * @description Returns the currently active route name.
       */
      function currentRouteName(): {};
      /**
       * @description Returns the current path.
       */
      function currentPath(): {};
      /**
       * @description Returns the current URL.
       */
      function currentURL(): {};
      /**
       * @description Pauses the current test - this is useful for debugging while testing or for test-driving. It allows you to inspect the state of your application at any point.
       */
      function pauseTest(): {};
      /**
       * @description Triggers the given DOM event on the element identified by the provided selector.
       */
      function triggerEvent(selector: string, context: string, type: string, options: {}): RSVP.Promise<any>;
      /**
       * @description This hook defers the readiness of the application, so that you can start the app when your tests are ready to run. It also sets the router's location to 'none', so that the window's location will not be modified (preventing both accidental leaking of state between tests and interference with your testing framework).
       */
      function setupForTesting();
      /**
       * @description `registerHelper` is used to register a test helper that will be injected when `App.injectTestHelpers` is called.
       */
      function registerHelper(name: string, helperMethod: Function, options: {});
      /**
       * @description `registerAsyncHelper` is used to register an async test helper that will be injected when `App.injectTestHelpers` is called.
       */
      function registerAsyncHelper(name: string, helperMethod: Function);
      /**
       * @description Remove a previously added helper method.
       */
      function unregisterHelper(name: string);
      /**
       * @description Used to register callbacks to be fired whenever `App.injectTestHelpers` is called.
       */
      function onInjectHelpers(callback: Function);
      /**
       * @description This returns a thenable tailored for testing.  It catches failed `onSuccess` callbacks and invokes the `Ember.Test.adapter.exception` callback in the last chained then.
       */
      function promise(resolver: Function, label: string);
      /**
       * @description Used to allow ember-testing to communicate with a specific testing framework.
       */
      var adapter: any;
      /**
       * @description Replacement for `Ember.RSVP.resolve` The only difference is this uses an instance of `Ember.Test.Promise`
       */
      function resolve(The: any);
      /**
       * @description This allows ember-testing to play nicely with other asynchronous events, such as an application that is waiting for a CSS3 transition or an IndexDB transaction.
       */
      function registerWaiter(context: {}, callback: Function);
      /**
       * @description `unregisterWaiter` is used to unregister a callback that was registered with `registerWaiter`.
       */
      function unregisterWaiter(context: {}, callback: Function);
      /**
       * @description This property contains the testing helpers for the current application. These are created once you call `injectTestHelpers` on your `Ember.Application` instance. The included helpers are also available on the `window` object by default, but can be used from this object on the individual application also.
       */
      var testHelpers: {};
      /**
       * @description This property indicates whether or not this application is currently in testing mode. This is set when `setupForTesting` is called on the current application.
       */
      var testing: boolean;
      /**
       * @description This injects the test helpers into the `helperContainer` object. If an object is provided it will be used as the helperContainer. If `helperContainer` is not set it will default to `window`. If a function of the same name has already been defined it will be cached (so that it can be reset if the helper is removed with `unregisterHelper` or `removeTestHelpers`).
       */
      function injectTestHelpers();
      /**
       * @description This removes all helpers that have been registered, and resets and functions that were overridden by the helpers.
       */
      function removeTestHelpers();
      export class Adapter {
        /**
         * @description This callback will be called whenever an async operation is about to start.
         */
        asyncStart();
        /**
         * @description This callback will be called whenever an async operation has completed.
         */
        asyncEnd();
        /**
         * @description Override this method with your testing framework's false assertion. This function is called whenever an exception occurs causing the testing promise to fail.
         */
        exception(error: string);
      }
      export class QUnitAdapter extends Adapter {
      }
    }
    export class ApplicationInstance extends EngineInstance {
    }
    export class Application extends Engine implements RegistryProxyMixin {
      /**
       * @description The root DOM element of the Application. This can be specified as an element or a [jQuery-compatible selector string](http://api.jquery.com/category/selectors/).
       */
      rootElement: DOMElement;
      /**
       * @description The `Ember.EventDispatcher` responsible for delegating events to this application's views.
       */
      eventDispatcher: EventDispatcher;
      /**
       * @description The DOM events for which the event dispatcher should listen.
       */
      customEvents: {};
      /**
       * @description Use this to defer readiness until some condition is true.
       */
      deferReadiness();
      /**
       * @description Call `advanceReadiness` after any asynchronous setup logic has completed. Each call to `deferReadiness` must be matched by a call to `advanceReadiness` or the application will never become ready and routing will not begin.
       */
      advanceReadiness();
      /**
       * @description Reset the application. This is typically used only in tests. It cleans up the application in the following order:
       */
      reset();
      /**
       * @description Boot a new instance of `Ember.ApplicationInstance` for the current application and navigate it to the given `url`. Returns a `Promise` that resolves with the instance when the initial routing and rendering is complete, or rejects with any error that occured during the boot process.
       */
      visit(url: string, options: ApplicationInstance.BootOptions): Promise<Ember.ApplicationInstance|Error>;
      /**
       * @description This creates a registry with the default Ember naming conventions.
       */
      static buildRegistry(namespace: Application): Registry;
      /**
       * @description Given a fullName return the corresponding factory.
       */
      resolveRegistration(fullName: string): Function;
      /**
       * @description Registers a factory that can be used for dependency injection (with `inject`) or for service lookup. Each factory is registered with a full name including two parts: `type:name`.
       */
      register(fullName: string, factory: Function, options: {});
      /**
       * @description Unregister a factory.
       */
      unregister(fullName: string);
      /**
       * @description Check if a factory is registered.
       */
      hasRegistration(fullName: string): boolean;
      /**
       * @description Register an option for a particular factory.
       */
      registerOption(fullName: string, optionName: string, options: {});
      /**
       * @description Return a specific registered option for a particular factory.
       */
      registeredOption(fullName: string, optionName: string): {};
      /**
       * @description Register options for a particular factory.
       */
      registerOptions(fullName: string, options: {});
      /**
       * @description Return registered options for a particular factory.
       */
      registeredOptions(fullName: string): {};
      /**
       * @description Allow registering options for all factories of a type.
       */
      registerOptionsForType(type: string, options: {});
      /**
       * @description Return the registered options for all factories of a type.
       */
      registeredOptionsForType(type: string): {};
      /**
       * @description Define a dependency injection onto a specific factory or all factories of a type.
       */
      inject(factoryNameOrType: string, property: string, injectionName: string);
    }
    export class EngineInstance extends Object implements RegistryProxyMixin, ContainerProxyMixin {
      /**
       * @description Unregister a factory.
       */
      unregister(fullName: string);
      /**
       * @description Given a fullName return the corresponding factory.
       */
      resolveRegistration(fullName: string): Function;
      /**
       * @description Registers a factory that can be used for dependency injection (with `inject`) or for service lookup. Each factory is registered with a full name including two parts: `type:name`.
       */
      register(fullName: string, factory: Function, options: {});
      /**
       * @description Check if a factory is registered.
       */
      hasRegistration(fullName: string): boolean;
      /**
       * @description Register an option for a particular factory.
       */
      registerOption(fullName: string, optionName: string, options: {});
      /**
       * @description Return a specific registered option for a particular factory.
       */
      registeredOption(fullName: string, optionName: string): {};
      /**
       * @description Register options for a particular factory.
       */
      registerOptions(fullName: string, options: {});
      /**
       * @description Return registered options for a particular factory.
       */
      registeredOptions(fullName: string): {};
      /**
       * @description Allow registering options for all factories of a type.
       */
      registerOptionsForType(type: string, options: {});
      /**
       * @description Return the registered options for all factories of a type.
       */
      registeredOptionsForType(type: string): {};
      /**
       * @description Define a dependency injection onto a specific factory or all factories of a type.
       */
      inject(factoryNameOrType: string, property: string, injectionName: string);
      /**
       * @description Returns an object that can be used to provide an owner to a manually created instance.
       */
      ownerInjection(): {};
      /**
       * @description Given a fullName return a corresponding instance.
       */
      lookup(fullName: string, options: {}): any;
    }
    export class Engine extends Namespace {
      /**
       * @description This creates a registry with the default Ember naming conventions.
       */
      static buildRegistry(namespace: Application): Registry;
      /**
       * @description The goal of initializers should be to register dependencies and injections. This phase runs once. Because these initializers may load code, they are allowed to defer application readiness and advance it. If you need to access the container or store you should use an InstanceInitializer that will be run after all initializers and therefore after all code is loaded and the app is ready.
       */
      initializer(initializer: {});
      /**
       * @description Instance initializers run after all initializers have run. Because instance initializers run after the app is fully set up. We have access to the store, container, and other items. However, these initializers run after code has loaded and are not allowed to defer readiness.
       */
      instanceInitializer(instanceInitializer: any);
      /**
       * @description Set this to provide an alternate class to `Ember.DefaultResolver`
       */
      resolver: any;
    }
    export class DefaultResolver extends Object {
      /**
       * @description This will be set to the Application instance when it is created.
       */
      namespace: any;
      /**
       * @description This method is called via the container's resolver method. It parses the provided `fullName` and then looks up and returns the appropriate template or class.
       */
      resolve(fullName: string): {};
      /**
       * @description Convert the string name of the form 'type:name' to a Javascript object with the parsed aspects of the name broken out.
       */
      parseName(fullName: string);
      /**
       * @description Returns a human-readable description for a fullName. Used by the Application namespace in assertions to describe the precise name of the class that Ember is looking for, rather than container keys.
       */
      lookupDescription(fullName: string);
      /**
       * @description Given a parseName object (output from `parseName`), apply the conventions expected by `Ember.Router`
       */
      useRouterNaming(parsedName: {});
      /**
       * @description Look up the template in Ember.TEMPLATES
       */
      resolveTemplate(parsedName: {});
      /**
       * @description Lookup the view using `resolveOther`
       */
      resolveView(parsedName: {});
      /**
       * @description Lookup the controller using `resolveOther`
       */
      resolveController(parsedName: {});
      /**
       * @description Lookup the route using `resolveOther`
       */
      resolveRoute(parsedName: {});
      /**
       * @description Lookup the model on the Application namespace
       */
      resolveModel(parsedName: {});
      /**
       * @description Look up the specified object (from parsedName) on the appropriate namespace (usually on the Application)
       */
      resolveHelper(parsedName: {});
      /**
       * @description Look up the specified object (from parsedName) on the appropriate namespace (usually on the Application)
       */
      resolveOther(parsedName: {});
    }
    export class Debug {
      /**
       * @description Allows for runtime registration of handler functions that override the default deprecation behavior. Deprecations are invoked by calls to [Ember.deprecate](http://emberjs.com/api/classes/Ember.html#method_deprecate). The following example demonstrates its usage by registering a handler that throws an error if the message contains the word "should", otherwise defers to the default handler.
       */
      static registerDeprecationHandler(handler: Function);
      /**
       * @description Allows for runtime registration of handler functions that override the default warning behavior. Warnings are invoked by calls made to [Ember.warn](http://emberjs.com/api/classes/Ember.html#method_warn). The following example demonstrates its usage by registering a handler that does nothing overriding Ember's default warning behavior.
       */
      static registerWarnHandler(handler: Function);
    }
    export class ContainerDebugAdapter extends Object {
      /**
       * @description The resolver instance of the application being debugged. This property will be injected on creation.
       */
      resolver: any;
      /**
       * @description Returns true if it is possible to catalog a list of available classes in the resolver for a given type.
       */
      canCatalogEntriesByType(type: string): boolean;
      /**
       * @description Returns the available classes a given type.
       */
      catalogEntriesByType(type: string): Ember.Array;
    }
    export class DataAdapter {
      /**
       * @description The container-debug-adapter which is used to list all models.
       */
      containerDebugAdapter: any;
      /**
       * @description Ember Data > v1.0.0-beta.18 requires string model names to be passed around instead of the actual factories.
       */
      acceptsModelName: any;
      /**
       * @description Specifies how records can be filtered. Records returned will need to have a `filterValues` property with a key for every name in the returned array.
       */
      getFilters(): Ember.Array;
      /**
       * @description Fetch the model types and observe them for changes.
       */
      watchModelTypes(typesAdded: Function, typesUpdated: Function): Function;
      /**
       * @description Fetch the records of a given type and observe them for changes.
       */
      watchRecords(modelName: string, recordsAdded: Function, recordsUpdated: Function, recordsRemoved: Function): Function;
    }
    export class HTMLBars {
    }
    export class String {
      /**
       * @description Mark a string as safe for unescaped output with Ember templates. If you return HTML from a helper, use this function to ensure Ember's rendering layer does not escape the HTML.
       */
      static htmlSafe(): Handlebars.SafeString;
      /**
       * @description Apply formatting options to the string. This will look for occurrences of "%@" in your string and substitute them with the arguments you pass into this method. If you want to control the specific order of replacement, you can add a number after the key as well to indicate which argument you want to insert.
       * @deprecated Use ES6 template strings instead: http://babeljs.io/docs/learn-es2015/#template-strings
       */
      fmt(str: string, formats: Ember.Array): string;
      /**
       * @description Formats the passed string, but first looks up the string in the localized strings hash. This is a convenient way to localize text. See `Ember.String.fmt()` for more information on formatting.
       */
      loc(str: string, formats: Ember.Array): string;
      /**
       * @description Splits a string into separate units separated by spaces, eliminating any empty strings in the process. This is a convenience method for split that is mostly useful when applied to the `String.prototype`.
       */
      w(str: string): Ember.Array;
      /**
       * @description Converts a camelized string into all lower case separated by underscores.
       */
      decamelize(str: string): string;
      /**
       * @description Replaces underscores, spaces, or camelCase with dashes.
       */
      dasherize(str: string): string;
      /**
       * @description Returns the lowerCamelCase form of a string.
       */
      camelize(str: string): string;
      /**
       * @description Returns the UpperCamelCase form of a string.
       */
      classify(str: string): string;
      /**
       * @description More general than decamelize. Returns the lower\_case\_and\_underscored form of a string.
       */
      underscore(str: string): string;
      /**
       * @description Returns the Capitalized form of a string
       */
      capitalize(str: string): string;
    }
    export class Helper {
      /**
       * @description On a class-based helper, it may be useful to force a recomputation of that helpers value. This is akin to `rerender` on a component.
       */
      recompute();
      /**
       * @description Override this function when writing a class-based helper.
       */
      compute(params: Ember.Array, hash: {});
      /**
       * @description In many cases, the ceremony of a full `Ember.Helper` class is not required. The `helper` method create pure-function helpers without instances. For example:
       */
      static helper(helper: Function);
    }
    export class Binding {
      /**
       * @description This copies the Binding so it can be connected to another object.
       */
      copy(): Binding;
      /**
       * @description This will set `from` property path to the specified value. It will not attempt to resolve this property path to an actual object until you connect the binding.
       */
      from(path: string): Binding;
      /**
       * @description This will set the `to` property path to the specified value. It will not attempt to resolve this property path to an actual object until you connect the binding.
       */
      to(path: string|any[]): Binding;
      /**
       * @description Configures the binding as one way. A one-way binding will relay changes on the `from` side to the `to` side, but not the other way around. This means that if you change the `to` side directly, the `from` side may have a different value.
       */
      oneWay(): Binding;
      toString(): string;
      /**
       * @description Attempts to connect this binding instance so that it can receive and relay changes. This method will raise an exception if you have not set the from/to properties yet.
       */
      connect(obj: {}): Binding;
      /**
       * @description Disconnects the binding instance. Changes will no longer be relayed. You will not usually need to call this method.
       */
      disconnect(obj: {}): Binding;
    }
    export class ComputedProperty {
      /**
       * @description Call on a computed property to set it into non-cached mode. When in this mode the computed property will not automatically cache the return value.
       */
      volatile(): ComputedProperty;
      /**
       * @description Call on a computed property to set it into read-only mode. When in this mode the computed property will throw an error when set.
       */
      readOnly(): ComputedProperty;
      /**
       * @description Sets the dependent keys on this computed property. Pass any number of arguments containing key paths that this computed property depends on.
       */
      property(path: string): ComputedProperty;
      /**
       * @description In some cases, you may want to annotate computed properties with additional metadata about how they function or what values they operate on. For example, computed property functions may close over variables that are then no longer available for introspection.
       */
      meta(meta: {});
      /**
       * @description Access the value of the function backing the computed property. If this property has already been cached, return the cached result. Otherwise, call the function passing the property name as an argument.
       */
      get(keyName: string): {};
      /**
       * @description Set the value of a computed property. If the function that backs your computed property does not accept arguments then the default action for setting would be to define the property on the current object, and set the value of the property to the value being set.
       */
      set(keyName: string, newValue: {}): {};
    }
    export class computed {
      /**
       * @description A computed property that returns true if the value of the dependent property is null, an empty string, empty array, or empty function.
       */
      empty(dependentKey: string): ComputedProperty;
      /**
       * @description A computed property that returns true if the value of the dependent property is NOT null, an empty string, empty array, or empty function.
       */
      notEmpty(dependentKey: string): ComputedProperty;
      /**
       * @description A computed property that returns true if the value of the dependent property is null or undefined. This avoids errors from JSLint complaining about use of ==, which can be technically confusing.
       */
      none(dependentKey: string): ComputedProperty;
      /**
       * @description A computed property that returns the inverse boolean value of the original value for the dependent property.
       */
      not(dependentKey: string): ComputedProperty;
      /**
       * @description A computed property that converts the provided dependent property into a boolean value.
       */
      bool(dependentKey: string): ComputedProperty;
      /**
       * @description A computed property which matches the original value for the dependent property against a given RegExp, returning `true` if the value matches the RegExp and `false` if it does not.
       */
      match(dependentKey: string, regexp: RegExp): ComputedProperty;
      /**
       * @description A computed property that returns true if the provided dependent property is equal to the given value.
       */
      equal(dependentKey: string, value: string|number|{}): ComputedProperty;
      /**
       * @description A computed property that returns true if the provided dependent property is greater than the provided value.
       */
      gt(dependentKey: string, value: number): ComputedProperty;
      /**
       * @description A computed property that returns true if the provided dependent property is greater than or equal to the provided value.
       */
      gte(dependentKey: string, value: number): ComputedProperty;
      /**
       * @description A computed property that returns true if the provided dependent property is less than the provided value.
       */
      lt(dependentKey: string, value: number): ComputedProperty;
      /**
       * @description A computed property that returns true if the provided dependent property is less than or equal to the provided value.
       */
      lte(dependentKey: string, value: number): ComputedProperty;
      /**
       * @description A computed property that performs a logical `and` on the original values for the provided dependent properties.
       */
      and(dependentKey: string): ComputedProperty;
      /**
       * @description A computed property which performs a logical `or` on the original values for the provided dependent properties.
       */
      or(dependentKey: string): ComputedProperty;
      /**
       * @description Creates a new property that is an alias for another property on an object. Calls to `get` or `set` this property behave as though they were called on the original property.
       */
      alias(dependentKey: string): ComputedProperty;
      /**
       * @description Where `computed.alias` aliases `get` and `set`, and allows for bidirectional data flow, `computed.oneWay` only provides an aliased `get`. The `set` will not mutate the upstream property, rather causes the current property to become the value set. This causes the downstream property to permanently diverge from the upstream property.
       */
      oneWay(dependentKey: string): ComputedProperty;
      /**
       * @description This is a more semantically meaningful alias of `computed.oneWay`, whose name is somewhat ambiguous as to which direction the data flows.
       */
      reads(dependentKey: string): ComputedProperty;
      /**
       * @description Where `computed.oneWay` provides oneWay bindings, `computed.readOnly` provides a readOnly one way binding. Very often when using `computed.oneWay` one does not also want changes to propagate back up, as they will replace the value.
       */
      readOnly(dependentKey: string): ComputedProperty;
      /**
       * @description Creates a new property that is an alias for another property on an object. Calls to `get` or `set` this property behave as though they were called on the original property, but also print a deprecation warning.
       */
      deprecatingAlias(dependentKey: string): ComputedProperty;
      /**
       * @description A computed property that returns the sum of the values in the dependent array.
       */
      sum(dependentKey: string): ComputedProperty;
      /**
       * @description A computed property that calculates the maximum value in the dependent array. This will return `-Infinity` when the dependent array is empty.
       */
      max(dependentKey: string): ComputedProperty;
      /**
       * @description A computed property that calculates the minimum value in the dependent array. This will return `Infinity` when the dependent array is empty.
       */
      min(dependentKey: string): ComputedProperty;
      /**
       * @description Returns an array mapped via the callback
       */
      map(dependentKey: string, callback: Function): ComputedProperty;
      /**
       * @description Returns an array mapped to the specified key.
       */
      mapBy(dependentKey: string, propertyKey: string): ComputedProperty;
      /**
       * @description Filters the array by the callback.
       */
      filter(dependentKey: string, callback: Function): ComputedProperty;
      /**
       * @description Filters the array by the property and value
       */
      filterBy(dependentKey: string, propertyKey: string, value: any): ComputedProperty;
      /**
       * @description A computed property which returns a new array with all the unique elements from one or more dependent arrays.
       */
      uniq(propertyKey: string): ComputedProperty;
      /**
       * @description Alias for [Ember.computed.uniq](/api/#method_computed_uniq).
       */
      union(propertyKey: string): ComputedProperty;
      /**
       * @description A computed property which returns a new array with all the duplicated elements from two or more dependent arrays.
       */
      intersect(propertyKey: string): ComputedProperty;
      /**
       * @description A computed property which returns a new array with all the properties from the first dependent array that are not in the second dependent array.
       */
      setDiff(setAProperty: string, setBProperty: string): ComputedProperty;
      /**
       * @description A computed property that returns the array of values for the provided dependent properties.
       */
      collect(dependentKey: string): ComputedProperty;
      /**
       * @description A computed property which returns a new array with all the properties from the first dependent array sorted based on a property or sort function.
       */
      sort(itemsKey: string, sortDefinition: string): ComputedProperty;
    }
    export class Error {
    }
    export class FEATURES {
      /**
       * @description Determine whether the specified `feature` is enabled. Used by Ember's build tools to exclude experimental features from beta/stable builds.
       */
      isEnabled(feature: string): boolean;
    }
    export class InjectedProperty {
    }
    export class Instrumentation {
    }
    export class Logger {
      /**
       * @description Logs the arguments to the console. You can pass as many arguments as you want and they will be joined together with a space.
       */
      log(args: any);
      /**
       * @description Prints the arguments to the console with a warning icon. You can pass as many arguments as you want and they will be joined together with a space.
       */
      warn(args: any);
      /**
       * @description Prints the arguments to the console with an error icon, red text and a stack trace. You can pass as many arguments as you want and they will be joined together with a space.
       */
      error(args: any);
      /**
       * @description Logs the arguments to the console. You can pass as many arguments as you want and they will be joined together with a space.
       */
      info(args: any);
      /**
       * @description Logs the arguments to the console in blue text. You can pass as many arguments as you want and they will be joined together with a space.
       */
      debug(args: any);
      /**
       * @description If the value passed into `Ember.Logger.assert` is not truthy it will throw an error with a stack trace.
       */
      assert(bool: boolean);
    }
    export class OrderedSet {
    }
    export class Map {
    }
    export class MapWithDefault extends Map {
    }
    export class Mixin {
      static create(args: any);
    }
    export class run {
      /**
       * @description Replaces objects in an array with the passed objects.
       * @deprecated 
       */
      replace(array: Ember.Array, idx: number, amt: number, objects: Ember.Array): Ember.Array;
      /**
       * @description If no run-loop is present, it creates a new one. If a run loop is present it will queue itself to run on the existing run-loops action queue.
       */
      join(target: {}, method: Function|string, ...args: any[]): {};
      /**
       * @description Allows you to specify which context to call the specified function in while adding the execution of that function to the Ember run loop. This ability makes this method a great way to asynchronously integrate third-party libraries into your Ember application.
       */
      bind(target: {}, method: Function|string, ...args: any[]): Function;
      /**
       * @description Begins a new RunLoop. Any deferred actions invoked after the begin will be buffered until you invoke a matching call to `run.end()`. This is a lower-level way to use a RunLoop instead of using `run()`.
       */
      begin(): void;
      /**
       * @description Ends a RunLoop. This must be called sometime after you call `run.begin()` to flush any deferred actions. This is a lower-level way to use a RunLoop instead of using `run()`.
       */
      end(): void;
      /**
       * @description Adds the passed target/method and any optional arguments to the named queue to be executed at the end of the RunLoop. If you have not already started a RunLoop when calling this method one will be started for you automatically.
       */
      schedule(queue: string, target: {}, method: string|Function, ...args: any[]): void;
      /**
       * @description Invokes the passed target/method and optional arguments after a specified period of time. The last parameter of this method must always be a number of milliseconds.
       */
      later(target: {}, method: Function|string, ...args: any[]): any;
      later(target: {}, method: Function|string, wait: number): any;
      /**
       * @description Schedule a function to run one time during the current RunLoop. This is equivalent to calling `scheduleOnce` with the "actions" queue.
       */
      once(target: {}, method: Function|string, ...args: any[]): {};
      /**
       * @description Schedules a function to run one time in a given queue of the current RunLoop. Calling this method with the same queue/target/method combination will have no effect (past the initial call).
       */
      scheduleOnce(queue: string, target: {}, method: Function|string, ...args: any[]): {};
      /**
       * @description Schedules an item to run from within a separate run loop, after control has been returned to the system. This is equivalent to calling `run.later` with a wait time of 1ms.
       */
      next(target: {}, method: Function|string, ...args: any[]): {};
      /**
       * @description Cancels a scheduled item. Must be a value returned by `run.later()`, `run.once()`, `run.scheduleOnce()`, `run.next()`, `run.debounce()`, or `run.throttle()`.
       */
      cancel(timer: {}): boolean;
      /**
       * @description Delay calling the target method until the debounce period has elapsed with no additional debounce calls. If `debounce` is called again before the specified time has elapsed, the timer is reset and the entire period must pass again before the target method is called.
       */
      debounce(target: {}, method: Function|string, ...args: any[]): Ember.Array;
      debounce(target: {}, method: Function|string, wait: number, immediate: boolean): Ember.Array;
      /**
       * @description Ensure that the target method is never called more frequently than the specified spacing period. The target method is called immediately.
       */
      throttle(target: {}, method: Function|string, ...args: any[]): Ember.Array;
      throttle(target: {}, method: Function|string, spacing: number, immediate: boolean): Ember.Array;
    }
    export class LinkComponent extends Component {
      /**
       * @description Used to determine when this `LinkComponent` is active.
       */
      currentWhen: any;
      /**
       * @description Sets the `title` attribute of the `LinkComponent`'s HTML element.
       */
      title: any;
      /**
       * @description Sets the `rel` attribute of the `LinkComponent`'s HTML element.
       */
      rel: any;
      /**
       * @description Sets the `tabindex` attribute of the `LinkComponent`'s HTML element.
       */
      tabindex: any;
      /**
       * @description Sets the `target` attribute of the `LinkComponent`'s HTML element.
       */
      target: any;
      /**
       * @description Determines whether the `LinkComponent` will trigger routing via the `replaceWith` routing strategy.
       */
      replace: boolean;
      /**
       * @description By default the `{{link-to}}` component will bind to the `href` and `title` attributes. It's discouraged that you override these defaults, however you can push onto the array if needed.
       */
      attributeBindings: Ember.Array;
      /**
       * @description By default the `{{link-to}}` component will bind to the `active`, `loading`, and `disabled` classes. It is discouraged to override these directly.
       */
      classNameBindings: Ember.Array;
    }
    export class ControllerMixin implements ActionHandler {
      /**
       * @description Defines which query parameters the controller accepts. If you give the names `['category','page']` it will bind the values of these query parameters to the variables `this.category` and `this.page`
       */
      queryParams: any;
      /**
       * @description Transition the application into another route. The route may be either a single route or route path:
       */
      transitionToRoute(name: string, ...models: any[]);
      transitionToRoute(name: string, options: {});
      /**
       * @description The object to which actions from the view should be sent.
       */
      target: any;
      /**
       * @description The controller's current model. When retrieving or modifying a controller's model, this property should be used instead of the `content` property.
       */
      model: any;
      /**
       * @description The collection of functions, keyed by name, available on this `ActionHandler` as action targets.
       */
      actions: {};
      /**
       * @description Triggers a named action on the `ActionHandler`. Any parameters supplied after the `actionName` string will be passed as arguments to the action target function.
       */
      send(actionName: string, context: any);
    }
    export class Location {
    }
    export class AutoLocation {
    }
    export class HashLocation extends Object {
    }
    export class HistoryLocation extends Object {
    }
    export class NoneLocation extends Object {
    }
    export class Route extends Object implements ActionHandler, Evented {
      /**
       * @description Configuration hash for this route's queryParams. The possible configuration options and their defaults are as follows (assuming a query param whose controller property is `page`):
       */
      queryParams: {};
      /**
       * @description The name of the route, dot-delimited.
       */
      routeName: string;
      /**
       * @description Retrieves parameters, for current route using the state.params variable and getQueryParamsFor, using the supplied routeName.
       */
      paramsFor(name: string);
      /**
       * @description A hook you can use to reset controller values either when the model changes or the route is exiting.
       */
      resetController(controller: Controller, isExiting: boolean, transition: {});
      /**
       * @description The name of the view to use by default when rendering this routes template.
       */
      viewName: string;
      /**
       * @description The name of the template to use by default when rendering this routes template.
       */
      templateName: string;
      /**
       * @description The name of the controller to associate with this route.
       */
      controllerName: string;
      /**
       * @description The controller associated with this route.
       */
      controller: Controller;
      /**
       * @description This hook is executed when the router completely exits this route. It is not executed when the model for the route changes.
       */
      deactivate();
      /**
       * @description This hook is executed when the router enters the route. It is not executed when the model for the route changes.
       */
      activate();
      /**
       * @description Transition the application into another route. The route may be either a single route or route path:
       */
      transitionTo(name: string, ...models: any[]): Transition;
      transitionTo(name: string, options: {}): Transition;
      /**
       * @description Perform a synchronous transition into another route without attempting to resolve promises, update the URL, or abort any currently active asynchronous transitions (i.e. regular transitions caused by `transitionTo` or URL changes).
       */
      intermediateTransitionTo(name: string, ...models: any[]);
      /**
       * @description Refresh the model on this route and any child routes, firing the `beforeModel`, `model`, and `afterModel` hooks in a similar fashion to how routes are entered when transitioning in from other route. The current route params (e.g. `article_id`) will be passed in to the respective model hooks, and if a different model is returned, `setupController` and associated route hooks will re-fire as well.
       */
      refresh(): Transition;
      /**
       * @description Transition into another route while replacing the current URL, if possible. This will replace the current history entry instead of adding a new one. Beside that, it is identical to `transitionTo` in all other respects. See 'transitionTo' for additional information regarding multiple models.
       */
      replaceWith(name: string, ...models: any[]): Transition;
      /**
       * @description Sends an action to the router, which will delegate it to the currently active route hierarchy per the bubbling rules explained under `actions`.
       */
      send(name: string, ...args: any[]);
      /**
       * @description This hook is the first of the route entry validation hooks called when an attempt is made to transition into a route or one of its children. It is called before `model` and `afterModel`, and is appropriate for cases when:
       */
      beforeModel(transition: Transition): Promise<any>;
      /**
       * @description This hook is called after this route's model has resolved. It follows identical async/promise semantics to `beforeModel` but is provided the route's resolved model in addition to the `transition`, and is therefore suited to performing logic that can only take place after the model has already resolved.
       */
      afterModel(resolvedModel: {}, transition: Transition): Promise<any>;
      /**
       * @description A hook you can implement to optionally redirect to another route.
       */
      redirect(model: {}, transition: Transition);
      /**
       * @description A hook you can implement to convert the URL into the model for this route.
       */
      model(params: {}, transition: Transition): {}|Promise<any>;
      /**
       * @description A hook you can implement to convert the route's model into parameters for the URL.
       */
      serialize(model: {}, params: Ember.Array): {};
      /**
       * @description A hook you can use to setup the controller for the current route.
       */
      setupController(controller: Controller, model: {});
      /**
       * @description Returns the controller for a particular route or name.
       */
      controllerFor(name: string): Controller;
      /**
       * @description Returns the resolved model of a parent (or any ancestor) route in a route hierarchy.  During a transition, all routes must resolve a model object, and if a route needs access to a parent route's model in order to resolve a model (or just reuse the model from a parent), it can call `this.modelFor(theNameOfParentRoute)` to retrieve it. If the ancestor route's model was a promise, its resolved result is returned.
       */
      modelFor(name: string): {};
      /**
       * @description A hook you can use to render the template for the current route.
       */
      renderTemplate(controller: {}, model: {});
      /**
       * @description `render` is used to render a template into a region of another template (indicated by an `{{outlet}}`). `render` is used both during the entry phase of routing (via the `renderTemplate` hook) and later in response to user interaction.
       */
      render(name: string, options: {});
      /**
       * @description Disconnects a view that has been rendered into an outlet.
       */
      disconnectOutlet(options: {}|string);
      /**
       * @description The collection of functions, keyed by name, available on this `ActionHandler` as action targets.
       */
      actions: {};
      /**
       * @description Subscribes to a named event with given function.
       */
      on(name: string, target: {}, method: Function): void;
      /**
       * @description Subscribes a function to a named event and then cancels the subscription after the first time the event is triggered. It is good to use ``one`` when you only care about the first time an event has taken place.
       */
      one(name: string, target: {}, method: Function): void;
      /**
       * @description Triggers a named event for the object. Any additional arguments will be passed as parameters to the functions that are subscribed to the event.
       */
      trigger(name: string, ...args: any[]);
      /**
       * @description Cancels subscription for given name, target, and method.
       */
      off(name: string, target: {}, method: Function): void;
      /**
       * @description Checks to see if object has any subscriptions for named event.
       */
      has(name: string): boolean;
    }
    export class Router extends Object implements Evented {
      /**
       * @description The `location` property determines the type of URL's that your application will use.
       */
      location: any;
      /**
       * @description Represents the URL of the root of the application, often '/'. This prefix is assumed on all routes defined on this router.
       */
      rootURL: any;
      /**
       * @description Handles updating the paths and notifying any listeners of the URL change.
       */
      didTransition();
      /**
       * @description Handles notifying any listeners of an impending URL change.
       */
      willTransition();
      /**
       * @description The `Router.map` function allows you to define mappings from URLs to routes in your application. These mappings are defined within the supplied callback function using `this.route`.
       */
      map(callback: any);
      /**
       * @description Subscribes to a named event with given function.
       */
      on(name: string, target: {}, method: Function): void;
      /**
       * @description Subscribes a function to a named event and then cancels the subscription after the first time the event is triggered. It is good to use ``one`` when you only care about the first time an event has taken place.
       */
      one(name: string, target: {}, method: Function): void;
      /**
       * @description Triggers a named event for the object. Any additional arguments will be passed as parameters to the functions that are subscribed to the event.
       */
      trigger(name: string, ...args: any[]);
      /**
       * @description Cancels subscription for given name, target, and method.
       */
      off(name: string, target: {}, method: Function): void;
      /**
       * @description Checks to see if object has any subscriptions for named event.
       */
      has(name: string): boolean;
    }
    export class Controller extends Object implements ControllerMixin {
      /**
       * @description Defines which query parameters the controller accepts. If you give the names `['category','page']` it will bind the values of these query parameters to the variables `this.category` and `this.page`
       */
      queryParams: any;
      /**
       * @description Transition the application into another route. The route may be either a single route or route path:
       */
      transitionToRoute(name: string, ...models: any[]);
      transitionToRoute(name: string, options: {});
      /**
       * @description The object to which actions from the view should be sent.
       */
      target: any;
      /**
       * @description The controller's current model. When retrieving or modifying a controller's model, this property should be used instead of the `content` property.
       */
      model: any;
      /**
       * @description The collection of functions, keyed by name, available on this `ActionHandler` as action targets.
       */
      actions: {};
      /**
       * @description Triggers a named action on the `ActionHandler`. Any parameters supplied after the `actionName` string will be passed as arguments to the action target function.
       */
      send(actionName: string, context: any);
    }
    export class inject {
      /**
       * @description Creates a property that lazily looks up another controller in the container. Can only be used when defining another controller.
       */
      controller(name: string): InjectedProperty;
      /**
       * @description Creates a property that lazily looks up a service in the container. There are no restrictions as to what objects a service can be injected into.
       */
      service(name: string): InjectedProperty;
    }
    export class ProxyMixin {
    }
    export class ActionHandler {
      /**
       * @description The collection of functions, keyed by name, available on this `ActionHandler` as action targets.
       */
      actions: {};
      /**
       * @description Triggers a named action on the `ActionHandler`. Any parameters supplied after the `actionName` string will be passed as arguments to the action target function.
       */
      send(actionName: string, context: any);
    }
    export class Array implements Enumerable {
      /**
       * @description __Required.__ You must implement this method to apply this mixin.
       */
      length: number;
      /**
       * @description Returns the object at the given `index`. If the given `index` is negative or is greater or equal than the array length, returns `undefined`.
       */
      objectAt(idx: number): any;
      /**
       * @description This returns the objects at the specified indexes, using `objectAt`.
       */
      objectsAt(indexes: Ember.Array): Ember.Array;
      /**
       * @description This is the handler for the special array content property. If you get this property, it will return this. If you set this property to a new array, it will replace the current content.
       */
      '[]': any;
      /**
       * @description Returns a new array that is a slice of the receiver. This implementation uses the observable array methods to retrieve the objects for the new slice.
       */
      slice(beginIndex: number, endIndex: number): Ember.Array;
      /**
       * @description Returns the index of the given object's first occurrence. If no `startAt` argument is given, the starting location to search is 0. If it's negative, will count backward from the end of the array. Returns -1 if no match is found.
       */
      indexOf(object: {}, startAt: number): number;
      /**
       * @description Returns the index of the given object's last occurrence. If no `startAt` argument is given, the search starts from the last position. If it's negative, will count backward from the end of the array. Returns -1 if no match is found.
       */
      lastIndexOf(object: {}, startAt: number): number;
      /**
       * @description Adds an array observer to the receiving array. The array observer object normally must implement two methods:
       */
      addArrayObserver(target: {}, opts: {}): Ember.Array;
      /**
       * @description Removes an array observer from the object if the observer is current registered. Calling this method multiple times with the same object will have no effect.
       */
      removeArrayObserver(target: {}, opts: {}): Ember.Array;
      /**
       * @description Becomes true whenever the array currently has observers watching changes on the array.
       */
      hasArrayObservers: boolean;
      /**
       * @description If you are implementing an object that supports `Ember.Array`, call this method just before the array content changes to notify any observers and invalidate any related properties. Pass the starting index of the change as well as a delta of the amounts to change.
       */
      arrayContentWillChange(startIdx: number, removeAmt: number, addAmt: number): Ember.Array;
      /**
       * @description If you are implementing an object that supports `Ember.Array`, call this method just after the array content changes to notify any observers and invalidate any related properties. Pass the starting index of the change as well as a delta of the amounts to change.
       */
      arrayContentDidChange(startIdx: number, removeAmt: number, addAmt: number): Ember.Array;
      /**
       * @description Returns a special object that can be used to observe individual properties on the array. Just get an equivalent property on this object and it will return an enumerable that maps automatically to the named key on the member objects.
       */
      '@each': any;
      /**
       * @description Helper method returns the first object from a collection. This is usually used by bindings and other parts of the framework to extract a single object if the enumerable contains only one item.
       */
      firstObject: any;
      /**
       * @description Helper method returns the last object from a collection. If your enumerable contains only one object, this method should always return that object. If your enumerable is empty, this method should return `undefined`.
       */
      lastObject: any;
      /**
       * @description Returns `true` if the passed object can be found in the receiver. The default version will iterate through the enumerable until the object is found. You may want to override this with a more efficient version.
       */
      contains(obj: {}): boolean;
      /**
       * @description Iterates through the enumerable, calling the passed function on each item. This method corresponds to the `forEach()` method defined in JavaScript 1.6.
       */
      forEach(callback: Function, target: {}): {};
      /**
       * @description Alias for `mapBy`
       */
      getEach(key: string): Ember.Array;
      /**
       * @description Sets the value on the named property for each member. This is more efficient than using other methods defined on this helper. If the object implements Ember.Observable, the value will be changed to `set(),` otherwise it will be set directly. `null` objects are skipped.
       */
      setEach(key: string, value: {}): {};
      /**
       * @description Maps all of the items in the enumeration to another value, returning a new array. This method corresponds to `map()` defined in JavaScript 1.6.
       */
      map(callback: Function, target: {}): Ember.Array;
      /**
       * @description Similar to map, this specialized function returns the value of the named property on all items in the enumeration.
       */
      mapBy(key: string): Ember.Array;
      /**
       * @description Returns an array with all of the items in the enumeration that the passed function returns true for. This method corresponds to `filter()` defined in JavaScript 1.6.
       */
      filter(callback: Function, target: {}): Ember.Array;
      /**
       * @description Returns an array with all of the items in the enumeration where the passed function returns false. This method is the inverse of filter().
       */
      reject(callback: Function, target: {}): Ember.Array;
      /**
       * @description Returns an array with just the items with the matched property. You can pass an optional second argument with the target value. Otherwise this will match any property that evaluates to `true`.
       */
      filterBy(key: string, value: any): Ember.Array;
      /**
       * @description Returns an array with the items that do not have truthy values for key.  You can pass an optional second argument with the target value.  Otherwise this will match any property that evaluates to false.
       */
      rejectBy(key: string, value: string): Ember.Array;
      /**
       * @description Returns the first item in the array for which the callback returns true. This method works similar to the `filter()` method defined in JavaScript 1.6 except that it will stop working on the array once a match is found.
       */
      find(callback: Function, target: {}): {};
      /**
       * @description Returns the first item with a property matching the passed value. You can pass an optional second argument with the target value. Otherwise this will match any property that evaluates to `true`.
       */
      findBy(key: string, value: string): {};
      /**
       * @description Returns `true` if the passed function returns true for every item in the enumeration. This corresponds with the `every()` method in JavaScript 1.6.
       */
      every(callback: Function, target: {}): boolean;
      /**
       * @description Returns `true` if the passed property resolves to the value of the second argument for all items in the enumerable. This method is often simpler/faster than using a callback.
       */
      isEvery(key: string, value: string): boolean;
      /**
       * @description Returns `true` if the passed function returns true for any item in the enumeration. This corresponds with the `some()` method in JavaScript 1.6.
       */
      any(callback: Function, target: {}): boolean;
      /**
       * @description Returns `true` if the passed property resolves to the value of the second argument for any item in the enumerable. This method is often simpler/faster than using a callback.
       */
      isAny(key: string, value: string): boolean;
      /**
       * @description This will combine the values of the enumerator into a single value. It is a useful way to collect a summary value from an enumeration. This corresponds to the `reduce()` method defined in JavaScript 1.8.
       */
      reduce(callback: Function, initialValue: {}, reducerProperty: string): {};
      /**
       * @description Invokes the named method on every object in the receiver that implements it. This method corresponds to the implementation in Prototype 1.6.
       */
      invoke(methodName: string, ...args: any[]): Ember.Array;
      /**
       * @description Simply converts the enumerable into a genuine array. The order is not guaranteed. Corresponds to the method implemented by Prototype.
       */
      toArray(): Ember.Array;
      /**
       * @description Returns a copy of the array with all `null` and `undefined` elements removed.
       */
      compact(): Ember.Array;
      /**
       * @description Returns a new enumerable that excludes the passed value. The default implementation returns an array regardless of the receiver type unless the receiver does not contain the value.
       */
      without(value: {}): Enumerable;
      /**
       * @description Returns a new enumerable that contains only unique values. The default implementation returns an array regardless of the receiver type.
       */
      uniq(): Enumerable;
      /**
       * @description Converts the enumerable into an array and sorts by the keys specified in the argument.
       */
      sortBy(property: string): Ember.Array;
    }
    export class Comparable {
    }
    export class Copyable {
    }
    export class Enumerable {
      /**
       * @description Helper method returns the first object from a collection. This is usually used by bindings and other parts of the framework to extract a single object if the enumerable contains only one item.
       */
      firstObject: any;
      /**
       * @description Helper method returns the last object from a collection. If your enumerable contains only one object, this method should always return that object. If your enumerable is empty, this method should return `undefined`.
       */
      lastObject: any;
      /**
       * @description Returns `true` if the passed object can be found in the receiver. The default version will iterate through the enumerable until the object is found. You may want to override this with a more efficient version.
       */
      contains(obj: {}): boolean;
      /**
       * @description Iterates through the enumerable, calling the passed function on each item. This method corresponds to the `forEach()` method defined in JavaScript 1.6.
       */
      forEach(callback: Function, target: {}): {};
      /**
       * @description Alias for `mapBy`
       */
      getEach(key: string): Ember.Array;
      /**
       * @description Sets the value on the named property for each member. This is more efficient than using other methods defined on this helper. If the object implements Ember.Observable, the value will be changed to `set(),` otherwise it will be set directly. `null` objects are skipped.
       */
      setEach(key: string, value: {}): {};
      /**
       * @description Maps all of the items in the enumeration to another value, returning a new array. This method corresponds to `map()` defined in JavaScript 1.6.
       */
      map(callback: Function, target: {}): Ember.Array;
      /**
       * @description Similar to map, this specialized function returns the value of the named property on all items in the enumeration.
       */
      mapBy(key: string): Ember.Array;
      /**
       * @description Returns an array with all of the items in the enumeration that the passed function returns true for. This method corresponds to `filter()` defined in JavaScript 1.6.
       */
      filter(callback: Function, target: {}): Ember.Array;
      /**
       * @description Returns an array with all of the items in the enumeration where the passed function returns false. This method is the inverse of filter().
       */
      reject(callback: Function, target: {}): Ember.Array;
      /**
       * @description Returns an array with just the items with the matched property. You can pass an optional second argument with the target value. Otherwise this will match any property that evaluates to `true`.
       */
      filterBy(key: string, value: any): Ember.Array;
      /**
       * @description Returns an array with the items that do not have truthy values for key.  You can pass an optional second argument with the target value.  Otherwise this will match any property that evaluates to false.
       */
      rejectBy(key: string, value: string): Ember.Array;
      /**
       * @description Returns the first item in the array for which the callback returns true. This method works similar to the `filter()` method defined in JavaScript 1.6 except that it will stop working on the array once a match is found.
       */
      find(callback: Function, target: {}): {};
      /**
       * @description Returns the first item with a property matching the passed value. You can pass an optional second argument with the target value. Otherwise this will match any property that evaluates to `true`.
       */
      findBy(key: string, value: string): {};
      /**
       * @description Returns `true` if the passed function returns true for every item in the enumeration. This corresponds with the `every()` method in JavaScript 1.6.
       */
      every(callback: Function, target: {}): boolean;
      /**
       * @description Returns `true` if the passed property resolves to the value of the second argument for all items in the enumerable. This method is often simpler/faster than using a callback.
       */
      isEvery(key: string, value: string): boolean;
      /**
       * @description Returns `true` if the passed function returns true for any item in the enumeration. This corresponds with the `some()` method in JavaScript 1.6.
       */
      any(callback: Function, target: {}): boolean;
      /**
       * @description Returns `true` if the passed property resolves to the value of the second argument for any item in the enumerable. This method is often simpler/faster than using a callback.
       */
      isAny(key: string, value: string): boolean;
      /**
       * @description This will combine the values of the enumerator into a single value. It is a useful way to collect a summary value from an enumeration. This corresponds to the `reduce()` method defined in JavaScript 1.8.
       */
      reduce(callback: Function, initialValue: {}, reducerProperty: string): {};
      /**
       * @description Invokes the named method on every object in the receiver that implements it. This method corresponds to the implementation in Prototype 1.6.
       */
      invoke(methodName: string, ...args: any[]): Ember.Array;
      /**
       * @description Simply converts the enumerable into a genuine array. The order is not guaranteed. Corresponds to the method implemented by Prototype.
       */
      toArray(): Ember.Array;
      /**
       * @description Returns a copy of the array with all `null` and `undefined` elements removed.
       */
      compact(): Ember.Array;
      /**
       * @description Returns a new enumerable that excludes the passed value. The default implementation returns an array regardless of the receiver type unless the receiver does not contain the value.
       */
      without(value: {}): Enumerable;
      /**
       * @description Returns a new enumerable that contains only unique values. The default implementation returns an array regardless of the receiver type.
       */
      uniq(): Enumerable;
      /**
       * @description Converts the enumerable into an array and sorts by the keys specified in the argument.
       */
      sortBy(property: string): Ember.Array;
    }
    export class Evented {
      /**
       * @description Subscribes to a named event with given function.
       */
      on(name: string, target: {}, method: Function): void;
      /**
       * @description Subscribes a function to a named event and then cancels the subscription after the first time the event is triggered. It is good to use ``one`` when you only care about the first time an event has taken place.
       */
      one(name: string, target: {}, method: Function): void;
      /**
       * @description Triggers a named event for the object. Any additional arguments will be passed as parameters to the functions that are subscribed to the event.
       */
      trigger(name: string, ...args: any[]);
      /**
       * @description Cancels subscription for given name, target, and method.
       */
      off(name: string, target: {}, method: Function): void;
      /**
       * @description Checks to see if object has any subscriptions for named event.
       */
      has(name: string): boolean;
    }
    export class Freezable {
    }
    export class MutableArray implements Ember.Array, MutableEnumerable {
      /**
       * @description __Required.__ You must implement this method to apply this mixin.
       */
      replace(idx: number, amt: number, objects: Ember.Array);
      /**
       * @description Remove all elements from the array. This is useful if you want to reuse an existing array without having to recreate it.
       */
      clear(): Ember.Array;
      /**
       * @description This will use the primitive `replace()` method to insert an object at the specified index.
       */
      insertAt(idx: number, object: {}): Ember.Array;
      /**
       * @description Remove an object at the specified index using the `replace()` primitive method. You can pass either a single index, or a start and a length.
       */
      removeAt(start: number, len: number): Ember.Array;
      /**
       * @description Push the object onto the end of the array. Works just like `push()` but it is KVO-compliant.
       */
      pushObject(obj: any): void;
      /**
       * @description Add the objects in the passed numerable to the end of the array. Defers notifying observers of the change until all objects are added.
       */
      pushObjects(objects: Enumerable): Ember.Array;
      /**
       * @description Pop object from array or nil if none are left. Works just like `pop()` but it is KVO-compliant.
       */
      popObject(): void;
      /**
       * @description Shift an object from start of array or nil if none are left. Works just like `shift()` but it is KVO-compliant.
       */
      shiftObject(): void;
      /**
       * @description Unshift an object to start of array. Works just like `unshift()` but it is KVO-compliant.
       */
      unshiftObject(obj: any): void;
      /**
       * @description Adds the named objects to the beginning of the array. Defers notifying observers until all objects have been added.
       */
      unshiftObjects(objects: Enumerable): Ember.Array;
      /**
       * @description Reverse objects in the array. Works just like `reverse()` but it is KVO-compliant.
       */
      reverseObjects(): Ember.Array;
      /**
       * @description Replace all the receiver's content with content of the argument. If argument is an empty array receiver will be cleared.
       */
      setObjects(objects: Ember.Array): Ember.Array;
      /**
       * @description Remove all occurrences of an object in the array.
       */
      removeObject(obj: any): Ember.Array;
      /**
       * @description Push the object onto the end of the array if it is not already present in the array.
       */
      addObject(obj: any): Ember.Array;
      /**
       * @description __Required.__ You must implement this method to apply this mixin.
       */
      length: number;
      /**
       * @description Returns the object at the given `index`. If the given `index` is negative or is greater or equal than the array length, returns `undefined`.
       */
      objectAt(idx: number): any;
      /**
       * @description This returns the objects at the specified indexes, using `objectAt`.
       */
      objectsAt(indexes: Ember.Array): Ember.Array;
      /**
       * @description This is the handler for the special array content property. If you get this property, it will return this. If you set this property to a new array, it will replace the current content.
       */
      '[]': any;
      /**
       * @description Returns a new array that is a slice of the receiver. This implementation uses the observable array methods to retrieve the objects for the new slice.
       */
      slice(beginIndex: number, endIndex: number): Ember.Array;
      /**
       * @description Returns the index of the given object's first occurrence. If no `startAt` argument is given, the starting location to search is 0. If it's negative, will count backward from the end of the array. Returns -1 if no match is found.
       */
      indexOf(object: {}, startAt: number): number;
      /**
       * @description Returns the index of the given object's last occurrence. If no `startAt` argument is given, the search starts from the last position. If it's negative, will count backward from the end of the array. Returns -1 if no match is found.
       */
      lastIndexOf(object: {}, startAt: number): number;
      /**
       * @description Adds an array observer to the receiving array. The array observer object normally must implement two methods:
       */
      addArrayObserver(target: {}, opts: {}): Ember.Array;
      /**
       * @description Removes an array observer from the object if the observer is current registered. Calling this method multiple times with the same object will have no effect.
       */
      removeArrayObserver(target: {}, opts: {}): Ember.Array;
      /**
       * @description Becomes true whenever the array currently has observers watching changes on the array.
       */
      hasArrayObservers: boolean;
      /**
       * @description If you are implementing an object that supports `Ember.Array`, call this method just before the array content changes to notify any observers and invalidate any related properties. Pass the starting index of the change as well as a delta of the amounts to change.
       */
      arrayContentWillChange(startIdx: number, removeAmt: number, addAmt: number): Ember.Array;
      /**
       * @description If you are implementing an object that supports `Ember.Array`, call this method just after the array content changes to notify any observers and invalidate any related properties. Pass the starting index of the change as well as a delta of the amounts to change.
       */
      arrayContentDidChange(startIdx: number, removeAmt: number, addAmt: number): Ember.Array;
      /**
       * @description Returns a special object that can be used to observe individual properties on the array. Just get an equivalent property on this object and it will return an enumerable that maps automatically to the named key on the member objects.
       */
      '@each': any;
      /**
       * @description Helper method returns the first object from a collection. This is usually used by bindings and other parts of the framework to extract a single object if the enumerable contains only one item.
       */
      firstObject: any;
      /**
       * @description Helper method returns the last object from a collection. If your enumerable contains only one object, this method should always return that object. If your enumerable is empty, this method should return `undefined`.
       */
      lastObject: any;
      /**
       * @description Returns `true` if the passed object can be found in the receiver. The default version will iterate through the enumerable until the object is found. You may want to override this with a more efficient version.
       */
      contains(obj: {}): boolean;
      /**
       * @description Iterates through the enumerable, calling the passed function on each item. This method corresponds to the `forEach()` method defined in JavaScript 1.6.
       */
      forEach(callback: Function, target: {}): {};
      /**
       * @description Alias for `mapBy`
       */
      getEach(key: string): Ember.Array;
      /**
       * @description Sets the value on the named property for each member. This is more efficient than using other methods defined on this helper. If the object implements Ember.Observable, the value will be changed to `set(),` otherwise it will be set directly. `null` objects are skipped.
       */
      setEach(key: string, value: {}): {};
      /**
       * @description Maps all of the items in the enumeration to another value, returning a new array. This method corresponds to `map()` defined in JavaScript 1.6.
       */
      map(callback: Function, target: {}): Ember.Array;
      /**
       * @description Similar to map, this specialized function returns the value of the named property on all items in the enumeration.
       */
      mapBy(key: string): Ember.Array;
      /**
       * @description Returns an array with all of the items in the enumeration that the passed function returns true for. This method corresponds to `filter()` defined in JavaScript 1.6.
       */
      filter(callback: Function, target: {}): Ember.Array;
      /**
       * @description Returns an array with all of the items in the enumeration where the passed function returns false. This method is the inverse of filter().
       */
      reject(callback: Function, target: {}): Ember.Array;
      /**
       * @description Returns an array with just the items with the matched property. You can pass an optional second argument with the target value. Otherwise this will match any property that evaluates to `true`.
       */
      filterBy(key: string, value: any): Ember.Array;
      /**
       * @description Returns an array with the items that do not have truthy values for key.  You can pass an optional second argument with the target value.  Otherwise this will match any property that evaluates to false.
       */
      rejectBy(key: string, value: string): Ember.Array;
      /**
       * @description Returns the first item in the array for which the callback returns true. This method works similar to the `filter()` method defined in JavaScript 1.6 except that it will stop working on the array once a match is found.
       */
      find(callback: Function, target: {}): {};
      /**
       * @description Returns the first item with a property matching the passed value. You can pass an optional second argument with the target value. Otherwise this will match any property that evaluates to `true`.
       */
      findBy(key: string, value: string): {};
      /**
       * @description Returns `true` if the passed function returns true for every item in the enumeration. This corresponds with the `every()` method in JavaScript 1.6.
       */
      every(callback: Function, target: {}): boolean;
      /**
       * @description Returns `true` if the passed property resolves to the value of the second argument for all items in the enumerable. This method is often simpler/faster than using a callback.
       */
      isEvery(key: string, value: string): boolean;
      /**
       * @description Returns `true` if the passed function returns true for any item in the enumeration. This corresponds with the `some()` method in JavaScript 1.6.
       */
      any(callback: Function, target: {}): boolean;
      /**
       * @description Returns `true` if the passed property resolves to the value of the second argument for any item in the enumerable. This method is often simpler/faster than using a callback.
       */
      isAny(key: string, value: string): boolean;
      /**
       * @description This will combine the values of the enumerator into a single value. It is a useful way to collect a summary value from an enumeration. This corresponds to the `reduce()` method defined in JavaScript 1.8.
       */
      reduce(callback: Function, initialValue: {}, reducerProperty: string): {};
      /**
       * @description Invokes the named method on every object in the receiver that implements it. This method corresponds to the implementation in Prototype 1.6.
       */
      invoke(methodName: string, ...args: any[]): Ember.Array;
      /**
       * @description Simply converts the enumerable into a genuine array. The order is not guaranteed. Corresponds to the method implemented by Prototype.
       */
      toArray(): Ember.Array;
      /**
       * @description Returns a copy of the array with all `null` and `undefined` elements removed.
       */
      compact(): Ember.Array;
      /**
       * @description Returns a new enumerable that excludes the passed value. The default implementation returns an array regardless of the receiver type unless the receiver does not contain the value.
       */
      without(value: {}): Enumerable;
      /**
       * @description Returns a new enumerable that contains only unique values. The default implementation returns an array regardless of the receiver type.
       */
      uniq(): Enumerable;
      /**
       * @description Converts the enumerable into an array and sorts by the keys specified in the argument.
       */
      sortBy(property: string): Ember.Array;
      /**
       * @description Adds each object in the passed enumerable to the receiver.
       */
      addObjects(objects: Enumerable): {};
      /**
       * @description Removes each object in the passed enumerable from the receiver.
       */
      removeObjects(objects: Enumerable): {};
    }
    export class MutableEnumerable implements Enumerable {
      /**
       * @description __Required.__ You must implement this method to apply this mixin.
       */
      addObject(object: {}): {};
      /**
       * @description Adds each object in the passed enumerable to the receiver.
       */
      addObjects(objects: Enumerable): {};
      /**
       * @description __Required.__ You must implement this method to apply this mixin.
       */
      removeObject(object: {}): {};
      /**
       * @description Removes each object in the passed enumerable from the receiver.
       */
      removeObjects(objects: Enumerable): {};
      /**
       * @description Helper method returns the first object from a collection. This is usually used by bindings and other parts of the framework to extract a single object if the enumerable contains only one item.
       */
      firstObject: any;
      /**
       * @description Helper method returns the last object from a collection. If your enumerable contains only one object, this method should always return that object. If your enumerable is empty, this method should return `undefined`.
       */
      lastObject: any;
      /**
       * @description Returns `true` if the passed object can be found in the receiver. The default version will iterate through the enumerable until the object is found. You may want to override this with a more efficient version.
       */
      contains(obj: {}): boolean;
      /**
       * @description Iterates through the enumerable, calling the passed function on each item. This method corresponds to the `forEach()` method defined in JavaScript 1.6.
       */
      forEach(callback: Function, target: {}): {};
      /**
       * @description Alias for `mapBy`
       */
      getEach(key: string): Ember.Array;
      /**
       * @description Sets the value on the named property for each member. This is more efficient than using other methods defined on this helper. If the object implements Ember.Observable, the value will be changed to `set(),` otherwise it will be set directly. `null` objects are skipped.
       */
      setEach(key: string, value: {}): {};
      /**
       * @description Maps all of the items in the enumeration to another value, returning a new array. This method corresponds to `map()` defined in JavaScript 1.6.
       */
      map(callback: Function, target: {}): Ember.Array;
      /**
       * @description Similar to map, this specialized function returns the value of the named property on all items in the enumeration.
       */
      mapBy(key: string): Ember.Array;
      /**
       * @description Returns an array with all of the items in the enumeration that the passed function returns true for. This method corresponds to `filter()` defined in JavaScript 1.6.
       */
      filter(callback: Function, target: {}): Ember.Array;
      /**
       * @description Returns an array with all of the items in the enumeration where the passed function returns false. This method is the inverse of filter().
       */
      reject(callback: Function, target: {}): Ember.Array;
      /**
       * @description Returns an array with just the items with the matched property. You can pass an optional second argument with the target value. Otherwise this will match any property that evaluates to `true`.
       */
      filterBy(key: string, value: any): Ember.Array;
      /**
       * @description Returns an array with the items that do not have truthy values for key.  You can pass an optional second argument with the target value.  Otherwise this will match any property that evaluates to false.
       */
      rejectBy(key: string, value: string): Ember.Array;
      /**
       * @description Returns the first item in the array for which the callback returns true. This method works similar to the `filter()` method defined in JavaScript 1.6 except that it will stop working on the array once a match is found.
       */
      find(callback: Function, target: {}): {};
      /**
       * @description Returns the first item with a property matching the passed value. You can pass an optional second argument with the target value. Otherwise this will match any property that evaluates to `true`.
       */
      findBy(key: string, value: string): {};
      /**
       * @description Returns `true` if the passed function returns true for every item in the enumeration. This corresponds with the `every()` method in JavaScript 1.6.
       */
      every(callback: Function, target: {}): boolean;
      /**
       * @description Returns `true` if the passed property resolves to the value of the second argument for all items in the enumerable. This method is often simpler/faster than using a callback.
       */
      isEvery(key: string, value: string): boolean;
      /**
       * @description Returns `true` if the passed function returns true for any item in the enumeration. This corresponds with the `some()` method in JavaScript 1.6.
       */
      any(callback: Function, target: {}): boolean;
      /**
       * @description Returns `true` if the passed property resolves to the value of the second argument for any item in the enumerable. This method is often simpler/faster than using a callback.
       */
      isAny(key: string, value: string): boolean;
      /**
       * @description This will combine the values of the enumerator into a single value. It is a useful way to collect a summary value from an enumeration. This corresponds to the `reduce()` method defined in JavaScript 1.8.
       */
      reduce(callback: Function, initialValue: {}, reducerProperty: string): {};
      /**
       * @description Invokes the named method on every object in the receiver that implements it. This method corresponds to the implementation in Prototype 1.6.
       */
      invoke(methodName: string, ...args: any[]): Ember.Array;
      /**
       * @description Simply converts the enumerable into a genuine array. The order is not guaranteed. Corresponds to the method implemented by Prototype.
       */
      toArray(): Ember.Array;
      /**
       * @description Returns a copy of the array with all `null` and `undefined` elements removed.
       */
      compact(): Ember.Array;
      /**
       * @description Returns a new enumerable that excludes the passed value. The default implementation returns an array regardless of the receiver type unless the receiver does not contain the value.
       */
      without(value: {}): Enumerable;
      /**
       * @description Returns a new enumerable that contains only unique values. The default implementation returns an array regardless of the receiver type.
       */
      uniq(): Enumerable;
      /**
       * @description Converts the enumerable into an array and sorts by the keys specified in the argument.
       */
      sortBy(property: string): Ember.Array;
    }
    export class Observable {
      /**
       * @description Retrieves the value of a property from the object.
       */
      get(keyName: string): {};
      /**
       * @description To get the values of multiple properties at once, call `getProperties` with a list of strings or an array:
       */
      getProperties(...list: string[]): {};
      /**
       * @description Sets the provided key or path to the value.
       */
      set(keyName: string, value: {}): {};
      /**
       * @description Sets a list of properties at once. These properties are set inside a single `beginPropertyChanges` and `endPropertyChanges` batch, so observers will be buffered.
       */
      setProperties(hash: {}): {};
      /**
       * @description Convenience method to call `propertyWillChange` and `propertyDidChange` in succession.
       */
      notifyPropertyChange(keyName: string): Observable;
      /**
       * @description Adds an observer on a property.
       */
      addObserver(key: string, target: {}, method: string|Function);
      /**
       * @description Remove an observer you have previously registered on this object. Pass the same key, target, and method you passed to `addObserver()` and your target will no longer receive notifications.
       */
      removeObserver(key: string, target: {}, method: string|Function);
      /**
       * @description Retrieves the value of a property, or a default value in the case that the property returns `undefined`.
       */
      getWithDefault(keyName: string, defaultValue: {}): {};
      /**
       * @description Set the value of a property to the current value plus some amount.
       */
      incrementProperty(keyName: string, increment: number): number;
      /**
       * @description Set the value of a property to the current value minus some amount.
       */
      decrementProperty(keyName: string, decrement: number): number;
      /**
       * @description Set the value of a boolean property to the opposite of its current value.
       */
      toggleProperty(keyName: string): boolean;
      /**
       * @description Returns the cached value of a computed property, if it exists. This allows you to inspect the value of a computed property without accidentally invoking it if it is intended to be generated lazily.
       */
      cacheFor(keyName: string): {};
    }
    export class PromiseProxyMixin {
      /**
       * @description If the proxied promise is rejected this will contain the reason provided.
       */
      reason: any;
      /**
       * @description Once the proxied promise has settled this will become `false`.
       */
      isPending: any;
      /**
       * @description Once the proxied promise has settled this will become `true`.
       */
      isSettled: any;
      /**
       * @description Will become `true` if the proxied promise is rejected.
       */
      isRejected: any;
      /**
       * @description Will become `true` if the proxied promise is fulfilled.
       */
      isFulfilled: any;
      /**
       * @description The promise whose fulfillment value is being proxied by this object.
       */
      promise: any;
      /**
       * @description An alias to the proxied promise's `then`.
       */
      then(callback: Function): RSVP.Promise<any>;
      /**
       * @description An alias to the proxied promise's `catch`.
       */
      catch(callback: Function): RSVP.Promise<any>;
      /**
       * @description An alias to the proxied promise's `finally`.
       */
      finally(callback: Function): RSVP.Promise<any>;
    }
    export class TargetActionSupport extends Mixin {
    }
    export class ArrayProxy extends Object implements MutableArray {
      /**
       * @description __Required.__ You must implement this method to apply this mixin.
       */
      replace(idx: number, amt: number, objects: Ember.Array);
      /**
       * @description Remove all elements from the array. This is useful if you want to reuse an existing array without having to recreate it.
       */
      clear(): Ember.Array;
      /**
       * @description This will use the primitive `replace()` method to insert an object at the specified index.
       */
      insertAt(idx: number, object: {}): Ember.Array;
      /**
       * @description Remove an object at the specified index using the `replace()` primitive method. You can pass either a single index, or a start and a length.
       */
      removeAt(start: number, len: number): Ember.Array;
      /**
       * @description Push the object onto the end of the array. Works just like `push()` but it is KVO-compliant.
       */
      pushObject(obj: any): void;
      /**
       * @description Add the objects in the passed numerable to the end of the array. Defers notifying observers of the change until all objects are added.
       */
      pushObjects(objects: Enumerable): Ember.Array;
      /**
       * @description Pop object from array or nil if none are left. Works just like `pop()` but it is KVO-compliant.
       */
      popObject(): void;
      /**
       * @description Shift an object from start of array or nil if none are left. Works just like `shift()` but it is KVO-compliant.
       */
      shiftObject(): void;
      /**
       * @description Unshift an object to start of array. Works just like `unshift()` but it is KVO-compliant.
       */
      unshiftObject(obj: any): void;
      /**
       * @description Adds the named objects to the beginning of the array. Defers notifying observers until all objects have been added.
       */
      unshiftObjects(objects: Enumerable): Ember.Array;
      /**
       * @description Reverse objects in the array. Works just like `reverse()` but it is KVO-compliant.
       */
      reverseObjects(): Ember.Array;
      /**
       * @description Replace all the receiver's content with content of the argument. If argument is an empty array receiver will be cleared.
       */
      setObjects(objects: Ember.Array): Ember.Array;
      /**
       * @description Remove all occurrences of an object in the array.
       */
      removeObject(obj: any): Ember.Array;
      /**
       * @description Push the object onto the end of the array if it is not already present in the array.
       */
      addObject(obj: any): Ember.Array;
      /**
       * @description __Required.__ You must implement this method to apply this mixin.
       */
      length: number;
      /**
       * @description Returns the object at the given `index`. If the given `index` is negative or is greater or equal than the array length, returns `undefined`.
       */
      objectAt(idx: number): any;
      /**
       * @description This returns the objects at the specified indexes, using `objectAt`.
       */
      objectsAt(indexes: Ember.Array): Ember.Array;
      /**
       * @description This is the handler for the special array content property. If you get this property, it will return this. If you set this property to a new array, it will replace the current content.
       */
      '[]': any;
      /**
       * @description Returns a new array that is a slice of the receiver. This implementation uses the observable array methods to retrieve the objects for the new slice.
       */
      slice(beginIndex: number, endIndex: number): Ember.Array;
      /**
       * @description Returns the index of the given object's first occurrence. If no `startAt` argument is given, the starting location to search is 0. If it's negative, will count backward from the end of the array. Returns -1 if no match is found.
       */
      indexOf(object: {}, startAt: number): number;
      /**
       * @description Returns the index of the given object's last occurrence. If no `startAt` argument is given, the search starts from the last position. If it's negative, will count backward from the end of the array. Returns -1 if no match is found.
       */
      lastIndexOf(object: {}, startAt: number): number;
      /**
       * @description Adds an array observer to the receiving array. The array observer object normally must implement two methods:
       */
      addArrayObserver(target: {}, opts: {}): Ember.Array;
      /**
       * @description Removes an array observer from the object if the observer is current registered. Calling this method multiple times with the same object will have no effect.
       */
      removeArrayObserver(target: {}, opts: {}): Ember.Array;
      /**
       * @description Becomes true whenever the array currently has observers watching changes on the array.
       */
      hasArrayObservers: boolean;
      /**
       * @description If you are implementing an object that supports `Ember.Array`, call this method just before the array content changes to notify any observers and invalidate any related properties. Pass the starting index of the change as well as a delta of the amounts to change.
       */
      arrayContentWillChange(startIdx: number, removeAmt: number, addAmt: number): Ember.Array;
      /**
       * @description If you are implementing an object that supports `Ember.Array`, call this method just after the array content changes to notify any observers and invalidate any related properties. Pass the starting index of the change as well as a delta of the amounts to change.
       */
      arrayContentDidChange(startIdx: number, removeAmt: number, addAmt: number): Ember.Array;
      /**
       * @description Returns a special object that can be used to observe individual properties on the array. Just get an equivalent property on this object and it will return an enumerable that maps automatically to the named key on the member objects.
       */
      '@each': any;
      /**
       * @description Helper method returns the first object from a collection. This is usually used by bindings and other parts of the framework to extract a single object if the enumerable contains only one item.
       */
      firstObject: any;
      /**
       * @description Helper method returns the last object from a collection. If your enumerable contains only one object, this method should always return that object. If your enumerable is empty, this method should return `undefined`.
       */
      lastObject: any;
      /**
       * @description Returns `true` if the passed object can be found in the receiver. The default version will iterate through the enumerable until the object is found. You may want to override this with a more efficient version.
       */
      contains(obj: {}): boolean;
      /**
       * @description Iterates through the enumerable, calling the passed function on each item. This method corresponds to the `forEach()` method defined in JavaScript 1.6.
       */
      forEach(callback: Function, target: {}): {};
      /**
       * @description Alias for `mapBy`
       */
      getEach(key: string): Ember.Array;
      /**
       * @description Sets the value on the named property for each member. This is more efficient than using other methods defined on this helper. If the object implements Ember.Observable, the value will be changed to `set(),` otherwise it will be set directly. `null` objects are skipped.
       */
      setEach(key: string, value: {}): {};
      /**
       * @description Maps all of the items in the enumeration to another value, returning a new array. This method corresponds to `map()` defined in JavaScript 1.6.
       */
      map(callback: Function, target: {}): Ember.Array;
      /**
       * @description Similar to map, this specialized function returns the value of the named property on all items in the enumeration.
       */
      mapBy(key: string): Ember.Array;
      /**
       * @description Returns an array with all of the items in the enumeration that the passed function returns true for. This method corresponds to `filter()` defined in JavaScript 1.6.
       */
      filter(callback: Function, target: {}): Ember.Array;
      /**
       * @description Returns an array with all of the items in the enumeration where the passed function returns false. This method is the inverse of filter().
       */
      reject(callback: Function, target: {}): Ember.Array;
      /**
       * @description Returns an array with just the items with the matched property. You can pass an optional second argument with the target value. Otherwise this will match any property that evaluates to `true`.
       */
      filterBy(key: string, value: any): Ember.Array;
      /**
       * @description Returns an array with the items that do not have truthy values for key.  You can pass an optional second argument with the target value.  Otherwise this will match any property that evaluates to false.
       */
      rejectBy(key: string, value: string): Ember.Array;
      /**
       * @description Returns the first item in the array for which the callback returns true. This method works similar to the `filter()` method defined in JavaScript 1.6 except that it will stop working on the array once a match is found.
       */
      find(callback: Function, target: {}): {};
      /**
       * @description Returns the first item with a property matching the passed value. You can pass an optional second argument with the target value. Otherwise this will match any property that evaluates to `true`.
       */
      findBy(key: string, value: string): {};
      /**
       * @description Returns `true` if the passed function returns true for every item in the enumeration. This corresponds with the `every()` method in JavaScript 1.6.
       */
      every(callback: Function, target: {}): boolean;
      /**
       * @description Returns `true` if the passed property resolves to the value of the second argument for all items in the enumerable. This method is often simpler/faster than using a callback.
       */
      isEvery(key: string, value: string): boolean;
      /**
       * @description Returns `true` if the passed function returns true for any item in the enumeration. This corresponds with the `some()` method in JavaScript 1.6.
       */
      any(callback: Function, target: {}): boolean;
      /**
       * @description Returns `true` if the passed property resolves to the value of the second argument for any item in the enumerable. This method is often simpler/faster than using a callback.
       */
      isAny(key: string, value: string): boolean;
      /**
       * @description This will combine the values of the enumerator into a single value. It is a useful way to collect a summary value from an enumeration. This corresponds to the `reduce()` method defined in JavaScript 1.8.
       */
      reduce(callback: Function, initialValue: {}, reducerProperty: string): {};
      /**
       * @description Invokes the named method on every object in the receiver that implements it. This method corresponds to the implementation in Prototype 1.6.
       */
      invoke(methodName: string, ...args: any[]): Ember.Array;
      /**
       * @description Simply converts the enumerable into a genuine array. The order is not guaranteed. Corresponds to the method implemented by Prototype.
       */
      toArray(): Ember.Array;
      /**
       * @description Returns a copy of the array with all `null` and `undefined` elements removed.
       */
      compact(): Ember.Array;
      /**
       * @description Returns a new enumerable that excludes the passed value. The default implementation returns an array regardless of the receiver type unless the receiver does not contain the value.
       */
      without(value: {}): Enumerable;
      /**
       * @description Returns a new enumerable that contains only unique values. The default implementation returns an array regardless of the receiver type.
       */
      uniq(): Enumerable;
      /**
       * @description Converts the enumerable into an array and sorts by the keys specified in the argument.
       */
      sortBy(property: string): Ember.Array;
      /**
       * @description Adds each object in the passed enumerable to the receiver.
       */
      addObjects(objects: Enumerable): {};
      /**
       * @description Removes each object in the passed enumerable from the receiver.
       */
      removeObjects(objects: Enumerable): {};
    }
    export class CoreObject {
      /**
       * @description An overridable method called when objects are instantiated. By default, does nothing unless it is overridden during class definition.
       */
      init();
      /**
       * @description Defines the properties that will be concatenated from the superclass (instead of overridden).
       */
      concatenatedProperties: Ember.Array;
      /**
       * @description Defines the properties that will be merged from the superclass (instead of overridden).
       */
      mergedProperties: Ember.Array;
      /**
       * @description Destroyed object property flag.
       */
      isDestroyed: any;
      /**
       * @description Destruction scheduled flag. The `destroy()` method has been called.
       */
      isDestroying: any;
      /**
       * @description Destroys an object by setting the `isDestroyed` flag and removing its metadata, which effectively destroys observers and bindings.
       */
      destroy(): {};
      /**
       * @description Override to implement teardown.
       */
      willDestroy();
      /**
       * @description Returns a string representation which attempts to provide more information than Javascript's `toString` typically does, in a generic way for all Ember objects.
       */
      toString(): string;
      /**
       * @description Creates a new subclass.
       */
      static extend(mixins: Mixin, args: {});
      /**
       * @description Creates an instance of a class. Accepts either no arguments, or an object containing values to initialize the newly instantiated object with.
       */
      static create(args: any);
      /**
       * @description Augments a constructor's prototype with additional properties and functions:
       */
      reopen();
      /**
       * @description Augments a constructor's own properties and functions:
       */
      reopenClass();
    }
    export class EachProxy {
    }
    export class Namespace extends Object {
    }
    export class NativeArray implements MutableArray, Observable, Copyable {
      /**
       * @description __Required.__ You must implement this method to apply this mixin.
       */
      replace(idx: number, amt: number, objects: Ember.Array);
      /**
       * @description Remove all elements from the array. This is useful if you want to reuse an existing array without having to recreate it.
       */
      clear(): Ember.Array;
      /**
       * @description This will use the primitive `replace()` method to insert an object at the specified index.
       */
      insertAt(idx: number, object: {}): Ember.Array;
      /**
       * @description Remove an object at the specified index using the `replace()` primitive method. You can pass either a single index, or a start and a length.
       */
      removeAt(start: number, len: number): Ember.Array;
      /**
       * @description Push the object onto the end of the array. Works just like `push()` but it is KVO-compliant.
       */
      pushObject(obj: any): void;
      /**
       * @description Add the objects in the passed numerable to the end of the array. Defers notifying observers of the change until all objects are added.
       */
      pushObjects(objects: Enumerable): Ember.Array;
      /**
       * @description Pop object from array or nil if none are left. Works just like `pop()` but it is KVO-compliant.
       */
      popObject(): void;
      /**
       * @description Shift an object from start of array or nil if none are left. Works just like `shift()` but it is KVO-compliant.
       */
      shiftObject(): void;
      /**
       * @description Unshift an object to start of array. Works just like `unshift()` but it is KVO-compliant.
       */
      unshiftObject(obj: any): void;
      /**
       * @description Adds the named objects to the beginning of the array. Defers notifying observers until all objects have been added.
       */
      unshiftObjects(objects: Enumerable): Ember.Array;
      /**
       * @description Reverse objects in the array. Works just like `reverse()` but it is KVO-compliant.
       */
      reverseObjects(): Ember.Array;
      /**
       * @description Replace all the receiver's content with content of the argument. If argument is an empty array receiver will be cleared.
       */
      setObjects(objects: Ember.Array): Ember.Array;
      /**
       * @description Remove all occurrences of an object in the array.
       */
      removeObject(obj: any): Ember.Array;
      /**
       * @description Push the object onto the end of the array if it is not already present in the array.
       */
      addObject(obj: any): Ember.Array;
      /**
       * @description __Required.__ You must implement this method to apply this mixin.
       */
      length: number;
      /**
       * @description Returns the object at the given `index`. If the given `index` is negative or is greater or equal than the array length, returns `undefined`.
       */
      objectAt(idx: number): any;
      /**
       * @description This returns the objects at the specified indexes, using `objectAt`.
       */
      objectsAt(indexes: Ember.Array): Ember.Array;
      /**
       * @description This is the handler for the special array content property. If you get this property, it will return this. If you set this property to a new array, it will replace the current content.
       */
      '[]': any;
      /**
       * @description Returns a new array that is a slice of the receiver. This implementation uses the observable array methods to retrieve the objects for the new slice.
       */
      slice(beginIndex: number, endIndex: number): Ember.Array;
      /**
       * @description Returns the index of the given object's first occurrence. If no `startAt` argument is given, the starting location to search is 0. If it's negative, will count backward from the end of the array. Returns -1 if no match is found.
       */
      indexOf(object: {}, startAt: number): number;
      /**
       * @description Returns the index of the given object's last occurrence. If no `startAt` argument is given, the search starts from the last position. If it's negative, will count backward from the end of the array. Returns -1 if no match is found.
       */
      lastIndexOf(object: {}, startAt: number): number;
      /**
       * @description Adds an array observer to the receiving array. The array observer object normally must implement two methods:
       */
      addArrayObserver(target: {}, opts: {}): Ember.Array;
      /**
       * @description Removes an array observer from the object if the observer is current registered. Calling this method multiple times with the same object will have no effect.
       */
      removeArrayObserver(target: {}, opts: {}): Ember.Array;
      /**
       * @description Becomes true whenever the array currently has observers watching changes on the array.
       */
      hasArrayObservers: boolean;
      /**
       * @description If you are implementing an object that supports `Ember.Array`, call this method just before the array content changes to notify any observers and invalidate any related properties. Pass the starting index of the change as well as a delta of the amounts to change.
       */
      arrayContentWillChange(startIdx: number, removeAmt: number, addAmt: number): Ember.Array;
      /**
       * @description If you are implementing an object that supports `Ember.Array`, call this method just after the array content changes to notify any observers and invalidate any related properties. Pass the starting index of the change as well as a delta of the amounts to change.
       */
      arrayContentDidChange(startIdx: number, removeAmt: number, addAmt: number): Ember.Array;
      /**
       * @description Returns a special object that can be used to observe individual properties on the array. Just get an equivalent property on this object and it will return an enumerable that maps automatically to the named key on the member objects.
       */
      '@each': any;
      /**
       * @description Helper method returns the first object from a collection. This is usually used by bindings and other parts of the framework to extract a single object if the enumerable contains only one item.
       */
      firstObject: any;
      /**
       * @description Helper method returns the last object from a collection. If your enumerable contains only one object, this method should always return that object. If your enumerable is empty, this method should return `undefined`.
       */
      lastObject: any;
      /**
       * @description Returns `true` if the passed object can be found in the receiver. The default version will iterate through the enumerable until the object is found. You may want to override this with a more efficient version.
       */
      contains(obj: {}): boolean;
      /**
       * @description Iterates through the enumerable, calling the passed function on each item. This method corresponds to the `forEach()` method defined in JavaScript 1.6.
       */
      forEach(callback: Function, target: {}): {};
      /**
       * @description Alias for `mapBy`
       */
      getEach(key: string): Ember.Array;
      /**
       * @description Sets the value on the named property for each member. This is more efficient than using other methods defined on this helper. If the object implements Ember.Observable, the value will be changed to `set(),` otherwise it will be set directly. `null` objects are skipped.
       */
      setEach(key: string, value: {}): {};
      /**
       * @description Maps all of the items in the enumeration to another value, returning a new array. This method corresponds to `map()` defined in JavaScript 1.6.
       */
      map(callback: Function, target: {}): Ember.Array;
      /**
       * @description Similar to map, this specialized function returns the value of the named property on all items in the enumeration.
       */
      mapBy(key: string): Ember.Array;
      /**
       * @description Returns an array with all of the items in the enumeration that the passed function returns true for. This method corresponds to `filter()` defined in JavaScript 1.6.
       */
      filter(callback: Function, target: {}): Ember.Array;
      /**
       * @description Returns an array with all of the items in the enumeration where the passed function returns false. This method is the inverse of filter().
       */
      reject(callback: Function, target: {}): Ember.Array;
      /**
       * @description Returns an array with just the items with the matched property. You can pass an optional second argument with the target value. Otherwise this will match any property that evaluates to `true`.
       */
      filterBy(key: string, value: any): Ember.Array;
      /**
       * @description Returns an array with the items that do not have truthy values for key.  You can pass an optional second argument with the target value.  Otherwise this will match any property that evaluates to false.
       */
      rejectBy(key: string, value: string): Ember.Array;
      /**
       * @description Returns the first item in the array for which the callback returns true. This method works similar to the `filter()` method defined in JavaScript 1.6 except that it will stop working on the array once a match is found.
       */
      find(callback: Function, target: {}): {};
      /**
       * @description Returns the first item with a property matching the passed value. You can pass an optional second argument with the target value. Otherwise this will match any property that evaluates to `true`.
       */
      findBy(key: string, value: string): {};
      /**
       * @description Returns `true` if the passed function returns true for every item in the enumeration. This corresponds with the `every()` method in JavaScript 1.6.
       */
      every(callback: Function, target: {}): boolean;
      /**
       * @description Returns `true` if the passed property resolves to the value of the second argument for all items in the enumerable. This method is often simpler/faster than using a callback.
       */
      isEvery(key: string, value: string): boolean;
      /**
       * @description Returns `true` if the passed function returns true for any item in the enumeration. This corresponds with the `some()` method in JavaScript 1.6.
       */
      any(callback: Function, target: {}): boolean;
      /**
       * @description Returns `true` if the passed property resolves to the value of the second argument for any item in the enumerable. This method is often simpler/faster than using a callback.
       */
      isAny(key: string, value: string): boolean;
      /**
       * @description This will combine the values of the enumerator into a single value. It is a useful way to collect a summary value from an enumeration. This corresponds to the `reduce()` method defined in JavaScript 1.8.
       */
      reduce(callback: Function, initialValue: {}, reducerProperty: string): {};
      /**
       * @description Invokes the named method on every object in the receiver that implements it. This method corresponds to the implementation in Prototype 1.6.
       */
      invoke(methodName: string, ...args: any[]): Ember.Array;
      /**
       * @description Simply converts the enumerable into a genuine array. The order is not guaranteed. Corresponds to the method implemented by Prototype.
       */
      toArray(): Ember.Array;
      /**
       * @description Returns a copy of the array with all `null` and `undefined` elements removed.
       */
      compact(): Ember.Array;
      /**
       * @description Returns a new enumerable that excludes the passed value. The default implementation returns an array regardless of the receiver type unless the receiver does not contain the value.
       */
      without(value: {}): Enumerable;
      /**
       * @description Returns a new enumerable that contains only unique values. The default implementation returns an array regardless of the receiver type.
       */
      uniq(): Enumerable;
      /**
       * @description Converts the enumerable into an array and sorts by the keys specified in the argument.
       */
      sortBy(property: string): Ember.Array;
      /**
       * @description Adds each object in the passed enumerable to the receiver.
       */
      addObjects(objects: Enumerable): {};
      /**
       * @description Removes each object in the passed enumerable from the receiver.
       */
      removeObjects(objects: Enumerable): {};
      /**
       * @description Retrieves the value of a property from the object.
       */
      get(keyName: string): {};
      /**
       * @description To get the values of multiple properties at once, call `getProperties` with a list of strings or an array:
       */
      getProperties(...list: string[]): {};
      /**
       * @description Sets the provided key or path to the value.
       */
      set(keyName: string, value: {}): {};
      /**
       * @description Sets a list of properties at once. These properties are set inside a single `beginPropertyChanges` and `endPropertyChanges` batch, so observers will be buffered.
       */
      setProperties(hash: {}): {};
      /**
       * @description Convenience method to call `propertyWillChange` and `propertyDidChange` in succession.
       */
      notifyPropertyChange(keyName: string): Observable;
      /**
       * @description Adds an observer on a property.
       */
      addObserver(key: string, target: {}, method: string|Function);
      /**
       * @description Remove an observer you have previously registered on this object. Pass the same key, target, and method you passed to `addObserver()` and your target will no longer receive notifications.
       */
      removeObserver(key: string, target: {}, method: string|Function);
      /**
       * @description Retrieves the value of a property, or a default value in the case that the property returns `undefined`.
       */
      getWithDefault(keyName: string, defaultValue: {}): {};
      /**
       * @description Set the value of a property to the current value plus some amount.
       */
      incrementProperty(keyName: string, increment: number): number;
      /**
       * @description Set the value of a property to the current value minus some amount.
       */
      decrementProperty(keyName: string, decrement: number): number;
      /**
       * @description Set the value of a boolean property to the opposite of its current value.
       */
      toggleProperty(keyName: string): boolean;
      /**
       * @description Returns the cached value of a computed property, if it exists. This allows you to inspect the value of a computed property without accidentally invoking it if it is intended to be generated lazily.
       */
      cacheFor(keyName: string): {};
    }
    export class Object extends CoreObject implements Observable {
      /**
       * @description Retrieves the value of a property from the object.
       */
      get(keyName: string): {};
      /**
       * @description To get the values of multiple properties at once, call `getProperties` with a list of strings or an array:
       */
      getProperties(...list: string[]): {};
      /**
       * @description Sets the provided key or path to the value.
       */
      set(keyName: string, value: {}): {};
      /**
       * @description Sets a list of properties at once. These properties are set inside a single `beginPropertyChanges` and `endPropertyChanges` batch, so observers will be buffered.
       */
      setProperties(hash: {}): {};
      /**
       * @description Convenience method to call `propertyWillChange` and `propertyDidChange` in succession.
       */
      notifyPropertyChange(keyName: string): Observable;
      /**
       * @description Adds an observer on a property.
       */
      addObserver(key: string, target: {}, method: string|Function);
      /**
       * @description Remove an observer you have previously registered on this object. Pass the same key, target, and method you passed to `addObserver()` and your target will no longer receive notifications.
       */
      removeObserver(key: string, target: {}, method: string|Function);
      /**
       * @description Retrieves the value of a property, or a default value in the case that the property returns `undefined`.
       */
      getWithDefault(keyName: string, defaultValue: {}): {};
      /**
       * @description Set the value of a property to the current value plus some amount.
       */
      incrementProperty(keyName: string, increment: number): number;
      /**
       * @description Set the value of a property to the current value minus some amount.
       */
      decrementProperty(keyName: string, decrement: number): number;
      /**
       * @description Set the value of a boolean property to the opposite of its current value.
       */
      toggleProperty(keyName: string): boolean;
      /**
       * @description Returns the cached value of a computed property, if it exists. This allows you to inspect the value of a computed property without accidentally invoking it if it is intended to be generated lazily.
       */
      cacheFor(keyName: string): {};
    }
    export class ObjectProxy {
    }
    export class Service extends Object {
    }
    export class _Metamorph {
    }
    export class _MetamorphView extends View implements _Metamorph {
    }
    export class Component extends View {
      /**
       * @description Calls a action passed to a component.
       */
      sendAction(action: string, params: any);
      /**
       * @description Returns true when the component was invoked with a block template.
       */
      hasBlock: any;
      /**
       * @description Returns true when the component was invoked with a block parameter supplied.
       */
      hasBlockParams: any;
      /**
       * @description Enables components to take a list of parameters as arguments
       */
      static positionalParams: any;
    }
    export class AriaRoleSupport {
      /**
       * @description The WAI-ARIA role of the control represented by this view. For example, a button may have a role of type 'button', or a pane may have a role of type 'alertdialog'. This property is used by assistive software to help visually challenged users navigate rich web applications.
       */
      ariaRole: string;
    }
    export class ClassNamesSupport {
      /**
       * @description Standard CSS class names to apply to the view's outer element. This property automatically inherits any class names defined by the view's superclasses as well.
       */
      classNames: Ember.Array;
      /**
       * @description A list of properties of the view to apply as class names. If the property is a string value, the value of that string will be applied as a class name.
       */
      classNameBindings: Ember.Array;
    }
    export class EmptyViewSupport {
    }
    export class InstrumentationSupport {
      /**
       * @description Used to identify this view during debugging
       */
      instrumentDisplay: string;
    }
    export class LegacyViewSupport {
    }
    export class TemplateRenderingSupport {
    }
    export class TextSupport extends Mixin implements TargetActionSupport {
    }
    export class ViewTargetActionSupport extends TargetActionSupport {
      /**
       * @description Renders the view again. This will work regardless of whether the view is already in the DOM or not. If the view is in the DOM, the rendering process will be deferred to give bindings a chance to synchronize.
       */
      rerender();
      /**
       * @description Returns the current DOM element for the view.
       */
      element: DOMElement;
      /**
       * @description Returns a jQuery object for this view's element. If you pass in a selector string, this method will return a jQuery object, using the current element as its buffer.
       */
      $(selector: string): JQuery;
      /**
       * @description The HTML `id` of the view's element in the DOM. You can provide this value yourself but it must be unique (just as in HTML):
       */
      elementId: string;
      /**
       * @description Tag name for the view's outer element. The tag name is only used when an element is first created. If you change the `tagName` for an element, you must destroy and recreate the view element.
       */
      tagName: string;
      /**
       * @description Normally, Ember's component model is "write-only". The component takes a bunch of attributes that it got passed in, and uses them to render its template.
       */
      readDOMAttr(name: string): void;
    }
    export class VisibilitySupport {
      /**
       * @description If `false`, the view will appear hidden in DOM.
       */
      isVisible: boolean;
    }
    export class EventDispatcher extends Object {
    }
    export class Checkbox extends Component {
    }
    export class CollectionView extends ContainerView implements EmptyViewSupport {
    }
    export class ContainerView extends View {
    }
    export class CoreView extends Object implements Evented, ActionHandler {
      /**
       * @description Override the default event firing from `Ember.Evented` to also call methods with the given name.
       * @deprecated Use `Ember.View` instead.
       */
      trigger(name: string);
      /**
       * @description Subscribes to a named event with given function.
       * @deprecated Use `Ember.View` instead.
       */
      on(name: string, target: {}, method: Function): void;
      /**
       * @description Subscribes a function to a named event and then cancels the subscription after the first time the event is triggered. It is good to use ``one`` when you only care about the first time an event has taken place.
       * @deprecated Use `Ember.View` instead.
       */
      one(name: string, target: {}, method: Function): void;
      /**
       * @description Cancels subscription for given name, target, and method.
       * @deprecated Use `Ember.View` instead.
       */
      off(name: string, target: {}, method: Function): void;
      /**
       * @description Checks to see if object has any subscriptions for named event.
       * @deprecated Use `Ember.View` instead.
       */
      has(name: string): boolean;
      /**
       * @description The collection of functions, keyed by name, available on this `ActionHandler` as action targets.
       * @deprecated Use `Ember.View` instead.
       */
      actions: {};
      /**
       * @description Triggers a named action on the `ActionHandler`. Any parameters supplied after the `actionName` string will be passed as arguments to the action target function.
       * @deprecated Use `Ember.View` instead.
       */
      send(actionName: string, context: any);
    }
    export class Select extends View {
      /**
       * @description The `multiple` attribute of the select element. Indicates whether multiple options can be selected.
       * @deprecated See http://emberjs.com/deprecations/v1.x/#toc_ember-select
       */
      multiple: boolean;
      /**
       * @description The `disabled` attribute of the select element. Indicates whether the element is disabled from interactions.
       * @deprecated See http://emberjs.com/deprecations/v1.x/#toc_ember-select
       */
      disabled: boolean;
      /**
       * @description The `required` attribute of the select element. Indicates whether a selected option is required for form validation.
       * @deprecated See http://emberjs.com/deprecations/v1.x/#toc_ember-select
       */
      required: boolean;
      /**
       * @description The list of options.
       * @deprecated See http://emberjs.com/deprecations/v1.x/#toc_ember-select
       */
      content: Ember.Array;
      /**
       * @description When `multiple` is `false`, the element of `content` that is currently selected, if any.
       * @deprecated See http://emberjs.com/deprecations/v1.x/#toc_ember-select
       */
      selection: {};
      /**
       * @description In single selection mode (when `multiple` is `false`), value can be used to get the current selection's value or set the selection by its value.
       * @deprecated See http://emberjs.com/deprecations/v1.x/#toc_ember-select
       */
      value: string;
      /**
       * @description If given, a top-most dummy option will be rendered to serve as a user prompt.
       * @deprecated See http://emberjs.com/deprecations/v1.x/#toc_ember-select
       */
      prompt: string;
      /**
       * @description The path of the option labels. See [content](/api/classes/Ember.Select.html#property_content).
       * @deprecated See http://emberjs.com/deprecations/v1.x/#toc_ember-select
       */
      optionLabelPath: string;
      /**
       * @description The path of the option values. See [content](/api/classes/Ember.Select.html#property_content).
       * @deprecated See http://emberjs.com/deprecations/v1.x/#toc_ember-select
       */
      optionValuePath: string;
      /**
       * @description The path of the option group. When this property is used, `content` should be sorted by `optionGroupPath`.
       * @deprecated See http://emberjs.com/deprecations/v1.x/#toc_ember-select
       */
      optionGroupPath: string;
      /**
       * @description The view class for optgroup.
       * @deprecated See http://emberjs.com/deprecations/v1.x/#toc_ember-select
       */
      groupView: View;
    }
    export class TextArea extends Component implements TextSupport {
    }
    export class TextField extends Component implements TextSupport {
      /**
       * @description The `value` attribute of the input element. As the user inputs text, this property is updated live.
       */
      value: string;
      /**
       * @description The `type` attribute of the input element.
       */
      type: string;
      /**
       * @description The `size` of the text field in characters.
       */
      size: string;
      /**
       * @description The `pattern` attribute of input element.
       */
      pattern: string;
      /**
       * @description The `min` attribute of input element used with `type="number"` or `type="range"`.
       */
      min: string;
      /**
       * @description The `max` attribute of input element used with `type="number"` or `type="range"`.
       */
      max: string;
    }
    export class View extends CoreView implements TemplateRenderingSupport, ClassNamesSupport, LegacyViewSupport, InstrumentationSupport, VisibilitySupport, AriaRoleSupport {
      /**
       * @description Standard CSS class names to apply to the view's outer element. This property automatically inherits any class names defined by the view's superclasses as well.
       * @deprecated See http://emberjs.com/deprecations/v1.x/#toc_ember-view
       */
      classNames: Ember.Array;
      /**
       * @description A list of properties of the view to apply as class names. If the property is a string value, the value of that string will be applied as a class name.
       * @deprecated See http://emberjs.com/deprecations/v1.x/#toc_ember-view
       */
      classNameBindings: Ember.Array;
      /**
       * @description Used to identify this view during debugging
       * @deprecated See http://emberjs.com/deprecations/v1.x/#toc_ember-view
       */
      instrumentDisplay: string;
      /**
       * @description If `false`, the view will appear hidden in DOM.
       * @deprecated See http://emberjs.com/deprecations/v1.x/#toc_ember-view
       */
      isVisible: boolean;
      /**
       * @description The WAI-ARIA role of the control represented by this view. For example, a button may have a role of type 'button', or a pane may have a role of type 'alertdialog'. This property is used by assistive software to help visually challenged users navigate rich web applications.
       * @deprecated See http://emberjs.com/deprecations/v1.x/#toc_ember-view
       */
      ariaRole: string;
    }
  }
  export class Backburner {
  }
  export class Libraries {
  }
  export class Descriptor {
  }
  export class RoutingService {
  }
  export interface Function {
    /**
     * @description The `property` extension of Javascript's Function prototype is available when `Ember.EXTEND_PROTOTYPES` or `Ember.EXTEND_PROTOTYPES.Function` is `true`, which is the default.
     */
    property();
    /**
     * @description The `observes` extension of Javascript's Function prototype is available when `Ember.EXTEND_PROTOTYPES` or `Ember.EXTEND_PROTOTYPES.Function` is true, which is the default.
     */
    observes();
    /**
     * @description The `on` extension of Javascript's Function prototype is available when `Ember.EXTEND_PROTOTYPES` or `Ember.EXTEND_PROTOTYPES.Function` is true, which is the default.
     */
    on();
  }
  export interface String {
  }
  export class ContainerProxyMixin {
    /**
     * @description Returns an object that can be used to provide an owner to a manually created instance.
     */
    ownerInjection(): {};
    /**
     * @description Given a fullName return a corresponding instance.
     */
    lookup(fullName: string, options: {}): any;
  }
  export class RegistryProxyMixin {
    /**
     * @description Given a fullName return the corresponding factory.
     */
    resolveRegistration(fullName: string): Function;
    /**
     * @description Registers a factory that can be used for dependency injection (with `inject`) or for service lookup. Each factory is registered with a full name including two parts: `type:name`.
     */
    register(fullName: string, factory: Function, options: {});
    /**
     * @description Unregister a factory.
     */
    unregister(fullName: string);
    /**
     * @description Check if a factory is registered.
     */
    hasRegistration(fullName: string): boolean;
    /**
     * @description Register an option for a particular factory.
     */
    registerOption(fullName: string, optionName: string, options: {});
    /**
     * @description Return a specific registered option for a particular factory.
     */
    registeredOption(fullName: string, optionName: string): {};
    /**
     * @description Register options for a particular factory.
     */
    registerOptions(fullName: string, options: {});
    /**
     * @description Return registered options for a particular factory.
     */
    registeredOptions(fullName: string): {};
    /**
     * @description Allow registering options for all factories of a type.
     */
    registerOptionsForType(type: string, options: {});
    /**
     * @description Return the registered options for all factories of a type.
     */
    registeredOptionsForType(type: string): {};
    /**
     * @description Define a dependency injection onto a specific factory or all factories of a type.
     */
    inject(factoryNameOrType: string, property: string, injectionName: string);
  }
  export default Ember
}
