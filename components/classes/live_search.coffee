# *************************************
#
#   Live Search
#   -> Search DOM text and filter
#
# *************************************
#
# @param $container          { jQuery object }
# @param $element            { jQuery object }
# @param $query              { jQuery object }
# @param classHidden         { string }
# @param isEmptyMessageShown { boolean }
# @param onClear             { function }
# @param onEmpty             { function }
# @param onFound             { function }
# @param onKeyup             { function }
# @param selectorEmpty       { string (selector) }
# @param selectorItem        { string (selector) }
#
# *************************************

class @Spellbook.Classes.LiveSearch extends Spellbook.Classes.Base

  # -------------------------------------
  #   Defaults
  # -------------------------------------

  @_defaults            :
    $container          : $( '.js-search-container' )
    $element            : $( '.js-search' )
    $query              : $( '.js-search-query' )
    classHidden         : 'is-hidden'
    isEmptyMessageShown : true
    onClear             : null
    onEmpty             : null
    onFound             : null
    onKeyup             : null
    selectorEmpty       : '.js-search-empty'
    selectorItem        : '.js-search-item'

  # -------------------------------------
  #   Constructor
  # -------------------------------------

  constructor : ( options ) ->
    super( options )

    @_query = ''

    @_setEventHandlers()

  # -------------------------------------
  #   Clear Empty Message
  # -------------------------------------

  _clearEmptyMessage : ->
    if @_settings.isEmptyMessageShown and $( @_settings.selectorEmpty ).length > 0
      $( @_settings.selectorEmpty ).remove()

  # -------------------------------------
  #   Handle Empty Results
  # -------------------------------------

  _handleEmptyResults : ->
    if @_isEmpty()
      if @_settings.isEmptyMessageShown
        emptyClass = @_settings.selectorEmpty.replace( '.', '' )

      $( """
        <p class='#{ emptyClass }'>
          There are no results matching '#{ @_query }'.
        </p>
      """ ).insertAfter( @_settings.$container )

      # Empty Event
      @_settings.onEmpty?( @_settings )

  # -------------------------------------
  #   Is Empty
  # -------------------------------------

  _isEmpty : ->
    $( "#{ @_settings.selectorItem }.#{ @_settings.classHidden }" ).length is $( @_settings.selectorItem ).length

  # -------------------------------------
  #   Is Query Absent
  # -------------------------------------
  #
  # @param element { jQuery object }
  #
  # -------------------------------------

  _isQueryAbsent : ( element ) ->
    element.text().search( new RegExp( @_query, 'i' ) ) < 0

  # -------------------------------------
  #   Parse DOM
  # -------------------------------------

  _parseDom : ->
    @_settings.$query.each ( index, elementNode ) =>
      $element = $( elementNode )

      if @_isQueryAbsent( $element )
        $element
          .closest( @_settings.selectorItem )
          .addClass( @_settings.classHidden )
      else
        $element
          .closest( @_settings.selectorItem )
          .removeClass( @_settings.classHidden )

        # Found Event
        @_settings.onFound?( @_settings )

    @_handleEmptyResults()

  # -------------------------------------
  #   Set Event Handlers
  # -------------------------------------

  _setEventHandlers : ->
    @_settings.$element.on 'keyup', ( event ) =>
      @_query = $( event.currentTarget ).val()

      # Keyup Event
      @_settings.onKeyup?( @_settings )

      if @_query is ''
        $( @_settings.selectorItem ).removeClass( @_settings.classHidden )
        @_clearEmptyMessage()

        # Clear Event
        @_settings.onClear?( @_settings )

      @_clearEmptyMessage()
      @_parseDom()

# -------------------------------------
#   Usage
# -------------------------------------
#
# new Spellbook.Classes.LiveSearch()
#
