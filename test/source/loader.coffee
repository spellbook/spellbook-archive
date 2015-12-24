describe 'Spellbook.Services.loader', ->

  before ->
    @fixture = new Fixture('
      <a href="#" class="js-loader-toggle">Toggle</a>

      <div id="element" class="js-loader-element">
        <p>This is an element.</p>
      </div>
    ')

  beforeEach ->
    @classLoading = 'is-loading'
    @classOverlay = 'loader-overlay'
    @classSpinner = 'loader'
    @element      = $( '.js-loader-element' )
    @overlay      = 'div'
    @spinner      = 'span'
    @toggle       = $( '.js-loader-toggle' )

    Spellbook.Services.loader()

  it 'should register a click on the toggle', ->
    spy = sinon.spy( @toggle, 'click' )

    @toggle.click()

    expect( spy ).to.be.called

  it 'should append the spinner element', ->
    @toggle.click()

    expect( @element.html() ).to.contain( @spinner )

  it 'should append the overlay element', ->
    @toggle.click()

    expect( @element.html() ).to.contain( @overlay )

  it 'should add the spinner class to the spinner element', ->
    @toggle.click()

    expect( @element.find( @spinner ) ).to.have.class( @classSpinner )

  it 'should add the overlay class to the overlay element', ->
    @toggle.click()

    expect( @element.find( @overlay ) ).to.have.class( @classOverlay )

  it 'should add the loading class to the element', ->
    @toggle.click()

    expect( @element ).to.have.class( @classLoading )
