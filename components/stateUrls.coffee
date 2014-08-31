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

  settings = {}

  # -------------------------------------
  #   Initialize
  # -------------------------------------

  init = (options) ->
    settings = $.extend(
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
    string.replace(/(<([^>]+)>)/ig, '')

  # -------------------------------------
  #   Get Current State
  # -------------------------------------

  _getCurrentState = ->
    if window.location.hash
      state = _sanitizeHash(window.location.hash)
    else
      state = settings.link.first().attr('href')

    return state

  # -------------------------------------
  #   Set Current State
  # -------------------------------------
  # state - the initial state
  # -------------------------------------

  _setInitialState = (state) ->
    settings.section
      .not(state)
      .addClass(settings.hiddenClass)

    $("[data-state=#{state}]")
      .removeClass(settings.hiddenClass)
      .addClass(settings.activeClass)

  # -------------------------------------
  #   Set Event Handlers
  # -------------------------------------

  _setEventHandlers = ->
    settings.link.on 'click', (event) ->
      event.preventDefault()

      element = $(@)
      state = element.attr('href')

      if history.pushState
        history.pushState(null, null, state)
      else
        window.location.hash = state

      settings.link.removeClass(settings.activeClass)
      settings.section.addClass(settings.hiddenClass)
      element.addClass(settings.activeClass)
      $(state).removeClass(settings.hiddenClass)

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
