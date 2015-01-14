describe 'Spellbook.loader', ->
  beforeEach ->
    loadFixtures( 'loader.html' )

    @toggle       = $( '.js-loader-toggle' )
    @element      = $( '.js-loader-element' )
    @spinner      = 'span'
    @spinnerClass = 'loader'
    @overlay      = 'div'
    @overlayClass = 'loader-overlay'
    @loadingClass = 'is-loading'

    Spellbook.loader()

  it 'should register a click on the toggle', ->
    spyOnEvent( @toggle, 'click' )
    @toggle.click()

    expect( 'click' ).toHaveBeenTriggeredOn( @toggle )

  it 'should append the spinner element', ->
    @toggle.click()

    expect( @element ).toContainElement( @spinner )

  it 'should append the overlay element', ->
    @toggle.click()

    expect( @element ).toContainElement( @overlay )

  it 'should add the spinner class to the spinner element', ->
    @toggle.click()

    expect( @spinner ).toHaveClass( @spinnerClass )

  it 'should add the overlay class to the overlay element', ->
    @toggle.click()

    expect( @overlay ).toHaveClass( @overlayClass )

  it 'should add the loading class to the element', ->
    @toggle.click()

    expect( @element ).toHaveClass( @loadingClass )
