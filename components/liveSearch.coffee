# *************************************
#
#   Live Search
#   -> Search DOM text and filter
#
# *************************************
#
# @param $element     { jQuery object }
# @param $query       { jQuery object }
# @param $container   { jQuery object }
# @param itemNode     { string (selector) }
# @param hiddenClass  { string }
# @param emptyMessage { boolean }
# @param emptyNode    { string (selector) }
# @param onClear      { function }
# @param onEmpty      { function }
# @param onFound      { function }
# @param onKeyup      { function }
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
      $element     : $( '.js-search' )
      $query       : $( '.js-search-query' )
      $container   : $( '.js-search-container' )
      itemNode     : '.js-search-item'
      hiddenClass  : 'is-hidden'
      emptyMessage : true
      emptyNode    : '.js-search-empty'
      onClear      : null
      onEmpty      : null
      onFound      : null
      onKeyup      : null
    , options

    _setEventHandlers()

  # -------------------------------------
  #   Set Event Handlers
  # -------------------------------------

  _setEventHandlers = ->
    _settings.$element.on 'keyup', ( event ) ->
      _query = $(@).val()

      # Keyup Event
      _settings.onKeyup( _settings ) if _settings.onKeyup?

      if _query is ''
        $( _settings.itemNode ).removeClass( _settings.hiddenClass )
        _clearEmptyMessage()

        # Clear Event
        _settings.onClear( _settings ) if _settings.onClear?

      _clearEmptyMessage()
      _parseDom()

  # -------------------------------------
  #   Parse DOM
  # -------------------------------------

  _parseDom = ->
    _settings.$query.each ( index ) ->
      $element = $(@)

      if _isQueryAbsent( $element )
        $element
          .closest( _settings.itemNode )
          .addClass( _settings.hiddenClass )
      else
        $element
          .closest( _settings.itemNode )
          .removeClass( _settings.hiddenClass )

        # Found Event
        _settings.onFound( _settings ) if _settings.onFound?

    _handleEmptyResults()

  # -------------------------------------
  #   Clear Empty Message
  # -------------------------------------

  _clearEmptyMessage = ->
    if _settings.emptyMessage and $( _settings.emptyNode ).length > 0
      $( _settings.emptyNode ).remove()

  # -------------------------------------
  #   Handle Empty Results
  # -------------------------------------

  _handleEmptyResults = ->
    if _isEmpty()
      if _settings.emptyMessage
        emptyClass = _settings.emptyNode.replace( '.', '' )

      $( """
        <p class='#{ emptyClass }'>
          There are no results matching '#{ _query }'.
        </p>
      """ ).insertAfter( _settings.$container )

      # Empty Event
      _settings.onEmpty( _settings ) if _settings.onEmpty?

  # -------------------------------------
  #   Is Query Absent
  # -------------------------------------
  #
  # @param element { jQuery object }
  #
  # -------------------------------------

  _isQueryAbsent = ( element ) ->
    element.text().search( new RegExp( _query, 'i' ) ) < 0

  # -------------------------------------
  #   Is Empty
  # -------------------------------------

  _isEmpty = ->
    $( "#{ _settings.itemNode }.#{ _settings.hiddenClass }" ).length is $( _settings.itemNode ).length

  # -------------------------------------
  #   Public Methods
  # -------------------------------------

  init : init

# -------------------------------------
#   Usage
# -------------------------------------
#
# Spellbook.LiveSearch.init()
#
