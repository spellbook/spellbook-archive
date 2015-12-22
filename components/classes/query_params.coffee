# *************************************
#
#   Get Query Parameters
#   -> Get URL query parameters
#
# *************************************
#
# @param url { string }
#
# *************************************

class @Spellbook.Classes.QueryParams extends Spellbook.Classes.Base

  # -------------------------------------
  #   Defaults
  # -------------------------------------

  @_defaults :
    url      : null

  # -------------------------------------
  #   Constructorr
  # -------------------------------------

  constructor : ( options ) ->
    super( options )

    @params    = {}
    @variables = []

    @_parseQueryString( @_settings.url )
    @_sortParams()

  # -------------------------------------
  #   Get All Parameters
  # -------------------------------------

  allParams : ->
    @params

  # -------------------------------------
  #   Match Parameter Key
  # -------------------------------------
  #
  # @param matcher { string }
  #
  # -------------------------------------

  matchParamKey : ( matcher ) ->
    for key, value of @params
      return true if matcher is key

    return false

  # -------------------------------------
  #   Match Parameter Value
  # -------------------------------------
  #
  # @param matcher { string }
  #
  # -------------------------------------

  matchParamValue : ( matcher ) ->
    for key, value of @params
      return true if matcher is value

    return false

  # -------------------------------------
  #   Parse Query String
  # -------------------------------------
  #
  # @param url { string }
  #
  # -------------------------------------

  _parseQueryString : ( url ) ->
    if url
      queryString = url.split( '?' )[ 1 ]
    else
      queryString = window.location.search.substring( 1 )

    @variables = queryString.split( '&' )

  # -------------------------------------
  #   Sort Parameters
  # -------------------------------------

  _sortParams : ->
    for param in @variables
      pair = param.split( '=' )
      @params[ pair[ 0 ] ] = pair[ 1 ] unless pair[ 1 ] is undefined

# -------------------------------------
#   Usage
# -------------------------------------
#
# qp = new Spellbook.Classes.QueryParams()
#
# qp.allParams()
#
# qp.matchParamKey( 'key' )
# qp.matchParamValue( 'key' )
#
