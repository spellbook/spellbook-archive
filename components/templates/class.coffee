# *************************************
#
#   Class Name
#   -> Description
#
# *************************************
#
# @param $element  { jQuery object }
# @param className { string }
#
# *************************************

class @Spellbook.Classes.ClassName

  ###
    Called when the object is instantiated, and it immediately
    defers to an 'init' method, which can be called without having
    to instantiate an object.

    @options sets instance variables for all of the options that are
    passed in.
  ###
  constructor: ( @options ) -> @init()

  init: ->
    # Initialize things here...

    ### 
      Call 'setEventHandlers' method to set up all of the
      individual event handlers for the elements of the class
    ###
    @setEventHandlers()

  setEventHandlers: ->
    @options.$element.on 'click', ( event ) => @doSomething()

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
# new Spellbook.Classes.ClassName
#   # ...
#
