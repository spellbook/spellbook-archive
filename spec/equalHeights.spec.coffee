describe 'Spellbook.EqualHeights', ->
  beforeEach ->
    loadFixtures( 'equal_heights.html' )

    @element = $( '.js-equalHeights' )

    Spellbook.EqualHeights.init()

  it 'should set equal heights on the elements', ->
    expect( @element ).toHaveProp( 'style' )
