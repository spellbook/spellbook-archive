# *************************************
#
#   Get Query Parameters
#   -> Gets URL query parameters
#
# *************************************

class @Spellbook.QueryParams

  # -------------------------------------
  #   Instance Variables
  # -------------------------------------

  params    : {}
  variables : []
  _settings : {}

  # -------------------------------------
  #   Constructor
  # -------------------------------------

  constructor: ( @options ) ->
    @_settings = $.extend
      url: null
    , @options

    @init()

  # -------------------------------------
  #   Initializer
  # -------------------------------------

  init: ->
    @_parseQueryString( @_settings.url )
    @_sortParams()

  # -------------------------------------
  #   Parse Query String
  # -------------------------------------

  _parseQueryString: ( url ) ->
    if url
      queryString = url.split( '?' )[ 1 ]
    else
      queryString = window.location.search.substring( 1 )

    @variables = queryString.split( '&' )

  # -------------------------------------
  #   Sort Parameters
  # -------------------------------------

  _sortParams: ->
    for param in @variables
      pair = param.split( '=' )
      @params[ pair[ 0 ] ] = pair[ 1 ] unless pair[ 1 ] is undefined

  # -------------------------------------
  #   Get All Parameters
  # -------------------------------------

  allParams: ->
    @params

  # -------------------------------------
  #   Match Parameter Key
  # -------------------------------------
  # matcher - the key to match
  # -------------------------------------

  matchParamKey: ( matcher ) ->
    for key, value of @params
      return true if matcher is key

    return false

  # -------------------------------------
  #   Match Parameter Value
  # -------------------------------------
  # matcher - the value to match
  # -------------------------------------

  matchParamValue: ( matcher ) ->
    for key, value of @params
      return true if matcher is value

    return false

# -------------------------------------
#   Usage
# -------------------------------------
#
# qp = new Spellbook.QueryParams()
#
# qp.allParams()
#
# qp.matchParamKey( 'key' )
# qp.matchParamValue( 'key' )
#
