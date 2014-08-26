Spellbook
=========

A collection of CoffeeScript structure, components, and classes.

Components
----------

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
  options.element.on 'click', (e) ->
    e.preventDefault()
    $(@).toggleClass(options.className)

# -------------------------------------
#   Usage
# -------------------------------------
#
# Spellbook.componentName({
#   # ...
# })
#
```

And to call your Component, put it in `javascripts/domready.js.coffee` or, if you only make the call on one page, add it to the bottom of that page.:

```coffeescript
Spellbook.componentName({
  element: $('.js-element')
  className: 'is-active'
})
```

Classes
-------

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
    @options.element.on 'click', (e) => @doSomething()

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
# new Spellbook.ClassName({
#   # ...
# })
#
```

And to call your Component, put it in `javascripts/domready.js.coffee` or, if you only make the call on one page, add it to the bottom of that page.:

```coffeescript
new SpellBook.ClassName({
  # ...
})
```

Modules
-------

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

  privateMethod = ->

  publicMethod: privateMethod

# -------------------------------------
#   Usage
# -------------------------------------
#
# new Spellbook.moduleName.init({
#   # ...
# })
#
```

And to call your Component, put it in `javascripts/domready.js.coffee` or, if you only make the call on one page, add it to the bottom of that page.:

```coffeescript
SpellBook.moduleName({
  # ...
})
```
