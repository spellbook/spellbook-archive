describe 'Spellbook.Services.clickOut', ->

  beforeEach ->
    @document = $( document )
    @element  = $( '<div class="js-clickout"></div>' )

    Spellbook.Services.clickOut
      element  : @element
      callback : -> 'turtle'

  it 'should trigger a click event on the element', ->
    spy = sinon.spy( @element, 'click' )

    @element.click()

    expect( spy ).to.be.called

  it 'should trigger a click event on the document', ->
    spy = sinon.spy( @document, 'click' )

    @document.click()

    expect( spy ).to.be.called
