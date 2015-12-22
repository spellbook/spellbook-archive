# *************************************
#
#   Heading Links
#   -> Create anchor links on headings
#
# *************************************
#
# @param $element    { jQuery object }
# @param classAnchor { string }
#
# *************************************

class @Spellbook.Classes.HeadingLinks extends Spellbook.Classes.Base

  # -------------------------------------
  #   Defaults
  # -------------------------------------

  @_defaults    :
    $element    : $( 'h1, h2, h3, h4, h5' )
    classAnchor : 'anchor'

  # -------------------------------------
  #   Constructor
  # -------------------------------------

  constructor : ( options ) ->
    super( options )

    @_addAnchors()

  # -------------------------------------
  #   Add Anchors
  # -------------------------------------

  _addAnchors : ->
    @_settings.$element.each ( index, elementNode ) =>
      $element = $( elementNode )
      slug     = @_slugify( $element.text() )

      $element.attr( 'id', slug )
      $element.prepend """
        <a class='#{ @_settings.classAnchor }' href='##{ slug }'>#</a>
      """

  # -------------------------------------
  #   Slugify
  # -------------------------------------
  #
  # @param string { string }
  #
  # -------------------------------------

  _slugify : ( string ) ->
    string
      .toLowerCase()
      .replace( /[^\w ]+/g, '' )
      .replace( /\s+/g, '-' )

# -------------------------------------
#   Usage
# -------------------------------------
#
# new Spellbook.Classes.HeadingLinks()
#
