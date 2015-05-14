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

        $element.addClass( _settings.errorClass )
        _settings.$label.addClass( _settings.errorClass )

        _settings.onMaxExceeded( _settings ) if _settings.onMaxExceeded?

      else if _count < _settings.minChars

        $element.addClass( _settings.errorClass )
        _settings.$label.addClass( _settings.errorClass )

        _settings.onMinPreceeded( _settings ) if _settings.onMinPreceeded?

      else

        $element.removeClass( _settings.errorClass )
        _settings.$label.removeClass( _settings.errorClass )

        _settings.onConditionsMet( _settings ) if _settings.onConditionsMet?

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
