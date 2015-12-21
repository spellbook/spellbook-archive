# *************************************
#
#   Dematerialize
#   -> Hide an element and keep it hidden
#
# *************************************
#
# @param $element    { jQuery object }
# @param $trigger    { jQuery object | integer }
# @param classHidden { string }
# @param titleItem   { string }
#
# *************************************

class @Spellbook.Classes.Dematerialize extends Spellbook.Classes.Base

  # -------------------------------------
  #   Private Variables
  # -------------------------------------

  _item : ''

  # -------------------------------------
  #   Initialize
  # -------------------------------------

  init : ->
    @_setDefaults
      $element    : $( '.js-dematerialize' )
      $trigger    : $( '.js-dematerialize-trigger' )
      classHidden : 'is-hidden'
      titleItem   : 'hidden_element'

    @_setEventHandlers()
    @_setInitialState()

  # -------------------------------------
  #   Set Event Handlers
  # -------------------------------------

  _setEventHandlers : ->
    if @_settings.$trigger instanceof jQuery
      @_settings.$trigger.on 'click', ( event ) =>
        event.preventDefault()
        @_toggleState()
    else
      @_toggleStateViaKey()

  # -------------------------------------
  #   Set Initial State
  # -------------------------------------

  _setInitialState : ->
    @_item = localStorage.getItem( @_settings.titleItem )

    unless @_item is 'true'
      @_settings.$element.removeClass( @_settings.classHidden )

  # -------------------------------------
  #   Toggle State
  # -------------------------------------

  _toggleState : ->
    unless @_settings.$element.hasClass( @_settings.classHidden )
      @_settings.$element.addClass( @_settings.classHidden )
      @_item = localStorage.setItem( @_settings.titleItem, 'true' )
    else
      @_settings.$element.removeClass( @_settings.classHidden )
      @_item = localStorage.removeItem( @_settings.titleItem )

  # -------------------------------------
  #   Toggle State Via Key
  # -------------------------------------

  _toggleStateViaKey : ->
    $( document ).on 'keyup', ( event ) =>
      tag = event.target.tagName.toLowerCase()

      switch event.which
        when @_settings.$trigger
          unless tag is 'input' or tag is 'textarea'
            @_toggleState()

# -------------------------------------
#   Usage
# -------------------------------------
#
# element = new Spellbook.Classes.Dematerialize()
#
