# *************************************
#
#   Toggle
#   -> Toggle state on given elements
#
# *************************************
#
# @param $element       { jQuery object }
# @param classActive    { string }
# @param classToggle    { string }
# @param event          { string }
# @param onClick        { function }
# @param onInitialState { function }
# @param onMouseout     { function }
# @param onMouseover    { function }
# @param proximity      { string }
#
# *************************************

class @Spellbook.Classes.Toggle extends Spellbook.Classes.Base

  # -------------------------------------
  #   Initialize
  # -------------------------------------

  init : ->
    @_setDefaults
      $element       : $( '.js-toggle' )
      classActive    : 'is-active'
      classToggle    : 'is-hidden'
      event          : 'click' # hover
      onClick        : null
      onInitialState : null
      onMouseout     : null
      onMouseover    : null
      proximity      : 'next' # prev, parent, nextParent, prevParent, $( '.element' ), '> span'

    @_setEventHandlers()

  # -------------------------------------
  #   Handle Click Event
  # -------------------------------------

  _handleClickEvent : ->
    @_settings.$element.on 'click', ( event ) =>
      event.preventDefault()
      $element = $( event.currentTarget )

      @_settings.onClick?( @_settings )

      @_settings.$element.toggleClass( @_settings.classActive )

      switch @_settings.proximity
        when 'next'
          $element
            .next()
            .toggleClass( @_settings.classToggle )
        when 'prev'
          $element
            .prev()
            .toggleClass( @_settings.classToggle )
        when 'nextParent'
          $element
            .parent()
            .next()
            .toggleClass( @_settings.classToggle )
        when 'prevParent'
          $element
            .parent()
            .prev()
            .toggleClass( @_settings.classToggle )
        else
          if typeof @_settings.proximity is 'object'
            @_settings.proximity
              .toggleClass( @_settings.classToggle )
          else
            $element
              .find( @_settings.proximity )
              .toggleClass( @_settings.classToggle )

  # -------------------------------------
  #   Handle Hover Event
  # -------------------------------------

  _handleHoverEvent : ->
    @_settings.onInitialState( @_settings ) if @_settings.onInitialState

    @_settings.$element.on
      mouseenter : ( event ) => @_handleHoverStateEvent( $( event.currentTarget ), 'on' )
      mouseleave : ( event ) => @_handleHoverStateEvent( $( event.currentTarget ), 'off' )

  # -------------------------------------
  #   Handle Hover State Event
  # -------------------------------------
  #
  # @param $element { object }
  # @param state    { string }
  #
  # -------------------------------------

  _handleHoverStateEvent : ( $element, state ) ->
    switch state
      when 'on'
        @_settings.onMouseover?( @_settings )
        $element.addClass( @_settings.classActive )
      when 'off'
        @_settings.onMouseout?( @_settings )
        $element.removeClass( @_settings.classActive )

    switch @_settings.proximity
      when 'next'
        @_toggleClass( $element.next() )
      when 'prev'
        @_toggleClass( $element.prev() )
      when 'nextParent'
        @_toggleClass( $element.parent().next() )
      when 'prevParent'
        @_toggleClass( $element.parent().prev() )
      else
        if typeof @_settings.proximity is 'object'
          @_toggleClass( @_settings.proximity )
        else
          @_toggleClass( $element.find( @_settings.proximity) )

  # -------------------------------------
  #   Set Event Handlers
  # -------------------------------------

  _setEventHandlers : ->
    switch @_settings.event
      when 'click' then @_handleClickEvent()
      when 'hover' then @_handleHoverEvent()

  # -------------------------------------
  #   Toggle Class
  # -------------------------------------
  #
  # @param $element      { object }
  # @param classToToggle { string }
  #
  # -------------------------------------

  _toggleClass : ( $element, classToToggle = @_settings.classToggle ) ->
    if $element.hasClass( classToToggle )
      $element.removeClass( classToToggle )
    else
      $element.addClass( classToToggle )

# -------------------------------------
#   Usage
# -------------------------------------
#
# new Spellbook.Classes.Toggle()
#
