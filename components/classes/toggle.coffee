# *************************************
#
#   Toggle
#   -> Toggle state on given elements
#
# *************************************
#
# @param $element     { jQuery object }
# @param proximity    { string }
# @param event        { string }
# @param toggleClass  { string }
# @param activeClass  { string }
# @param initialState { function }
# @param onClick      { function }
# @param onMouseover  { function }
# @param onMouseout   { function }
#
# *************************************

class @Spellbook.Classes.Toggle

  # -------------------------------------
  #   Private Variables
  # -------------------------------------

  _settings : {}

  # -------------------------------------
  #   Constructor
  # -------------------------------------

  constructor : ( options ) -> @init( options )

  # -------------------------------------
  #   Initialize
  # -------------------------------------

  init: ( options ) ->
    @_settings = $.extend
      $element     : $( '.js-toggle' )
      proximity    : 'next' # prev, parent, nextParent, prevParent, $( '.element' ), '> span'
      event        : 'click' # hover
      toggleClass  : 'is-hidden'
      activeClass  : 'is-active'
      initialState : null
      onClick      : null
      onMouseover  : null
      onMouseout   : null
    , options

    @_setEventHandlers()

  # -------------------------------------
  #   Set Event Handlers
  # -------------------------------------

  _setEventHandlers: ->
    switch @_settings.event
      when 'click' then @_handleClickEvent()
      when 'hover' then @_handleHoverEvent()

  # -------------------------------------
  #   Handle Click Event
  # -------------------------------------

  _handleClickEvent: ->
    @_settings.$element.on 'click', ( event ) =>
      event.preventDefault()
      $element = $( event.currentTarget )

      @_settings.onClick?( @_settings )

      @_settings.$element.toggleClass( @_settings.activeClass )

      switch @_settings.proximity
        when 'next'
          $element
            .next()
            .toggleClass( @_settings.toggleClass )
        when 'prev'
          $element
            .prev()
            .toggleClass( @_settings.toggleClass )
        when 'nextParent'
          $element
            .parent()
            .next()
            .toggleClass( @_settings.toggleClass )
        when 'prevParent'
          $element
            .parent()
            .prev()
            .toggleClass( @_settings.toggleClass )
        else
          if typeof @_settings.proximity is 'object'
            @_settings.proximity
              .toggleClass( @_settings.toggleClass )
          else
            $element
              .find( @_settings.proximity )
              .toggleClass( @_settings.toggleClass )

  # -------------------------------------
  #   Handle Hover Event
  # -------------------------------------

  _handleHoverEvent: ->
    @_settings.initialState( @_settings ) if @_settings.initialState

    @_settings.$element.on
      mouseenter: ( event ) => @_handleHoverStateEvent( $( event.currentTarget ), 'on' )
      mouseleave: ( event ) => @_handleHoverStateEvent( $( event.currentTarget ), 'off' )

  # -------------------------------------
  #   Handle Hover State Event
  # -------------------------------------
  #
  # @param $element { object }
  # @param state    { string }
  #
  # -------------------------------------

  _handleHoverStateEvent: ( $element, state ) ->
    switch state
      when 'on'
        @_settings.onMouseover?( @_settings )
        $element.addClass( @_settings.activeClass )
      when 'off'
        @_settings.onMouseout?( @_settings )
        $element.removeClass( @_settings.activeClass )

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
  #   Toggle Class
  # -------------------------------------
  #
  # @param $element      { object }
  # @param classToToggle { string }
  #
  # -------------------------------------

  _toggleClass: ( $element, classToToggle = @_settings.toggleClass ) ->
    if $element.hasClass( classToToggle )
      $element.removeClass( classToToggle )
    else
      $element.addClass( classToToggle )

# -------------------------------------
#   Usage
# -------------------------------------
#
# new Spellbook.Classes.Toggle
#
