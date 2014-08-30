describe 'Spellbook.headingLinks', ->
  beforeEach ->
    @firstHeading = $('h1')
    @headings = $('h1, h2, h3, h4')

    Spellbook.headingLinks.init
      headings: @headings

  it 'should slugify the heading string as an ID', ->
    expect(@firstHeading).toHaveId('this-is-a-heading')

  it 'should have an anchor link prepended to the heading', ->
    expect(@headings).toContainElement('a')

  it 'should apply the correct class to the heading link', ->
    expect(@headings.find('a')).toHaveAttr('class', 'anchor')

