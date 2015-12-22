# *************************************
#
#   Filter
#   -> Sift through a set of items
#
# *************************************
#
# @param $element    { jQuery object }
# @param $empty      { jQuery object }
# @param $item       { jQuery object }
# @param $link       { jQuery object }
# @param classActive { string }
# @param classHidden { string }
# @param dataAttr    { string }
#
# *************************************

@Spellbook.Services.filter = ( options ) ->
  settings = $.extend
    $element    : $( '.js-filter' )
    $empty      : $( '<p>There are no items to show.</p>' )
    $item       : $( '.js-filter-item' )
    $link       : $( '.js-filter-link' )
    classActive : 'is-active'
    classHidden : 'is-hidden'
    dataAttr    : 'item'
  , options

  settings.$link.on 'click', ( event ) ->
    event.preventDefault()

    $element    = $(@)
    itemToShow  = $element.attr( 'href' ).split( '#' )[ 1 ]

    settings.$link.removeClass( settings.classActive )
    $element.toggleClass( settings.classActive )

    unless itemToShow is 'all'
      settings.$item.addClass( settings.classHidden )

      dataItemToShow = $( "[data-#{ settings.dataAttr }=#{ itemToShow }]" )

      if dataItemToShow.length > 0
        dataItemToShow.removeClass( settings.classHidden )
      else
        settings.$element.append( settings.$empty )
    else
      settings.$item.removeClass( settings.classHidden )

# -------------------------------------
#   Usage
# -------------------------------------
#
# Spellbook.Services.filter()
#
