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
# @param charsMax        { integer }
# @param charsMin        { integer }
# @param classError      { string }
# @param classSuccess    { string }
# @param onConditionsMet { function }
# @param onMaxExceeded   { function }
# @param onMinPreceeded  { function }
#
# *************************************

class @Spellbook.Classes.CharacterCounter extends Spellbook.Classes.Base

  # -------------------------------------
  #   Defaults
  # -------------------------------------

  @_defaults        :
    $element        : $( '.js-characterCounter' )
    $label          : $( '.js-characterCounter-label' )
    $number         : $( '.js-characterCounter-number' )
    charsMax        : 140
    charsMin        : 0
    classError      : 'is-error'
    classSuccess    : 'is-success'
    onConditionsMet : null
    onMaxExceeded   : null
    onMinPreceeded  : null

  # -------------------------------------
  #   Constructor
  # -------------------------------------

  constructor : ( options ) ->
    super( options )

    @_count = 0

    @_setEventHandlers()

  # -------------------------------------
  #   Set Event Handlers
  # -------------------------------------

  _setEventHandlers : ->

    # ----- Element: Keyup ----- #

    @_settings.$element.on 'keyup', ( event ) =>
      event.preventDefault()

      $element = $( event.currentTarget )
      @_count  = $element.val().length

      @_settings.$number.text( @_count )

      if @_count > @_settings.charsMax

        @_toggleState( $element, 'error' )

        @_settings.onMaxExceeded?( @_settings )

      else if @_count < @_settings.charsMin

        @_toggleState( $element, 'error' )

        @_settings.onMinPreceeded?( @_settings )

      else

        @_toggleState( $element, 'success' )

        @_settings.onConditionsMet?( @_settings )

  # -------------------------------------
  #   Toggle State
  # -------------------------------------
  #
  # @param element { jQuery object }
  # @param state   { string }
  #
  # -------------------------------------

  _toggleState : ( element, state ) ->
    switch state
      when 'error'
        element.removeClass( @_settings.classSuccess )
        @_settings.$label.removeClass( @_settings.classSuccess )
        element.addClass( @_settings.classError )
        @_settings.$label.addClass( @_settings.classError )
      when 'success'
        element.removeClass( @_settings.classError )
        @_settings.$label.removeClass( @_settings.classError )
        element.addClass( @_settings.classSuccess )
        @_settings.$label.addClass( @_settings.classSuccess )

# -------------------------------------
#   Usage
# -------------------------------------
#
# new Spellbook.Classes.CharacterCounter()
#
