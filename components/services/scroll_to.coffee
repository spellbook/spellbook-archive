# *************************************
#
#   Scroll To
#   -> Animate scrolling to element
#
# *************************************
#
# @param $element { jQuery object }
# @param speed    { integer }
#
# *************************************

@Spellbook.Services.scrollTo = ( options ) ->
  settings = $.extend
    $element : $( '.js-scrollTo' )
    speed    : 250
  , options

  settings.$element.on 'click', ( event ) ->
    event.preventDefault()
    to = settings.$element.attr( 'href' )

    $( 'body, html' ).animate({
      scrollTop : parseInt( $( to ).offset().top )
    }, settings.speed)

# -------------------------------------
#   Usage
# -------------------------------------
#
# Spellbook.Services.scrollTo()
#
