# *************************************
#
#   Form Validator
#   -> Validate multiple form input types
#
# *************************************
#
# @param $element       { jQuery object }
# @param $input         { jQuery object }
# @param $submit        { jQuery object }
# @param classError     { string }
# @param classMessage   { string }
# @param dataAttr       { string }
# @param delimiter      { string }
# @param isMessageShown { string }
# @param onError        { function }
# @param onSuccess      { function }
#
# *************************************

class @Spellbook.Classes.FormValidator extends Spellbook.Classes.Base

  # -------------------------------------
  #   Defaults
  # -------------------------------------

  @_defaults       :
    $element       : $( '.js-formValidator' )
    $input         : $( '.js-formValidator-input' )
    $submit        : $( '.js-formValidator-submit' )
    classError     : 'is-invalid'
    classMessage   : 'js-formValidator-message'
    dataAttr       : 'validate'
    delimiter      : '|'
    isMessageShown : true
    onError        : null
    onSuccess      : null

  # -------------------------------------
  #   Constructor
  # -------------------------------------

  constructor : ( options ) ->
    super( options )

    @_input      = null
    @_errors     = []
    @_validators = [ 'required' ]

    @_setEventHandlers()

  # -------------------------------------
  #   Validate
  # -------------------------------------

  validate : ( input ) ->
    parameter = @_parseValidators( input.data( @_settings.dataAttr ) )
    @_element = input

    if Array.isArray( parameter )
      @_matchValidators( key ) for key in parameter
    else
      @_matchValidators( parameter )

  # -------------------------------------
  #   Is Validator
  # -------------------------------------

  _isValidator : ( parameter ) ->
    @_validators.indexOf( parameter ) isnt -1

  # -------------------------------------
  #   Match Validators
  # -------------------------------------

  _matchValidators : ( match ) ->
    switch match
      when 'required'
        if @_validateRequired()
          @_setValidationState( 'error', 'The field is required.' )
        else
          @_setValidationState( 'success' )

  # -------------------------------------
  #   Parse Validators
  # -------------------------------------

  _parseValidators : ( parameter ) ->
    parameters = []
    split      = parameter.split( @_settings.delimiter )

    if split.length > 1
      parameters.push( param ) for param in split
      return parameters
    else
      return parameter

  # -------------------------------------
  #   Remove Error
  # -------------------------------------

  _removeError : ->
    index = @_errors.indexOf( @_input )
    @_errors.splice( index, 1 )

  # -------------------------------------
  #   Remove Input State
  # -------------------------------------

  _removeInputState : ->
    @_input.removeClass( @_settings.classError )
    if @_settings.isMessageShown
      @_input.next( ".#{ @_settings.classMessage }" ).remove()

  # -------------------------------------
  #   Set Error
  # -------------------------------------

  _setError : ( message ) ->
    @_errors.push( { element : @_input.attr( 'name' ), message : message } )

  # -------------------------------------
  #   Set Event Handlers
  # -------------------------------------

  _setEventHandlers : ->

    # ----- Submit ----- #

    @_settings.$element.on 'submit', ( event ) =>
      event.preventDefault() unless @_validateAllFields()

    # ----- Keyup ----- #

    @_settings.$input.on 'keyup', ( event ) =>
      @_input = $( event.currentTarget )

      @validate( @_input )

  # -------------------------------------
  #   Set Input State
  # -------------------------------------

  _setInputState : ( message ) ->
    @_removeInputState()
    @_input.addClass( @_settings.classError )
    if @_settings.isMessageShown
      @_input.after( "<p class='#{ @_settings.classMessage }'>#{ message }</p>" )

  # -------------------------------------
  #   Set Validation State
  # -------------------------------------

  _setValidationState : ( state, message ) ->
    switch state
      when 'error'
        @_setError( message )
        @_setInputState( message )
        @_settings.onError?( @_settings )
      when 'success'
        @_removeError()
        @_removeInputState()
        @_settings.onSuccess?( @_settings )

  # -------------------------------------
  #   Validate All Fields
  # -------------------------------------

  _validateAllFields : ->
    @_settings.$input.each ( index, element ) =>
      @_input = $( element )

      @validate( @_input )

    if @_errors.length is 0
      return true
    else
      return false

  # -------------------------------------
  #   Validate Required
  # -------------------------------------

  _validateRequired : ->
    if @_input.val() is ''
      return true
    else
      return false

# -------------------------------------
#   Usage
# -------------------------------------
#
# new Spellbook.Classes.FormValidator()
#
