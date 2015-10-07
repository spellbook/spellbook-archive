describe 'Spellbook.Classes.Modal', ->
  beforeEach ->
    loadFixtures( 'modal.html' )

    @trigger     = $( '.js-modal-trigger' )
    @close       = $( '.js-modal-close' )
    @modal       = $( '#modal' )
    @backdrop    = $( '.modal-backdrop' )
    @activeClass = 'is-active'

    new Spellbook.Classes.Modal()

  it 'should trigger a click event when the link is clicked', ->
    spyOnEvent( @trigger, 'click' )
    @trigger.click()

    expect( 'click' ).toHaveBeenTriggeredOn( @trigger )

  it 'should open the modal when the trigger is clicked', ->
    @trigger.click()

    expect( @modal ).toHaveClass( @activeClass )

  it 'should inject a backdrop element into the page', ->
    @trigger.click()

    expect( @backdrop ).toBeInDOM()

  it 'should close the modal when the close button is clicked', ->
    @close.click()

    expect( @modal ).not.toHaveClass( @activeClass )

  it 'should close the modal when the backdrop is clicked', ->
    @backdrop.click()

    expect( @modal ).not.toHaveClass( @activeClass )
