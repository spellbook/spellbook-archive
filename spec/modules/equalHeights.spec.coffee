describe 'Spellbook.Modules.EqualHeights', ->
  beforeEach ->
    loadFixtures( 'equal_heights.html' )

    @element = $( '.js-equalHeights' )

    Spellbook.Modules.EqualHeights.init()

  it 'should set equal heights on the elements', ->
    expect( @element ).toHaveProp( 'style' )
