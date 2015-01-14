# *************************************
#
#   Toggle
#   -> Toggles state on given elements
#
# *************************************
#
# @param sender               { jQuery object }
# @param proximity            { string }
# @param event                { string }
# @param proximityToggleClass { string }
# @param senderActiveClass    { string }
#
# *************************************

@Spellbook.toggle = ( options ) ->
  settings = $.extend
    sender               : $( '.js-toggle-sender' )
    proximity            : 'next' # prev, parent, nextParent, prevParent, $('.element')
    event                : 'click' # hover
    proximityToggleClass : 'is-hidden'
    senderActiveClass    : 'is-active'
  , options

  switch settings.event

    # -------------------------------------
    #   Click
    # -------------------------------------

    when 'click'

      settings.sender.on 'click', ( event ) ->
        event.preventDefault()
        element = $(@)

        settings.sender.toggleClass( settings.senderActiveClass )

        switch settings.proximity
          when 'next'
            element
              .next()
              .toggleClass( settings.proximityToggleClass )
          when 'prev'
            element
              .prev()
              .toggleClass( settings.proximityToggleClass )
          when 'nextParent'
            element
              .parent()
              .next()
              .toggleClass( settings.proximityToggleClass )
          when 'prevParent'
            element
              .parent()
              .prev()
              .toggleClass( settings.proximityToggleClass )
          else
            settings.proximity
              .toggleClass( settings.proximityToggleClass )

    # -------------------------------------
    #   Hover
    # -------------------------------------

    when 'hover'

      settings.initialState() if settings.initialState

      settings.sender.on

        # ----- Mouse Enter ----- #

        mouseenter: ->

          element = $(@)
          element.addClass( settings.senderActiveClass )

          switch settings.proximity
            when 'next'
              element
                .next()
                .addClass( settings.proximityToggleClass )
            when 'prev'
              element
                .prev()
                .addClass( settings.proximityToggleClass )
            when 'nextParent'
              element
                .parent()
                .next()
                .addClass( settings.proximityToggleClass )
            when 'prevParent'
              element
                .parent()
                .prev()
                .addClass( settings.proximityToggleClass )
            else
              settings.proximity
                .addClass( settings.proximityToggleClass )

        # ----- Mouse Leave ----- #

        mouseleave: ->

          element = $(@)

          element.removeClass( settings.senderActiveClass )

          switch settings.proximity
            when 'next'
              element
                .next()
                .removeClass( settings.proximityToggleClass )
            when 'prev'
              element
                .prev()
                .removeClass( settings.proximityToggleClass )
            when 'nextParent'
              element
                .parent()
                .next()
                .removeClass( settings.proximityToggleClass )
            when 'prevParent'
              element
                .parent()
                .prev()
                .removeClass( settings.proximityToggleClass )
            else
              settings.proximity
                .removeClass( settings.proximityToggleClass )

# -------------------------------------
#   Usage
# -------------------------------------
#
# Spellbook.toggle()
#
