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
    activeLinkClass: 'is-active'
    hiddenItemClass: 'is-hidden'
  , options)

  settings.link.on 'click', (event) ->
    event.preventDefault()
    element = $(@)
    itemToShow = element.attr('href').split('#')[1]

    settings.link.removeClass(settings.activeLinkClass)
    element.toggleClass(settings.activeLinkClass)

    settings.link.removeClass(settings.hiddenItemClass)

    unless itemToShow is 'all'
      settings.item
        .not("[data-item=#{ itemToShow }]")
        .addClass(settings.hiddenItemClass)

# -------------------------------------
#   Usage
# -------------------------------------
#
# Spellbook.filter()
#
