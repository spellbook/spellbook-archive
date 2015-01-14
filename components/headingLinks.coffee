# *************************************
#
#   Heading Links
#   -> Named anchor links on headings
#
# *************************************
#
# @param headings    { jQuery object }
# @param anchorClass { string }
#
# *************************************

@Spellbook.HeadingLinks = do ->

  # -------------------------------------
  #   Private Variables
  # -------------------------------------

  _settings = {}

  # -------------------------------------
  #   Initialize
  # -------------------------------------

  init = ( options ) ->
    _settings = $.extend
      headings    : $( 'h1, h2, h3, h4, h5' )
      anchorClass : 'anchor'
    , options

    _addAnchors()

  # -------------------------------------
  #   Slugify
  # -------------------------------------
  #
  # @param string { string }
  #
  # -------------------------------------

  _slugify = ( string ) ->
    string
      .toLowerCase()
      .replace( /[^\w ]+/g, '' )
      .replace( /\s+/g, '-' )

  # -------------------------------------
  #   Add Anchors
  # -------------------------------------

  _addAnchors = ->
    _settings.headings.each ->
      element = $(@)
      slug    = _slugify( element.text() )

      element.attr( 'id', slug )
      element.prepend( "<a class='#{ _settings.anchorClass }' href='##{ slug }'>#</a>" )

  # -------------------------------------
  #   Public Methods
  # -------------------------------------

  init: init

# -------------------------------------
#   Usage
# -------------------------------------
#
# Spellbook.HeadingLinks.init()
#
