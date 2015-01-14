# *************************************
#
#   Scroll To
#   -> Animated scroll to element
#
# *************************************
#
# options.element - the element (jQuery)
# options.speed   - the speed of the scroll (milliseconds)
#
# *************************************

@Spellbook.scrollTo = ( options ) ->
  settings = $.extend
    element : $( '.js-scrollTo' )
    speed   : 250
  , options

  settings.element.on 'click', ( event ) ->
    event.preventDefault()
    to = settings.element.attr( 'href' )

    $( 'body, html' ).animate({
      scrollTop: parseInt( $( to ).offset().top )
    }, settings.speed)

# -------------------------------------
#   Usage
# -------------------------------------
#
# Spellbook.scrollTo()
#
