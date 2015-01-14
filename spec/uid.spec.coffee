describe 'Spellbook.uid', ->

  it 'should generate a ten-digit unique ID', ->
    id = Spellbook.uid()

    expect( id ).toMatch( /^[0-9a-zA-Z]{10}/ )

  it 'should generate a twelve-digit unique ID', ->
    id = Spellbook.uid( 12 )

    expect( id ).toMatch( /^[0-9a-zA-Z]{12}/ )

  it 'should generate a twenty-four-digit unique ID', ->
    id = Spellbook.uid( 24 )

    expect( id ).toMatch( /^[0-9a-zA-Z]{24}/ )
