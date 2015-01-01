# *************************************
#
#   Save Progress
#   -> Save input text in Local Storage
#
# *************************************
#
# options.element       - the element whose value to save
# options.container     - the element containing input elements
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
    _settings = $.extend
      element       : $('.js-saveProgress')
      container     : $('.js-saveProgress-container')
      dataAttribute : 'saveprogress'
    , options

    _restoreProgress()
    _setEventHandlers()

  # -------------------------------------
  #   Erase Progress
  # -------------------------------------

  _eraseProgress = (container) ->
    container.find(_settings.element).each ->
      key = $(@).data(_settings.dataAttribute)

      localStorage.removeItem(key)

  # -------------------------------------
  #   Restore Progress
  # -------------------------------------

  _restoreProgress = ->
    _settings.element.each ->
      element = $(@)
      key     = element.data(_settings.dataAttribute)
      value   = localStorage.getItem(key)

      element.val(value)

  # -------------------------------------
  #   Set Event Handlers
  # -------------------------------------

  _setEventHandlers = ->
    _settings.element.on 'input', ->
      element = $(@)
      key     = element.data(_settings.dataAttribute)
      value   = element.val()

      _storeProgress( key, value )

    _settings.container.on 'submit', (event) ->
      _eraseProgress( $(@) )

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
