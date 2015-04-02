# *************************************
#
#   State URLs
#   -> Toggle URL/page sections via history.pushState (with fallback)
#
# *************************************
#
# @param $element      { jQuery object }
# @param $link         { jQuery object }
# @param hiddenClass   { string }
# @param activeClass   { string }
# @param dataAttribute { string }
#
# *************************************

@Spellbook.Modules.StateUrls = do ->

  # -------------------------------------
  #   Private Variables
  # -------------------------------------

  _settings = {}

  # -------------------------------------
  #   Initialize
  # -------------------------------------

  init = ( options ) ->
    _settings = $.extend
      $element      : $( '.js-stateUrls' )
      $link         : $( '.js-stateUrls-link' )
      hiddenClass   : 'is-hidden'
      activeClass   : 'is-active'
      dataAttribute : 'state'
    , options

    _setInitialState( _getCurrentState() )
    _setEventHandlers()

  # -------------------------------------
  #   Santize Hash
  # -------------------------------------
  #
  # @param string { string }
  #
  # -------------------------------------

  _sanitizeHash = ( string ) ->
    string.replace( /(<([^>]+)>)/ig, '' )

  # -------------------------------------
  #   Get Current State
  # -------------------------------------
  #
  # @return string
  #
  # -------------------------------------

  _getCurrentState = ->
    if window.location.hash
      state = _sanitizeHash( window.location.hash )
    else
      state = _settings.$link.first().attr( 'href' )

    return state

  # -------------------------------------
  #   Set Current State
  # -------------------------------------
  #
  # @param state { string }
  #
  # -------------------------------------

  _setInitialState = ( state ) ->
    _settings.$element
      .not( state )
      .addClass( _settings.hiddenClass )

    $( "[data-#{ _settings.dataAttribute }=#{ state }]" )
      .removeClass( _settings.hiddenClass )
      .addClass( _settings.activeClass )

  # -------------------------------------
  #   Set Event Handlers
  # -------------------------------------

  _setEventHandlers = ->
    _settings.$link.on 'click', ( event ) ->
      event.preventDefault()

      $element = $(@)
      state    = $element.attr( 'href' )

      if history.pushState
        history.pushState( null, null, state )
      else
        window.location.hash = state

      _showSection( $element, state ) if $( state ).length > 0

  # -------------------------------------
  #   Show Section
  # -------------------------------------
  #
  # @param $element { jQuery object }
  # @param state    { string }
  #
  # -------------------------------------

  _showSection = ( $element, state ) ->
    _settings.$link.removeClass( _settings.activeClass )
    _settings.$element.addClass( _settings.hiddenClass )
    $element.addClass( _settings.activeClass )
    $( state ).removeClass( _settings.hiddenClass )

  # -------------------------------------
  #   Public Methods
  # -------------------------------------

  init : init

# -------------------------------------
#   Usage
# -------------------------------------
#
# Spellbook.Modules.StateUrls.init()
#
