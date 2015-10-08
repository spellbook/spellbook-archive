# *************************************
#
#   Save Progress
#   -> Save input text in Local Storage
#
# *************************************
#
# @param $element      { jQuery object }
# @param $container    { jQuery object }
# @param dataAttribute { string }
#
# *************************************

class @Spellbook.Classes.SaveProgress

  # -------------------------------------
  #   Private Variables
  # -------------------------------------

  _settings : {}

  # -------------------------------------
  #   Constructor
  # -------------------------------------

  constructor : ( options ) -> @init( options )

  # -------------------------------------
  #   Initialize
  # -------------------------------------

  init: ( options ) ->
    @_settings = $.extend
      $element      : $( '.js-saveProgress' )
      $container    : $( '.js-saveProgress-container' )
      dataAttribute : 'saveprogress'
    , options

    @_restoreProgress()
    @_setEventHandlers()

  # -------------------------------------
  #   Erase Progress
  # -------------------------------------
  #
  # @param container { jQuery object }
  #
  # -------------------------------------

  _eraseProgress: ( container ) ->
    container.find( @_settings.$element ).each ( index, elementNode ) =>
      key = $( elementNode ).data( @_settings.dataAttribute )

      localStorage.removeItem( key )

  # -------------------------------------
  #   Restore Progress
  # -------------------------------------

  _restoreProgress: ->
    @_settings.$element.each ( index, elementNode ) =>
      $element = $( elementNode )
      key      = $element.data( @_settings.dataAttribute )
      value    = localStorage.getItem( key )

      $element.val( value ) unless value is null

  # -------------------------------------
  #   Set Event Handlers
  # -------------------------------------

  _setEventHandlers: ->
    @_settings.$element.on 'input', ( event ) =>
      $element = $( event.currentTarget )
      key      = $element.data( @_settings.dataAttribute )
      value    = $element.val()

      @_storeProgress( key, value )

    @_settings.$container.on 'submit', ( event ) =>
      @_eraseProgress( $( event.currentTarget ) )

  # -------------------------------------
  #   Store Progress
  # -------------------------------------

  _storeProgress: ( key, value ) ->
    localStorage.setItem( key, value )

# -------------------------------------
#   Usage
# -------------------------------------
#
# new Spellbook.Classes.SaveProgress()
#
