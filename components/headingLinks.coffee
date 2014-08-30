# *************************************
#
#   Heading Links
#   -> Named anchor links on headings
#
# *************************************
#
# options.elements - the heading elements
# options.anchorClass - the class to add to the anchor
#
# *************************************

@Spellbook.headingLinks = do ->

  # -------------------------------------
  #   Private Variables
  # -------------------------------------

  settings = {}

  # -------------------------------------
  #   Initialize
  # -------------------------------------

  init = (options) ->
    settings = $.extend(
      headings: $('h1, h2, h3, h4, h5')
      anchorClass: 'anchor'
    , options)

    addAnchors()

  # -------------------------------------
  #   Slugify
  # -------------------------------------
  # string - the string to slugify
  # -------------------------------------

  slugify = (string) ->
    string
      .toLowerCase()
      .replace(/[^\w ]+/g, '')
      .replace(/\s+/g, '-')

  # -------------------------------------
  #   Add Anchors
  # -------------------------------------

  addAnchors = ->
    settings.headings.each ->
      element = $(@)
      slug = slugify( element.text() )
      element.attr('id', slug)
      element.prepend("<a class='#{settings.anchorClass}' href='##{slug}'>#</a>")

  # -------------------------------------
  #   Public Methods
  # -------------------------------------

  init: init

# -------------------------------------
#   Usage
# -------------------------------------
#
# Spellbook.headingLinks.init()
#
