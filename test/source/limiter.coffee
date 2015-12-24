describe 'Spellbook.Services.limiter', ->

  before ->
    @fixture = new Fixture('
      <div class="limiter">
        <div class="js-limiter-element">
          <p>Element.</p>
        </div>
        <div class="js-limiter-element">
          <p>Element.</p>
        </div>
        <div class="js-limiter-element">
          <p>Element.</p>
        </div>
        <div class="js-limiter-element">
          <p>Element.</p>
        </div>
        <div class="js-limiter-element">
          <p>Element.</p>
        </div>

        <a href="#" class="js-limiter-toggle">Toggle</a>
      </div>
    ')

  beforeEach ->
    @container   = $( '.fixture--limiter' )
    @element     = $( '.js-limiter-element' )
    @toggle      = $( '.js-limiter-toggle' )
    @hiddenClass = 'is-hidden'

  it 'should do nothing if there are less items than the limit', ->
    Spellbook.Services.limiter
      limit : 6

    expect( @element ).not.to.have.class( @hiddenClass )

  it 'should hide the toggle if there are less items than the limit', ->
    Spellbook.Services.limiter
      limit : 6

    expect( @toggle ).not.to.exist

  it 'should add a hidden class to hide elements greater than the limit', ->
    Spellbook.Services.limiter
      limit : 4

    expect( $( '.js-limiter-element:nth-child( 5 )' ) ).to.have.class( @hiddenClass )

  it 'should trigger a click on the toggle', ->
    Spellbook.Services.limiter
      limit : 2

    spy = sinon.spy( @toggle, 'click' )

    @toggle.click()

    expect( spy ).to.be.called

  afterEach -> @fixture.cleanup()
