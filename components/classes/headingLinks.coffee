# *************************************
#
#   Heading Links
#   -> Create anchor links on headings
#
# *************************************
#
# @param $element    { jQuery object }
# @param anchorClass { string }
#
# *************************************

class @Spellbook.Classes.HeadingLinks

  # -------------------------------------
  #   Private Variables
  # -------------------------------------

  _settings = {}

  # -------------------------------------
  #   Constructor
  # -------------------------------------

  constructor : ( options ) -> @init( options )

  # -------------------------------------
  #   Initialize
  # -------------------------------------

  init: ( options ) ->
    @_settings = $.extend
      $element    : $( 'h1, h2, h3, h4, h5' )
      anchorClass : 'anchor'
    , options

    @_addAnchors()

  # -------------------------------------
  #   Slugify
  # -------------------------------------
  #
  # @param string { string }
  #
  # -------------------------------------

  _slugify: ( string ) ->
    string
      .toLowerCase()
      .replace( /[^\w ]+/g, '' )
      .replace( /\s+/g, '-' )

  # -------------------------------------
  #   Add Anchors
  # -------------------------------------

  _addAnchors: ->
    @_settings.$element.each ( index, elementNode ) =>
      $element = $( elementNode )
      slug     = @_slugify( $element.text() )

      $element.attr( 'id', slug )
      $element.prepend """
        <a class='#{ @_settings.anchorClass }' href='##{ slug }'>#</a>
      """

# -------------------------------------
#   Usage
# -------------------------------------
#
# new Spellbook.Classes.HeadingLinks()
#
