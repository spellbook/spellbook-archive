# *************************************
#
#   Scroll Trigger
#   -> Description
#
# *************************************
#
# options.element - the element to hit
# options.scrollPadding - the padding on the element
# options.activeClass - the class to add to the active element
#
# *************************************

@Spellbook.scrollTrigger = (options) ->
  settings = $.extend(
    element: $('.js-scrollTrigger')
    scrollPadding: 400
    activeClass: 'is-active'
  , options)

  scrolled = $(window).scrollTop()
  active = scrolled - settings.element.offset().top >= 0 - settings.scrollPadding

  if !settings.element.hasClass(settings.activeClass) and active
    settings.element.addClass(settings.activeClass)

# -------------------------------------
#   Usage
# -------------------------------------
#
# Spellbook.scrollTrigger()
#
