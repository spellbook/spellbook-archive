describe 'Spellbook.Share', ->
  beforeEach ->
    loadFixtures( 'share.html' )

    @element     = $( '.js-share-service' )
    @activeClass = 'is-active'

    Spellbook.Share.init()

  it 'should trigger a click on the service element', ->
    spyOnEvent( @element, 'click' )
    @element.click()

    expect( 'click' ).toHaveBeenTriggeredOn( @element )
