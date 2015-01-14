# *************************************
#
#   Filter
#   -> Sift through a set of items
#
# *************************************
#
# @param link           { jQuery object }
# @param item           { jQuery object }
# @param itemsContainer { jQuery object }
# @param activeClass    { string }
# @param hiddenClass    { string }
# @param emptyElement   { jQuery object }
# @param dataAttribute  { string }
#
# *************************************

@Spellbook.filter = ( options ) ->
  settings = $.extend
    link           : $( '.js-filter-link' )
    item           : $( '.js-filter-item' )
    itemsContainer : $( '.js-filter-items' )
    activeClass    : 'is-active'
    hiddenClass    : 'is-hidden'
    emptyElement   : $( '<p>There are no items to show.</p>' )
    dataAttribute  : 'item'
  , options

  settings.link.on 'click', ( event ) ->
    event.preventDefault()

    element    = $(@)
    itemToShow = element.attr( 'href' ).split( '#' )[ 1 ]

    settings.link.removeClass( settings.activeClass )
    element.toggleClass( settings.activeClass )

    unless itemToShow is 'all'
      settings.item.addClass( settings.hiddenClass )

      dataItemToShow = $( "[data-#{ settings.dataAttribute }=#{ itemToShow }]" )

      if dataItemToShow.length > 0
        dataItemToShow.removeClass( settings.hiddenClass )
      else
        settings.itemsContainer.append( settings.emptyElement )
    else
      settings.item.removeClass( settings.hiddenClass )

# -------------------------------------
#   Usage
# -------------------------------------
#
# Spellbook.filter()
#
