# *************************************
#
#   Auto Duplicate Input
#   -> Duplicate valid inputs as you go
#
# *************************************
#
# @param $element              { jQuery object }
# @param $container            { jQuery object }
# @param dataAttrCloned   { string }
# @param dataAttrValidate { string }
# @param classInvalid          { string }
# @param classValid            { string }
# @param onDuplicate           { function }
# @param onInvalid             { function }
# @param onValid               { function }
#
# *************************************

class @Spellbook.Classes.AutoDuplicateInput extends Spellbook.Classes.Base

  # -------------------------------------
  #   Private Variables
  # -------------------------------------

  _count      : 0
  _field      : null
  _validators :
    email : /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  # -------------------------------------
  #   Initialize
  # -------------------------------------

  init : ->
    @_setDefaults
      $container       : $( '.js-autoDuplicateInput-container' )
      $element         : $( '.js-autoDuplicateInput' )
      classInvalid     : 'is-invalid'
      classValid       : 'is-valid'
      dataAttrCloned   : 'cloned'
      dataAttrValidate : 'validate'
      onDuplicate      : null
      onInvalid        : null
      onValid          : null

    @_setEventHandlers()

  # -------------------------------------
  #   Set Event Handlers
  # -------------------------------------

  _setEventHandlers : ->
    @_settings.$element.on 'keyup', ( event ) =>
      event.preventDefault()

      @_field = $( event.currentTarget )

      if @_isValid()
        @_setInputState( 'valid' )
        @_settings.onValid?( @_settings )

        @_duplicate() unless @_field.data( 'cloned' ) is 'true'
        @_settings.onDuplicate?( @_settings, @_count )
      else
        @_setInputState( 'invalid' )
        @_settings.onInvalid?( @_settings )

  # -------------------------------------
  #   Get Validation Type
  # -------------------------------------

  _getValidationType : ->
    @_field.data( @_settings.dataAttrValidate )

  # -------------------------------------
  #   Is Valid
  # -------------------------------------

  _isValid :  ->
    validator = @_getValidationType( @_field )

    @_validators[ "#{ validator }" ].test( @_field.val() )

  # -------------------------------------
  #   Duplicate
  # -------------------------------------

  _duplicate : ->
    ++ @_count

    @_field
      .data( @_settings.dataAttrCloned, 'true' )
      .clone( true )
      .appendTo( @_settings.$container )
      .removeClass( @_settings.classValid )
      .val( '' )
      .data( @_settings.dataAttrCloned, '' )

  # -------------------------------------
  #   Set Input State
  # -------------------------------------

  _setInputState : ( type ) ->
    switch type
      when 'invalid'
        @_field
          .removeClass( @_settings.classValid )
          .addClass( @_settings.classInvalid )
      when 'valid'
        @_field
          .removeClass( @_settings.classInvalid )
          .addClass( @_settings.classValid )

  # -------------------------------------
  #   Get Count
  # -------------------------------------

  getCount : -> return @_count

# -------------------------------------
#   Usage
# -------------------------------------
#
# new Spellbook.Classes.AutoDuplicateInput()
#
