# *************************************
#
#   Dematerialize
#   -> Hides an element and keeps it hidden
#
# *************************************

@Spellbook.dematerialize = (options) ->
  settings = $.extend(
    element: $('.js-dematerialize-element')
    trigger: $('.js-dematerialize-trigger')
    itemTitle: 'hidden_element'
    hiddenClass: 'is-hidden'
  , options)

  item = localStorage.getItem(settings.itemTitle)

  if item is null
    settings.element.removeClass(settings.hiddenClass)
  else
    settings.element.addClass(settings.hiddenClass)

  settings.trigger.on 'click', (event) ->
    event.preventDefault()

    settings.element.addClass(settings.hiddenClass)
    localStorage.setItem( settings.itemTitle, true )

# -------------------------------------
#   Usage
# -------------------------------------
#
# Spellbook.dematerialize()
#

