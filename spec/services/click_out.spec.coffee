describe 'Spellbook.Services.clickOut', ->
  beforeEach ->
    @document = $( document )
    @element  = $( '<div class="js-clickout"></div>' )

    Spellbook.Services.clickOut
      element  : @element
      callback : -> 'turtle'

  it 'should trigger a click event on the element', ->
    spyOnEvent( @element, 'click' )
    @element.click()

    expect( 'click' ).toHaveBeenTriggeredOn( @element )

  it 'should trigger a click event on the document', ->
    spyOnEvent( @document, 'click' )
    @document.click()

    expect( 'click' ).toHaveBeenTriggeredOn( @document )
