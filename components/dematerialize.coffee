# *************************************
#
#   Dematerialize
#   -> Hides an element and keeps it hidden
#
# *************************************
#
# @param element     { jQuery object }
# @param trigger     { jQuery object | integer }
# @param itemTitle   { string }
# @param hiddenClass { string }
#
# *************************************

class @Spellbook.Dematerialize

  # -------------------------------------
  #   Private Variables
  # -------------------------------------

  @_settings : {}
  @_item     : ''

  # -------------------------------------
  #   Initialize
  # -------------------------------------

  init: ( options ) ->
    @_settings = $.extend
      element     : $( '.js-dematerialize-element' )
      trigger     : $( '.js-dematerialize-trigger' )
      itemTitle   : 'hidden_element'
      hiddenClass : 'is-hidden'
    , options

    @_setEventHandlers()
    @_setInitialState()

  # -------------------------------------
  #   Set Event Handlers
  # -------------------------------------

  _setEventHandlers: ->
    if @_settings.trigger instanceof jQuery
      @_settings.trigger.on 'click', ( event ) =>
        event.preventDefault()
        @_toggleState()
    else
      @_toggleStateViaKey()

  # -------------------------------------
  #   Set Initial State
  # -------------------------------------

  _setInitialState: ->
    @_item = localStorage.getItem( @_settings.itemTitle )

    unless @_item is 'true'
      @_settings.element.removeClass( @_settings.hiddenClass )

  # -------------------------------------
  #   Toggle State
  # -------------------------------------

  _toggleState: ->
    unless @_settings.element.hasClass( @_settings.hiddenClass )
      @_settings.element.addClass( @_settings.hiddenClass )
      @_item = localStorage.setItem( @_settings.itemTitle, 'true' )
    else
      @_settings.element.removeClass( @_settings.hiddenClass )
      @_item = localStorage.removeItem( @_settings.itemTitle )

  # -------------------------------------
  #   Toggle State Via Key
  # -------------------------------------

  _toggleStateViaKey: ->
    $( document ).on 'keyup', ( event ) =>
      tag = event.target.tagName.toLowerCase()

      switch event.which
        when @_settings.trigger
          unless tag is 'input' or tag is 'textarea'
            @_toggleState()

# -------------------------------------
#   Usage
# -------------------------------------
#
# element = new Spellbook.Dematerialize()
# element.init()
#
