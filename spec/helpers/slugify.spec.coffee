describe 'Spellbook.slugify', ->
  beforeEach ->
    @string        = 'This is my title!'
    @sluggedString = Spellbook.Helpers.slugify( @string )

  it 'should convert the string into a slug', ->
    expect( @sluggedString ).toEqual( 'this-is-my-title' )
