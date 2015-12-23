describe 'Spellbook.Helpers.slugify', ->

  beforeEach ->
    @string        = 'This is my title!'
    @sluggedString = Spellbook.Helpers.slugify( @string )

  it 'should convert the string into a slug', ->
    expect( @sluggedString ).to.equal( 'this-is-my-title' )
