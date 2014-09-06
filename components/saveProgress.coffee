# *************************************
#
#   Save Progress
#   -> Save input text in Local Storage
#
# *************************************
#
# options.elements - the element containing text to save
# options.dataAttribute - the data attribute of the Local Storage key
#
# *************************************

@Spellbook.saveProgress = do ->

  # -------------------------------------
  #   Private Variables
  # -------------------------------------

  _settings = {}

  # -------------------------------------
  #   Initialize
  # -------------------------------------

  init = (options) ->
    _settings = $.extend(
      elements: $('.js-saveProgress')
      dataAttribute: 'saveprogress'
    , options)

    _restoreProgress()
    _setEventHandlers()

  # -------------------------------------
  #   Restore Progress
  # -------------------------------------

  _restoreProgress = ->
    _settings.elements.each ->
      element = $(@)
      key = element.data(_settings.dataAttribute)
      value = localStorage.getItem key

      element.val(value)

  # -------------------------------------
  #   Set Event Handlers
  # -------------------------------------

  _setEventHandlers = ->
    _settings.elements.each ->
      element = $(@)

      element.on 'input', ->
        key = element.data(_settings.dataAttribute)
        value = element.val()

        _storeProgress( key, value )

  # -------------------------------------
  #   Store Progress
  # -------------------------------------

  _storeProgress = ( key, value ) ->
    localStorage.setItem( key, value )

  # -------------------------------------
  #   Public Methods
  # -------------------------------------

  init: init

# -------------------------------------
#   Usage
# -------------------------------------
#
# Spellbook.saveProgress.init()
#
