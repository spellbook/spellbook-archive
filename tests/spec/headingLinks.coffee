describe 'Spellbook.headingLinks', ->
  beforeEach ->
    @element = $('<h1>This is a heading</h1>')

    Spellbook.headingLinks.init
      headings: @element

  it 'should slugify the heading string as an ID', ->
    expect(@element).toHaveId('this-is-a-heading')

  it 'should have an anchor link prepended to the heading', ->
    expect(@element).toContainElement('a')

  it 'should apply the correct class to the heading link', ->
    expect(@element.find('a')).toHaveAttr('class', 'anchor')

