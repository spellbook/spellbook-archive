Spellbook
=========

A compilation of CoffeeScript structure, components, and classes.

Compendium
----------

`compendium/application.coffee` is the compendium file, which is what you would load in your application. It shows you the order in which you would include the individual setup files, as well as each individual Component. This obviously changes if you're not in a Rails environment with Sprockets.

Namespaces
----------

`compendium/spellbook.coffee` sets up the namespaces for the application. Be sure to change this file and namespaces to the name of _your_ application.

Globals
-------

If you need any global variables set across the entire namespace, add them to `Spellbook.Globals` in the `compendium/spellbook.coffee` file.

Components
----------

A "component" is either a **Function**, **Class**, or **Module**.

### Function

A Function is either classified as a **Helper** or a **Service**.

#### Helper

A helper is a one-off utility function that performs a single action. Some examples:

- `Spellbook.sanitize()`
- `Spellbook.slugify()`

_You can find a template file in `components/templates/helper.coffee`._

#### Service

A service is a function that can perform multiple actions, but a single service, and it is neither a class or module. For example:

- `Spellbook.autoSubmit()`
- `Spellbook.scrollTo()`

_You can find a template file in `components/templates/service.coffee`._

### Class

A class is, as you'd expect, a CoffeeScript class.

_You can find a template file in `components/templates/class.coffee`._

### Module

A module is written in the Revealing Module Pattern.

_You can find a template file in `components/templates/module.coffee`._

Document Ready
--------------

`compendium/domready.coffee` is for all of your JavaScript that is run when the document is ready. You will put your calls to the Components that are used across the application, not just on a single page.

Inbox
-----

This is a good place to put JavaScript that you aren't ready to organize and sort; or, simply as a testing environment.

**Note**: You can also use the `Spellbook.Inbox` namespace to write in **if you aren't sure where to place it temporarily.**

jQuery
------

There is a jQuery dependency in Spellbook, but you could easily swap out the underlying jQuery with vanilla JavaScript or another similar library.

Defaults
--------

If applicable, each Component sets default options to standardize calls. For example:

```coffeescript
@Spellbook.Namespace.componentName = ( options ) ->
  _settings = $.extend
    $element    : $( '.js-component' ),
    activeClass : 'is-active'
  , options
```

**Note**: Use `js-` selectors to standardize the class applied to elements. Now, in the call, you can either leave out the options (using the defaults), or pass in overrides to the default options.

Development
-----------

Install Gulp:

```
# Install grunt-cli globally
npm install -g grunt-cli

# Install dependencies
npm install
```

### Compiling CoffeeScript

You have two options:

1. Run `gulp coffee` to compile the `components/*.coffee` files.
2. Run `gulp` and have it watch and automatically compile `components/*.coffee` files.

### Running CoffeeLint

```
gulp lint
```

### Writing Tests with Jasmine

- Create the `componentName.spec.coffee` file at `spec/`
- Run the `gulp` command in a separate tab to compile your CoffeeScript
- Follow the _Running Tests_ section below

### Running Tests

**Install Bundler**

```
gem install bundler
bundle install --binstubs
```

**Run Jasmine Server**

```
bundle exec rake jasmine
```

Now you can go to `http://localhost:1234/` to see the tests.

**Run Tests via Command Line**

```
bundle exec rake jasmine:ci
```
