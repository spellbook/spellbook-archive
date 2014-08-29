# *************************************
#
#   Get Query Parameters
#   -> Gets URL query parameters
#
# *************************************

class @Spellbook.QueryParams

  # -------------------------------------
  #   Constructor
  # -------------------------------------

  constructor: () ->
    @init()

  # -------------------------------------
  #   Initializer
  # -------------------------------------

  init: () ->
    @params = {}
    @variables = []

    @parseQueryString()
    @sortParams()

  # -------------------------------------
  #   Parse Query String
  # -------------------------------------

  parseQueryString: () ->
    queryString = window.location.search.substring(1)
    @variables = queryString.split('&')

  # -------------------------------------
  #   Sort Parameters
  # -------------------------------------

  sortParams: ->
    for param in @variables
      pair = param.split("=")
      @params[pair[0]] = pair[1]

  # -------------------------------------
  #   Get All Parameters
  # -------------------------------------

  allParams: () ->
    @params

  # -------------------------------------
  #   Match Parameter Key
  # -------------------------------------
  # matcher - the key to match
  # -------------------------------------

  matchParamKey: (matcher) ->
    for key, value of @params
      console.log key
      return true if matcher == key

    return false

  # -------------------------------------
  #   Match Parameter Value
  # -------------------------------------
  # matcher - the value to match
  # -------------------------------------

  matchParamValue: (matcher) ->
    for key, value of @params
      console.log value
      return true if matcher == value

    return false

# -------------------------------------
#   Usage
# -------------------------------------
#
# qp = new Spellbook.QueryParams()
#
# qp.allParams()
#
# qp.matchParamKey('key')
# qp.matchParamValue('key')
#

