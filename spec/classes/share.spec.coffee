describe 'Spellbook.Classes.Share', ->
  beforeEach ->
    loadFixtures( 'share.html' )

    @element     = $( '.js-share' )
    @activeClass = 'is-active'

    new Spellbook.Classes.Share()

  it 'should trigger a click on the service element', ->
    spyOnEvent( @element, 'click' )
    @element.click()

    expect( 'click' ).toHaveBeenTriggeredOn( @element )
