describe 'Spellbook.Services.contextMenu', ->

  before ->
    @fixture = new Fixture('
      <div class="js-contextMenu">
        <p>This is my menu!</p>
      </div>
    ')

  beforeEach ->
    @document    = $( document )
    @element     = $( '.js-contextMenu' )
    @classActive = 'is-active'

    Spellbook.Services.contextMenu()

  it 'should trigger a contextmenu event on the document', ->
    spy = sinon.spy( @document, 'click' )

    @document.click()

    expect( spy ).to.be.called

  it 'should add an active class on the contextmenu event', ->
    @document.trigger( 'contextmenu' )

    expect( @element ).to.have.class( @classActive )

  it 'should trigger a click event on the document', ->
    spy = sinon.spy( @document, 'click' )

    @document.click()

    expect( spy ).to.be.called

  it 'should remove the active class when the document is clicked', ->
    @document.trigger( 'contextmenu' )
    @document.trigger( 'click' )

    expect( @element ).to.not.have.class( @classActive )

  it 'should apply inline CSS properties to the menu', ->
    @document.trigger( 'contextmenu' )

    expect( @element ).to.have.prop( 'style' )

  afterEach -> @fixture.cleanup()
