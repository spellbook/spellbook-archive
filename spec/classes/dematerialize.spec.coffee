describe 'Spellbook.Classes.Dematerialize', ->
  beforeEach ->
    loadFixtures( 'dematerialize.html' )

    @element     = $( '.js-dematerialize' )
    @trigger     = $( '.js-dematerialize-trigger' )
    @itemTitle   = 'hidden_element'
    @hiddenClass = 'is-hidden'

    element = new Spellbook.Classes.Dematerialize()

  it 'should register a click on the trigger', ->
    spyOnEvent( @trigger, 'click' )
    @trigger.click()

    expect( 'click' ).toHaveBeenTriggeredOn( @trigger )

  it 'should hide the element when the trigger is clicked', ->
    @trigger.click()
    expect( @element ).not.toHaveClass( @hiddenClass )
