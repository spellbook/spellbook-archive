# *************************************
#
#   Show Password
#   -> Allows a user to hide/show password field
#
# *************************************
#
# @param $input        { jQuery object }
# @param $toggle       { jQuery object }
# @param showByDefault { boolean }
#
# *************************************

@Spellbook.ShowPassword = do ->

  # -------------------------------------
  #   Private Variables
  # -------------------------------------

  _settings = {}

  # -------------------------------------
  #   Initialize
  # -------------------------------------

  init = ( options ) ->
    _settings = $.extend
      $input        : $( '.js-showPassword-input' )
      $toggle       : $( '.js-showPassword-toggle' )
      showByDefault : false
    , options

    _setEventHandlers()
    _showPassword() if _settings.showByDefault

  # -------------------------------------
  #   Set Event Handlers
  # -------------------------------------

  _setEventHandlers = ->
    _settings.$toggle.on 'change', ( event ) ->
      show = $(@).prop( 'checked' )

      if show
        _showPassword()
      else
        _settings.$input.attr( 'type', 'password' )

  # -------------------------------------
  #   Show Password
  # -------------------------------------

  _showPassword = ->
    _settings.$input.attr( 'type', 'text' )
    _settings.$toggle.prop( 'checked', true )

  # -------------------------------------
  #   Public Methods
  # -------------------------------------

  init : init

# -------------------------------------
#   Usage
# -------------------------------------
#
# Spellbook.ShowPassword.init()
#
