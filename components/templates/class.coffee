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

class @Spellbook.Classes.ClassName

  # -------------------------------------
  #   Private Variables
  # -------------------------------------

  _settings : {}

  # -------------------------------------
  #   Constructor
  # -------------------------------------

  constructor : ( @options ) -> @init()

  # -------------------------------------
  #   Initialize
  # -------------------------------------

  init : ->
    @_settings = $.extend
      $element : $( '.js-element' )
    , @options

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
