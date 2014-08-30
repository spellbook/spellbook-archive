# *************************************
#
#   State URLs
#   -> Toggle URL/page sections via history.pushState (with fallback)
#
# *************************************

@Spellbook.stateUrls = do ->

  # -------------------------------------
  #   Instance Variables
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

    setInitialState( getCurrentState() )
    events()

  # -------------------------------------
  #   Santize Hash
  # -------------------------------------
  # string - the string to sanitize
  # -------------------------------------

  sanitizeHash = (string) ->
    string.replace(/(<([^>]+)>)/ig, '')

  # -------------------------------------
  #   Get Current State
  # -------------------------------------

  getCurrentState = ->
    if window.location.hash
      state = sanitizeHash(window.location.hash)
    else
      state = settings.link.first().attr('href')

    return state

  # -------------------------------------
  #   Set Current State
  # -------------------------------------
  # state - the initial state
  # -------------------------------------

  setInitialState = (state) ->
    settings.section
      .not(state)
      .addClass(settings.hiddenClass)

    $("[data-state=#{state}]")
      .removeClass(settings.hiddenClass)
      .addClass(settings.activeClass)

  # -------------------------------------
  #   Event Handlers
  # -------------------------------------

  events = ->
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
