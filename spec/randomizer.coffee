describe 'Spellbook.randomizer', ->
  it 'should return a random value from a collection', ->
    collection = ['one', 'two', 'three']
    expect(Spellbook.randomizer(collection)).toMatch(/one|two|three/)

