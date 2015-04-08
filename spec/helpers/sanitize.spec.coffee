describe 'Spellbook.Helpers.sanitize', ->
  it 'should sanitize HTML input in a string', ->
    string = '<h1>This is a string.</h1>'
    expect( Spellbook.Helpers.sanitize( string ) ).toBe( 'This is a string.' )

  it 'should sanitize JavaScript input in a string', ->
    string = '<script type="text/javascript">This is a string.</script>'
    expect( Spellbook.Helpers.sanitize( string ) ).toBe( 'This is a string.' )
