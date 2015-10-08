describe 'Spellbook.Classes.EqualHeights', ->
  beforeEach ->
    loadFixtures( 'equal_heights.html' )

    @element = $( '.js-equalHeights' )

    new Spellbook.Classes.EqualHeights()

  it 'should set equal heights on the elements', ->
    expect( @element ).toHaveProp( 'style' )
