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
  scrolled = $(window).scrollTop()
  active = scrolled - options.element.offset().top >= 0 - options.scrollPadding

  if !options.element.hasClass(options.activeClass) and active
    options.element.addClass(options.activeClass)

# -------------------------------------
#   Usage
# -------------------------------------
#
# Spellbook.scrollTrigger({
#   element: $('.js-scrollTrigger-element')
#   scrollPadding: 400
#   activeClass: 'is-active'
# })
#
