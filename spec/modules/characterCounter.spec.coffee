describe 'Spellbook.Modules.CharacterCounter', ->
  beforeEach ->
    loadFixtures( 'character_counter.html' )

    @element = $( '.js-characterCounter' )
    @label   = $( '.js-characterCounter-label' )

    Spellbook.Modules.CharacterCounter.init()

  it 'should initialize with a zero character count', ->
    expect( @label ).toContainText( '0' )

  it 'should change character count based on the typed string', ->
    @element.val('This is some text here.')

    expect( @label ).toContainText( @element.text().length )
