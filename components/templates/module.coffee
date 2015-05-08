# *************************************
#
#   Module Name
#   -> Description
#
# *************************************
#
# @param $element { jQuery object }
#
# *************************************

@Spellbook.Modules.ModuleName = do ->

  # -------------------------------------
  #   Private Variables
  # -------------------------------------

  _settings = {}

  # -------------------------------------
  #   Initialize
  # -------------------------------------

  init = ( options ) ->
    _settings = $.extend
      $element : $( '.js-element' )
    , options

    _setEventHandlers()

  # -------------------------------------
  #   Set Event Handlers
  # -------------------------------------

  _setEventHandlers = ->
    # ...

  # -------------------------------------
  #   Public Methods
  # -------------------------------------

  init : init

# -------------------------------------
#   Usage
# -------------------------------------
#
# Spellbook.Modules.ModuleName.init()
#
