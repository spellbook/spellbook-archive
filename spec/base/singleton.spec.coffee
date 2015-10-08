describe 'Spellbook.Classes.Singleton', ->
  beforeEach ->
    @a = Spellbook.Classes.Singleton.getInstance()
    @b = Spellbook.Classes.Singleton.getInstance()

  it 'should set both objects to the same instance', ->
    expect( @a ).toEqual( @b )
