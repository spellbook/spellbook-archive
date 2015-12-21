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
  #   Initialize
  # -------------------------------------

  init : ->
    @_setDefaults
      $element    : $( 'h1, h2, h3, h4, h5' )
      classAnchor : 'anchor'

    @_addAnchors()

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
#   Usage
# -------------------------------------
#
# new Spellbook.Classes.HeadingLinks()
#
