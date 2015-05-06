# *************************************
#
#   Character Counter
#   -> Form input character counter
#
# *************************************
#
# @param $element      { jQuery object }
# @param $label        { jQuery object }
# @param errorClass    { string }
# @param maxChars      { integer }
# @param onMaxExceeded { function }
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
      $element      : $( '.js-characterCounter' )
      $label        : $( '.js-characterCounter-label' )
      errorClass    : 'is-error'
      maxChars      : 140
      onMaxExceeded : null
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
      _count   = $(@).val().length

      _settings.$label.text( _count )

      if _count > _settings.maxChars
        $element.addClass( _settings.errorClass )
        _settings.onMaxExceeded( _settings ) if _settings.onMaxExceeded?
      else
        $element.removeClass( _settings.errorClass )

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
