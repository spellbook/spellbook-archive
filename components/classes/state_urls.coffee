# *************************************
#
#   State URLs
#   -> Toggle URL/page sections via history.pushState (with fallback)
#
# *************************************
#
# @param $element    { jQuery object }
# @param $link       { jQuery object }
# @param classActive { string }
# @param classHidden { string }
# @param dataAttr    { string }
#
# *************************************

class @Spellbook.Classes.StateUrls extends Spellbook.Classes.Base

  # -------------------------------------
  #   Initialize
  # -------------------------------------

  init : ->
    @_setDefaults
      $element    : $( '.js-stateUrls' )
      $link       : $( '.js-stateUrls-link' )
      classActive : 'is-active'
      classHidden : 'is-hidden'
      dataAttr    : 'state'

    @_setInitialState( @_getCurrentState() )
    @_setEventHandlers()

  # -------------------------------------
  #   Santize Hash
  # -------------------------------------
  #
  # @param string { string }
  #
  # -------------------------------------

  _sanitizeHash : ( string ) ->
    string.replace( /(<([^>]+)>)/ig, '' )

  # -------------------------------------
  #   Get Current State
  # -------------------------------------
  #
  # @return string
  #
  # -------------------------------------

  _getCurrentState : ->
    if window.location.hash
      state = @_sanitizeHash( window.location.hash )
    else
      state = @_settings.$link.first().attr( 'href' )

    return state

  # -------------------------------------
  #   Set Current State
  # -------------------------------------
  #
  # @param state { string }
  #
  # -------------------------------------

  _setInitialState : ( state ) ->
    @_settings.$element
      .not( state )
      .addClass( @_settings.classHidden )

    $( "[data-#{ @_settings.dataAttr }=#{ state }]" )
      .removeClass( @_settings.classHidden )
      .addClass( @_settings.classActive )

  # -------------------------------------
  #   Set Event Handlers
  # -------------------------------------

  _setEventHandlers : ->
    @_settings.$link.on 'click', ( event ) =>
      event.preventDefault()

      $element = $( event.currentTarget )
      state    = $element.attr( 'href' )

      if history.pushState
        history.pushState( null, null, state )
      else
        window.location.hash = state

      @_showSection( $element, state ) if $( state ).length > 0

  # -------------------------------------
  #   Show Section
  # -------------------------------------
  #
  # @param $element { jQuery object }
  # @param state    { string }
  #
  # -------------------------------------

  _showSection : ( $element, state ) ->
    @_settings.$link.removeClass( @_settings.classActive )
    @_settings.$element.addClass( @_settings.classHidden )
    $element.addClass( @_settings.classActive )
    $( state ).removeClass( @_settings.classHidden )

# -------------------------------------
#   Usage
# -------------------------------------
#
# new Spellbook.Classes.StateUrls()
#
