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

  settings = {}

  init = (options) ->
    settings = $.extend(
      headings: $('h1, h2, h3, h4, h5')
      anchorClass: 'anchor'
    , options)

    addAnchors()

  slugify = (string) ->
    string.toLowerCase().replace(/[^\w ]+/g,'').replace(/\s+/g,'-')

  addAnchors = ->
    settings.headings.each ->
      element = $(@)
      slug = slugify( element.text() )
      element.attr('id', slug)
      element.prepend("<a class='#{settings.anchorClass}' href='##{slug}'>#</a>")

  init: init

# -------------------------------------
#   Usage
# -------------------------------------
#
# Spellbook.headingLinks.init()
#
