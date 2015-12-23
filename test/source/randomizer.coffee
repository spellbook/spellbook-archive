describe 'Spellbook.Helpers.randomizer', ->

  it 'should return a random value from a collection', ->
    collection = [ 'one', 'two', 'three' ]
    expect( Spellbook.Helpers.randomizer( collection ) ).to.match( /one|two|three/ )
