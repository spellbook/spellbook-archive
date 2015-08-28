describe 'Spellbook.Helpers.isBlank', ->
  it 'should accept whitespace characters', ->
    string = ' '
    expect( Spellbook.Helpers.isBlank( string ) ).toBeTruthy()

  it 'should reject non-whitespace characters', ->
    string = 'a'
    expect( Spellbook.Helpers.isBlank( string ) ).toBeFalsy()
