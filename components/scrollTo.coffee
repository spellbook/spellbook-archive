# *************************************
#
#   Scroll To
#   -> Animated scroll to element
#
# *************************************
#
# options.element - the element (jQuery)
#
# *************************************

Spellbook.scrollTo = (options) ->
  options.element.on 'click', (e) ->
    e.preventDefault()
    to = options.el.attr('href')

    $('body, html').animate({
      scrollTop: parseInt($(to).offset().top)
    }, options.speed)
