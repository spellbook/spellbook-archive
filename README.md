Spellbook
=========

A compilation of CoffeeScript structure, components, and classes.

Compendium
----------

`application.coffee` is the compendium file, which is what you would load in your application. It shows you the order in which you would include the individual setup files, as well as each individual Component. This obviously changes if you're not in a Rails environment with Sprockets.

Namespace
---------

`spellbook.coffee` simply sets up the namespace for the application. Be sure to change this file and namespace to the name of your application.

Components
----------

### Functions

```coffeescript
# javascripts/components/componentName.coffee

# *************************************
#
#   Component Name
#   -> Description
#
# *************************************
#
# options.element - the element (jQuery)
# options.className - the class to toggle
#
# *************************************

@Spellbook.componentName = (options) ->
  options.element.on 'click', (event) ->
    event.preventDefault()
    $(@).toggleClass(options.className)

# -------------------------------------
#   Usage
# -------------------------------------
#
# Spellbook.componentName
#   # ...
#
```

And to call your Component, put it in `javascripts/domready.js.coffee` or, if you only make the call on one page, add it to the bottom of that page.:

```coffeescript
Spellbook.componentName
  element: $('.js-element')
  className: 'is-active'
```

### Classes

```coffeescript
# javascripts/components/className.coffee

# *************************************
#
#   Class Name
#   -> Description
#
# *************************************
#
# options.element - the element (jQuery)
# options.className - the class to toggle
#
# *************************************

class @Spellbook.ClassName

  ###
    Called when the object is instantiated, and it immediately
    defers to an 'init' method, which can be called without having
    to instantiate an object.

    @options sets instance variables for all of the options that are
    passed in.
  ###
  constructor: (@options) -> @init()

  init: ->
    # Initialize things here...

    ### 
      Call 'setEventHandlers' method to set up all of the
      individual event handlers for the elements of the class
    ###
    @setEventHandlers()

  setEventHandlers: ->
    @options.element.on 'click', (event) => @doSomething()

  doSomething: ->
    # ...

  ###
    Class methods start with an '@' sign before the name, and
    they aren't called by the instantiated object but, rather,
    from within the class

    e.g. ClassName.klassMethod()
  ###
  @klassMethod: ->
    # ...

# -------------------------------------
#   Usage
# -------------------------------------
#
# new Spellbook.ClassName
#   # ...
#
```

And to call your Component, put it in `javascripts/domready.js.coffee` or, if you only make the call on one page, add it to the bottom of that page.:

```coffeescript
new SpellBook.ClassName
  # ...
```

### Modules

```coffeescript
# javascripts/components/moduleName.coffee

# *************************************
#
#   Module Name
#   -> Description
#
# *************************************
#
# options.element - the element (jQuery)
# options.className - the class to toggle
#
# *************************************

# CoffeeScript shortcut for a self-invoking anonymous function
@Spellbook.moduleName = do ->

  privateVar = ''

  init = ->

  init: init

# -------------------------------------
#   Usage
# -------------------------------------
#
# Spellbook.moduleName.init
#   # ...
#
```

And to call your Component, put it in `javascripts/domready.js.coffee` or, if you only make the call on one page, add it to the bottom of that page.:

```coffeescript
SpellBook.moduleName.init
  # ...
```

Document Ready
--------------

`domready.coffee` is for all of your JavaScript that is run when the document is ready. You will put your calls to the Components that are used across the application, not just on a single page.

Inbox
-----

This is a good place to put JavaScript that you aren't ready to organize and sort; or, simply as a testing environment.

Defaults
--------

If applicable, each Component sets default options to standardize calls. For example:

```coffeescript
@Spellbook.componentName = (options) ->
  settings = $.extend(
    element: $('.js-component'),
    activeClass: 'is-active'
  , options)
```

Use `js-` selectors to standardize the class applied to elements. Now, in the call, you can either leave out the options (using the defaults), or pass in overrides to the default options.

jQuery
------

There is a jQuery dependency in Spellbook, but you could easily swap out the underlying jQuery with vanilla JavaScript.

Development
-----------

Install Gulp:

```shell
# Install grunt-cli globally
npm install -g grunt-cli

# Install dependencies
npm install
```

### Compiling CoffeeScript

You have two options:

1. Run `gulp coffee` to compile the `components/*.coffee` files.
2. Run `gulp` and have it watch and automatically compile `components/*.coffee` files.

### Writing Tests with Jasmine

- Create the `componentName.spec.coffee` file at `spec/`
- Run the `gulp` command in a separate tab to compile your CoffeeScript
- Follow the _Running Tests_ section below

### Running Tests

**Install Bundler**

```shell
gem install bundler
bundle install --binstubs
```

**Run Jasmine Server**

```shell
bundle exec rake jasmine
```

Now you can go to `http://localhost:1234/` to see the tests.

**Run Tests via Command Line**

```shell
bundle exec rake jasmine:ci
```

