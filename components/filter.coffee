# *************************************
#
#   Filter
#   -> Sift through a set of items
#
# *************************************

@Spellbook.filter = (options) ->
  settings = $.extend(
    link: $('.js-filter-link')
    item: $('.js-filter-item')
    activeClass: 'is-active'
    hiddenClass: 'is-hidden'
  , options)

  settings.link.on 'click', (event) ->
    event.preventDefault()
    element = $(@)
    itemToShow = element.attr('href').split('#')[1]

    settings.link.removeClass(settings.activeClass)
    element.toggleClass(settings.activeClass)

    unless itemToShow is 'all'
      settings.item.addClass(settings.hiddenClass)
      $("[data-item=#{ itemToShow }]")
        .removeClass(settings.hiddenClass)
    else
      settings.item.removeClass(settings.hiddenClass)

# -------------------------------------
#   Usage
# -------------------------------------
#
# Spellbook.filter()
#
