# *************************************
#
#   Class Name
#   -> Description
#
# *************************************
#
# @param $element  { jQuery object }
#
# *************************************

class @Spellbook.Classes.ClassName extends @Spellbook.Classes.Base

  # -------------------------------------
  #   Defaults
  # -------------------------------------

  @_defaults :
    $element : $( '.js-element' )

  # -------------------------------------
  #   Constructor
  # -------------------------------------

  constructor : ( options ) ->
    super( options )

    @_setEventHandlers()

  # -------------------------------------
  #   Set Event Handlers
  # -------------------------------------

  _setEventHandlers : ->
    # ...

# -------------------------------------
#   Usage
# -------------------------------------
#
# new Spellbook.Classes.ClassName()
#
