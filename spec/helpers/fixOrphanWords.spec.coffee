describe 'Spellbook.Helpers.fixOrphanWords', ->
  beforeEach ->
    loadFixtures( 'fix_orphan_words.html' )

    @element = $( '.js-orphan' )

    Spellbook.Helpers.fixOrphanWords()

  it 'should add a non-breaking space', ->
    expect( @element.html() ).toContain( '&nbsp;' )
