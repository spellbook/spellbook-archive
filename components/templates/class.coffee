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
  #   Private Variables
  # -------------------------------------

  # ...

  # -------------------------------------
  #   Initialize
  # -------------------------------------

  init : ->
    @_setDefaults
      $element : $( '.js-element' )

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
