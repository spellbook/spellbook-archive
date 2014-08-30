# *************************************
#
#   Toggle
#   -> Toggles state on given elements
#
# *************************************

Spellbook.toggle = (options) ->
  settings = $.extend(
    sender: $('.js-toggle-sender')
    receiver: null
    proximity: 'next' # prev, parent, nextParent, parentPrev, $('.element')
    event: 'click' # hover
    toggleClass: 'is-hidden'
  , options)

  switch settings.event

    when 'click'

      settings.sender.on 'click', (event) ->
        event.preventDefault()

        unless settings.receiver

          switch settings.proximity
            when 'next'       then $(@).next().toggleClass(settings.toggleClass)
            when 'prev'       then $(@).prev().toggleClass(settings.toggleClass)
            when 'nextParent' then $(@).parent().next().toggleClass(settings.toggleClass)
            when 'prevParent' then $(@).parent().prev().toggleClass(settings.toggleClass)
            else
              settings.proximity.toggleClass(settings.toggleClass)

        else

          settings.receiver.toggleClass(settings.toggleClass)

    when 'hover'

      settings.initialState() if settings.initialState

      settings.sender.on

        mouseenter: () ->

          switch settings.proximity
            when 'next'       then $(@).next().addClass(settings.toggleClass)
            when 'prev'       then $(@).prev().addClass(settings.toggleClass)
            when 'nextParent' then $(@).parent().next().addClass(settings.toggleClass)
            when 'prevParent' then $(@).parent().prev().addClass(settings.toggleClass)
            else
              settings.proximity.addClass(settings.toggleClass)

        mouseleave: () ->

          switch settings.proximity
            when 'next'       then $(@).next().removeClass(settings.toggleClass)
            when 'prev'       then $(@).prev().removeClass(settings.toggleClass)
            when 'nextParent' then $(@).parent().next().removeClass(settings.toggleClass)
            when 'prevParent' then $(@).parent().prev().removeClass(settings.toggleClass)
            else
              settings.proximity.removeClass(settings.toggleClass)

# -------------------------------------
#   Usage
# -------------------------------------
#
# Spellbook.toggle()
#

