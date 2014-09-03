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

    settings.link.removeClass(settings.hiddenClass)

    unless itemToShow is 'all'
      settings.item
        .not("[data-item=#{ itemToShow }]")
        .addClass(settings.hiddenClass)

# -------------------------------------
#   Usage
# -------------------------------------
#
# Spellbook.filter()
#
