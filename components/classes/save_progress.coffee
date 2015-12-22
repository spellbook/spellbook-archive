# *************************************
#
#   Save Progress
#   -> Save input text in Local Storage
#
# *************************************
#
# @param $container { jQuery object }
# @param $element   { jQuery object }
# @param dataAttr   { string }
#
# *************************************

class @Spellbook.Classes.SaveProgress extends Spellbook.Classes.Base

  # -------------------------------------
  #   Defaults
  # -------------------------------------

  @_defaults   :
    $container : $( '.js-saveProgress-container' )
    $element   : $( '.js-saveProgress' )
    dataAttr   : 'saveprogress'

  # -------------------------------------
  #   Constructor
  # -------------------------------------

  constructor : ( options ) ->
    super( options )

    @_restoreProgress()
    @_setEventHandlers()

  # -------------------------------------
  #   Erase Progress
  # -------------------------------------
  #
  # @param container { jQuery object }
  #
  # -------------------------------------

  _eraseProgress : ( container ) ->
    container.find( @_settings.$element ).each ( index, elementNode ) =>
      key = $( elementNode ).data( @_settings.dataAttr )

      localStorage.removeItem( key )

  # -------------------------------------
  #   Restore Progress
  # -------------------------------------

  _restoreProgress : ->
    @_settings.$element.each ( index, elementNode ) =>
      $element = $( elementNode )
      key      = $element.data( @_settings.dataAttr )
      value    = localStorage.getItem( key )

      $element.val( value ) unless value is null

  # -------------------------------------
  #   Set Event Handlers
  # -------------------------------------

  _setEventHandlers : ->
    @_settings.$element.on 'input', ( event ) =>
      $element = $( event.currentTarget )
      key      = $element.data( @_settings.dataAttr )
      value    = $element.val()

      @_storeProgress( key, value )

    @_settings.$container.on 'submit', ( event ) =>
      @_eraseProgress( $( event.currentTarget ) )

  # -------------------------------------
  #   Store Progress
  # -------------------------------------

  _storeProgress : ( key, value ) ->
    localStorage.setItem( key, value )

# -------------------------------------
#   Usage
# -------------------------------------
#
# new Spellbook.Classes.SaveProgress()
#
