# *************************************
#
#   Filter
#   -> Sift through a set of items
#
# *************************************
#
# @param $element      { jQuery object }
# @param $link         { jQuery object }
# @param $item         { jQuery object }
# @param $empty        { jQuery object }
# @param activeClass   { string }
# @param hiddenClass   { string }
# @param dataAttribute { string }
#
# *************************************

@Spellbook.filter = ( options ) ->
  settings = $.extend
    $element      : $( '.js-filter' )
    $item         : $( '.js-filter-item' )
    $link         : $( '.js-filter-link' )
    $empty        : $( '<p>There are no items to show.</p>' )
    activeClass   : 'is-active'
    hiddenClass   : 'is-hidden'
    dataAttribute : 'item'
  , options

  settings.$link.on 'click', ( event ) ->
    event.preventDefault()

    $element    = $(@)
    itemToShow  = $element.attr( 'href' ).split( '#' )[ 1 ]

    settings.$link.removeClass( settings.activeClass )
    $element.toggleClass( settings.activeClass )

    unless itemToShow is 'all'
      settings.$item.addClass( settings.hiddenClass )

      dataItemToShow = $( "[data-#{ settings.dataAttribute }=#{ itemToShow }]" )

      if dataItemToShow.length > 0
        dataItemToShow.removeClass( settings.hiddenClass )
      else
        settings.$element.append( settings.$empty )
    else
      settings.$item.removeClass( settings.hiddenClass )

# -------------------------------------
#   Usage
# -------------------------------------
#
# Spellbook.filter()
#
