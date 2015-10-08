# *************************************
#
#   Modal
#   -> Trigger a dialog window
#
# *************************************
#
# @param $trigger        { jQuery object }
# @param $close          { jQuery object }
# @param dataAttribute   { string }
# @param backdropClass   { string }
# @param activeClass     { string }
# @param inactiveClass   { string }
# @param activeBodyClass { string }
#
# *************************************

class @Spellbook.Classes.Modal extends Spellbook.Classes.Base

  # -------------------------------------
  #   Private Variables
  # -------------------------------------

  _$modal    : null
  _$backdrop : null

  # -------------------------------------
  #   Initialize
  # -------------------------------------

  init: ->
    @_settings = $.extend
      $trigger        : $( '.js-modal-trigger' )
      $close          : $( '.js-modal-close' )
      dataAttribute   : 'modal'
      backdropClass   : 'modal-backdrop'
      activeClass     : 'is-active'
      inactiveClass   : 'is-inactive'
      activeBodyClass : 'is-modal-active'
    , @options

    @_setEventHandlers()

  # -------------------------------------
  #   Trigger
  # -------------------------------------
  #
  # @param $element       { jQuery object }
  # @param event          { string }
  # @param removeBackdrop { boolean }
  # @param callback       { function }
  #
  # -------------------------------------

  trigger: ( $element, event, removeBackdrop = false, callback = null ) ->
    @_$modal = $element

    switch event

      when 'open'

        $element.addClass( @_settings.activeClass )
        $( 'body' ).addClass( @_settings.activeBodyClass )

      when 'close'

        $element.removeClass( @_settings.activeClass )
        $( 'body' ).removeClass( @_settings.activeBodyClass )

        @_cleanupEvents()

    @_toggleOverlay( event ) unless removeBackdrop

    callback?()

    @_setActiveEventHandlers()

  # -------------------------------------
  #   Toggle Overlay
  # -------------------------------------

  _toggleOverlay: ( event ) ->
    switch event

      when 'open'

        $( '<div class=' + @_settings.backdropClass + '></div>' )
          .appendTo( $( 'body' ) )

        @_$backdrop = $( ".#{ @_settings.backdropClass }" )

        setTimeout =>
          @_$backdrop.addClass( @_settings.activeClass )
        , 25

      when 'close'

        @_$backdrop.removeClass( @_settings.activeClass )

        setTimeout =>
          @_$backdrop.remove()
        , 500

  # -------------------------------------
  #   Set Event Handlers
  # -------------------------------------

  _setEventHandlers: ->
    @_settings.$trigger.on 'click', ( event ) =>
      event.preventDefault()

      selector = $( event.currentTarget ).data( @_settings.dataAttribute )
      @_$modal = $( selector )

      @trigger( @_$modal, 'open' )

  # -------------------------------------
  #   Set Active Event Handlers
  # -------------------------------------

  _setActiveEventHandlers: ->

    # ----- Close ----- #

    @_settings.$close.on 'click', ( event ) =>
      event.preventDefault()
      @trigger( @_$modal, 'close' )

    # ----- Backdrop ----- #

    @_$backdrop.on 'click', ( event ) =>
      @trigger( @_$modal, 'close' )

    # ----- Escape ----- #

    $( document ).on 'keydown', ( event ) =>
      switch event.which
        when 27 then @trigger( @_$modal, 'close' )

  # -------------------------------------
  #   Clean Up Events
  # -------------------------------------

  _cleanupEvents: ->
    @_settings.$close.off( 'click' )
    $( document ).off( 'keydown' )

# -------------------------------------
#   Usage
# -------------------------------------
#
# new Spellbook.Classes.Modal()
#
