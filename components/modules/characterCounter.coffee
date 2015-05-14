# *************************************
#
#   Character Counter
#   -> Form input character counter
#
# *************************************
#
# @param $element        { jQuery object }
# @param $label          { jQuery object }
# @param $number         { jQuery object }
# @param errorClass      { string }
# @param successClass    { string }
# @param minChars        { integer }
# @param maxChars        { integer }
# @param onMinPreceeded  { function }
# @param onMaxExceeded   { function }
# @param onConditionsMet { function }
#
# *************************************

@Spellbook.Modules.CharacterCounter = do ->

  # -------------------------------------
  #   Private Variables
  # -------------------------------------

  _settings = {}
  _count    = 0

  # -------------------------------------
  #   Initialize
  # -------------------------------------

  init = ( options ) ->
    _settings = $.extend
      $element        : $( '.js-characterCounter' )
      $label          : $( '.js-characterCounter-label' )
      $number         : $( '.js-characterCounter-number' )
      errorClass      : 'is-error'
      successClass    : 'is-success'
      minChars        : 0
      maxChars        : 140
      onMinPreceeded  : null
      onMaxExceeded   : null
      onConditionsMet : null
    , options

    _setEventHandlers()

  # -------------------------------------
  #   Set Event Handlers
  # -------------------------------------

  _setEventHandlers = ->

    # ----- Element: Keyup ----- #

    _settings.$element.on 'keyup', ( event ) ->
      event.preventDefault()

      $element = $(@)
      _count   = $element.val().length

      _settings.$number.text( _count )

      if _count > _settings.maxChars

        _toggleState( $element, 'error' )

        _settings.onMaxExceeded( _settings ) if _settings.onMaxExceeded?

      else if _count < _settings.minChars

        _toggleState( $element, 'error' )

        _settings.onMinPreceeded( _settings ) if _settings.onMinPreceeded?

      else

        _toggleState( $element, 'success' )

        _settings.onConditionsMet( _settings ) if _settings.onConditionsMet?

  # -------------------------------------
  #   Toggle State
  # -------------------------------------
  #
  # @param element { jQuery object }
  # @param state   { string }
  #
  # -------------------------------------

  _toggleState = ( element, state ) ->
    switch state
      when 'error'
        element.removeClass( _settings.successClass )
        _settings.$label.removeClass( _settings.successClass )
        element.addClass( _settings.errorClass )
        _settings.$label.addClass( _settings.errorClass )
      when 'success'
        element.removeClass( _settings.errorClass )
        _settings.$label.removeClass( _settings.errorClass )
        element.addClass( _settings.successClass )
        _settings.$label.addClass( _settings.successClass )

  # -------------------------------------
  #   Public Methods
  # -------------------------------------

  init : init

# -------------------------------------
#   Usage
# -------------------------------------
#
# Spellbook.Modules.CharacterCounter.init()
#
