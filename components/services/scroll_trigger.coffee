# *************************************
#
#   Scroll Trigger
#   -> Apply class on viewport entry
#
# *************************************
#
# @param $element      { jQuery object }
# @param classActive   { string }
# @param onTrigger     { function }
# @param scrollPadding { integer }
#
# *************************************

@Spellbook.Services.scrollTrigger = ( options ) ->
  settings = $.extend
    $element      : $( '.js-scrollTrigger' )
    classActive   : 'is-active'
    onTrigger     : null
    scrollPadding : 400
  , options

  scrolled = $( window ).scrollTop()

  if settings.$element.offset().top >= 0
    active = scrolled - settings.$element.offset().top - settings.scrollPadding

  if not settings.$element.hasClass( settings.classActive ) and active
    settings.$element.addClass( settings.classActive )

    settings.onTrigger?( settings )

# -------------------------------------
#   Usage
# -------------------------------------
#
# Spellbook.Services.scrollTrigger()
#
