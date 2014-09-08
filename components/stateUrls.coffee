# *************************************
#
#   State URLs
#   -> Toggle URL/page sections via history.pushState (with fallback)
#
# *************************************

@Spellbook.stateUrls = do ->

  # -------------------------------------
  #   Private Variables
  # -------------------------------------

  _settings = {}

  # -------------------------------------
  #   Initialize
  # -------------------------------------

  init = (options) ->
    _settings = $.extend(
      link: $('.js-stateUrls-link')
      section: $('.js-stateUrls-section')
      hiddenClass: 'is-hidden'
      activeClass: 'is-active'
    , options)

    _setInitialState( _getCurrentState() )
    _setEventHandlers()

  # -------------------------------------
  #   Santize Hash
  # -------------------------------------
  # string - the string to sanitize
  # -------------------------------------

  _sanitizeHash = (string) ->
    string.replace( /(<([^>]+)>)/ig, '' )

  # -------------------------------------
  #   Get Current State
  # -------------------------------------

  _getCurrentState = ->
    if window.location.hash
      state = _sanitizeHash(window.location.hash)
    else
      state = _settings.link.first().attr('href')

    return state

  # -------------------------------------
  #   Set Current State
  # -------------------------------------
  # state - the initial state
  # -------------------------------------

  _setInitialState = (state) ->
    _settings.section
      .not(state)
      .addClass(_settings.hiddenClass)

    $("[data-state=#{ state }]")
      .removeClass(_settings.hiddenClass)
      .addClass(_settings.activeClass)

  # -------------------------------------
  #   Set Event Handlers
  # -------------------------------------

  _setEventHandlers = ->
    _settings.link.on 'click', (event) ->
      event.preventDefault()

      element = $(@)
      state = element.attr('href')

      if history.pushState
        history.pushState(null, null, state)
      else
        window.location.hash = state

      _showSection(element, state) if $(state).length > 0

  # -------------------------------------
  #   Show Section
  # -------------------------------------
  # element - the clicked element (jQuery)
  # state   - the state to show   (string)
  # -------------------------------------

  _showSection = (element, state) ->
    _settings.link.removeClass(_settings.activeClass)
    _settings.section.addClass(_settings.hiddenClass)
    element.addClass(_settings.activeClass)
    $(state).removeClass(_settings.hiddenClass)

  # -------------------------------------
  #   Public Methods
  # -------------------------------------

  init: init

# -------------------------------------
#   Usage
# -------------------------------------
#
# Spellbook.stateUrls.init()
#
