# *************************************
#
#   Modal
#   -> Triggers a dialog window
#
# *************************************

@Spellbook.modal = do ->

  # -------------------------------------
  #   Private Variables
  # -------------------------------------

  _modal    = null
  _backdrop = null
  _settings = {}

  # -------------------------------------
  #   Initialize
  # -------------------------------------

  init = (options) ->
    _settings = $.extend(
      trigger         : $('.js-modal-trigger')
      close           : $('.js-modal-close')
      dataAttribute   : 'modal'
      backdropClass   : 'modal-backdrop'
      activeClass     : 'is-active'
      inactiveClass   : 'is-inactive'
      activeBodyClass : 'is-modal-active'
    , options)

    _setEventHandlers()
    @

  # -------------------------------------
  #   Trigger
  # -------------------------------------

  trigger = (element, event, removeBackdrop = false, callback = null) ->
    _modal = element

    switch event
      when 'open'
        element.addClass(_settings.activeClass)
        $('body').addClass(_settings.activeBodyClass)
      when 'close'
        element.removeClass(_settings.activeClass)
        $('body').removeClass(_settings.activeBodyClass)
        _cleanupEvents()

    _toggleOverlay(event) unless removeBackdrop

    callback() if callback

    _setActiveEventHandlers()

  # -------------------------------------
  #   Toggle Overlay
  # -------------------------------------

  _toggleOverlay = (event) ->
    switch event
      when 'open'
        $('<div class=' + _settings.backdropClass + '></div>').appendTo( $('body') )
        _backdrop = $(".#{ _settings.backdropClass }")
        setTimeout ->
          _backdrop.addClass(_settings.activeClass)
        , 25
      when 'close'
        _backdrop.removeClass(_settings.activeClass)
        setTimeout ->
          _backdrop.remove()
        , 500

  # -------------------------------------
  #   Set Event Handlers
  # -------------------------------------

  _setEventHandlers = ->
    _settings.trigger.on 'click', (event) ->
      event.preventDefault()
      selector = $(@).data(_settings.dataAttribute)
      _modal = $(selector)

      trigger(_modal, 'open')

  # -------------------------------------
  #   Set Active Event Handlers
  # -------------------------------------

  _setActiveEventHandlers = ->
    _settings.close.on 'click', (event) ->
      event.preventDefault()
      trigger(_modal, 'close')

    _backdrop.on 'click', (event) ->
      trigger(_modal, 'close')

    $(document).on 'keydown', (event) ->
      switch event.which
        when 27 then trigger(_modal, 'close')

  # -------------------------------------
  #   Clean Up Events
  # -------------------------------------

  _cleanupEvents = ->
    _settings.close.off('click')
    $(document).off('keydown')

  # -------------------------------------
  #   Public Methods
  # -------------------------------------

  init: init
  trigger: trigger

# -------------------------------------
#   Usage
# -------------------------------------
#
# Spellbook.modal.init()
#
