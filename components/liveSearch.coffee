# *************************************
#
#   Live Search
#   -> Search DOM text and filter
#
# *************************************
#
# @param $element    { jQuery object }
# @param $query      { jQuery object }
# @param itemNode    { string (selector) }
# @param hiddenClass { string }
# @param onKeyup     { function }
# @param onFound     { function }
# @param onEmpty     { function }
#
# *************************************

@Spellbook.LiveSearch = do ->

  # -------------------------------------
  #   Private Variables
  # -------------------------------------

  _settings = {}
  _query    = ''

  # -------------------------------------
  #   Initialize
  # -------------------------------------

  init = ( options ) ->
    _settings = $.extend
      $element    : $( '.js-search' )
      $query      : $( '.js-search-query' )
      itemNode    : '.js-search-item'
      hiddenClass : 'is-hidden'
      onKeyup     : null
      onFound     : null
      onEmpty     : null
    , options

    _setEventHandlers()

  # -------------------------------------
  #   Set Event Handlers
  # -------------------------------------

  _setEventHandlers = ->
    _settings.$element.on 'keyup', ( event ) ->
      _query = $(@).val()

      _settings.onKeyup( _settings ) unless _settings.onKeyup is null

      if _query == ''
        $( _settings.itemNode ).removeClass( _settings.hiddenClass )

      _parseDom()

  # -------------------------------------
  #   Parse DOM
  # -------------------------------------

  _parseDom = ->
    _settings.$query.each ( index ) ->
      $element = $(@)

      if _isQueryFound( $element )
        $element
          .closest( _settings.itemNode )
          .addClass( _settings.hiddenClass )

        _settings.onFound( _settings ) unless _settings.onFound is null
      else
        $element
          .closest( _settings.itemNode )
          .removeClass( _settings.hiddenClass )

        _settings.onEmpty( _settings ) unless _settings.onEmpty is null

  # -------------------------------------
  #   Is Query Found
  # -------------------------------------
  #
  # @param element { jQuery object }
  #
  # -------------------------------------

  _isQueryFound = ( element ) ->
    element.text().search( new RegExp( _query, 'i' ) ) < 0

  # -------------------------------------
  #   Public Methods
  # -------------------------------------

  init: init

# -------------------------------------
#   Usage
# -------------------------------------
#
# Spellbook.LiveSearch.init()
#
