# *************************************
#
#   Toggle
#   -> Toggle state on given elements
#
# *************************************
#
# @param $element    { jQuery object }
# @param proximity   { string }
# @param event       { string }
# @param toggleClass { string }
# @param activeClass { string }
# @param onClick     { function }
# @param onMouseover { function }
# @param onMouseout  { function }
#
# *************************************

@Spellbook.toggle = ( options ) ->
  settings = $.extend
    $element    : $( '.js-toggle' )
    proximity   : 'next' # prev, parent, nextParent, prevParent, $( '.element' )
    event       : 'click' # hover
    toggleClass : 'is-hidden'
    activeClass : 'is-active'
    onClick     : null
    onMouseover : null
    onMouseout  : null
  , options

  switch settings.event

    # -------------------------------------
    #   Click
    # -------------------------------------

    when 'click'

      settings.$element.on 'click', ( event ) ->
        event.preventDefault()
        $element = $(@)

        settings.onClick( settings ) if settings.onClick?

        settings.$element.toggleClass( settings.activeClass )

        switch settings.proximity
          when 'next'
            $element
              .next()
              .toggleClass( settings.toggleClass )
          when 'prev'
            $element
              .prev()
              .toggleClass( settings.toggleClass )
          when 'nextParent'
            $element
              .parent()
              .next()
              .toggleClass( settings.toggleClass )
          when 'prevParent'
            $element
              .parent()
              .prev()
              .toggleClass( settings.toggleClass )
          else
            settings.proximity
              .toggleClass( settings.toggleClass )

    # -------------------------------------
    #   Hover
    # -------------------------------------

    when 'hover'

      settings.initialState() if settings.initialState

      settings.$element.on

        # ----- Mouse Enter ----- #

        mouseenter: ->

          $element = $(@)

          settings.onMouseover( settings ) if settings.onMouseover?

          $element.addClass( settings.activeClass )

          switch settings.proximity
            when 'next'
              $element
                .next()
                .addClass( settings.toggleClass )
            when 'prev'
              $element
                .prev()
                .addClass( settings.toggleClass )
            when 'nextParent'
              $element
                .parent()
                .next()
                .addClass( settings.toggleClass )
            when 'prevParent'
              $element
                .parent()
                .prev()
                .addClass( settings.toggleClass )
            else
              settings.proximity
                .addClass( settings.toggleClass )

        # ----- Mouse Leave ----- #

        mouseleave: ->

          $element = $(@)

          settings.onMouseout( settings ) if settings.onMouseout?

          $element.removeClass( settings.activeClass )

          switch settings.proximity
            when 'next'
              $element
                .next()
                .removeClass( settings.toggleClass )
            when 'prev'
              $element
                .prev()
                .removeClass( settings.toggleClass )
            when 'nextParent'
              $element
                .parent()
                .next()
                .removeClass( settings.toggleClass )
            when 'prevParent'
              $element
                .parent()
                .prev()
                .removeClass( settings.toggleClass )
            else
              settings.proximity
                .removeClass( settings.toggleClass )

# -------------------------------------
#   Usage
# -------------------------------------
#
# Spellbook.toggle()
#
