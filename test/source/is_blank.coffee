describe 'Spellbook.Helpers.isBlank', ->

  it 'should accept whitespace characters', ->
    string = ' '
    expect( Spellbook.Helpers.isBlank( string ) ).to.be.ok

  it 'should reject non-whitespace characters', ->
    string = 'a'
    expect( Spellbook.Helpers.isBlank( string ) ).to.not.be.ok
