describe 'Spellbook.Modules.StateUrls', ->
  beforeEach ->
    loadFixtures( 'state_urls.html' )

    @element     = $( '.js-stateUrls' )
    @link        = $( '.js-stateUrls-link' )
    @hiddenClass = 'is-hidden'
    @activeClass = 'is-active'

  afterEach ->
    @link.removeClass( @activeClass )
    @element.removeClass( @hiddenClass )
    window.location.hash = ''

  it 'should set the state to the window hash, if present', ->
    window.location.hash = '#section-03'
    Spellbook.Modules.StateUrls.init()
    expect( $( '#section-03' ) ).toBeVisible()

  it 'should set the first section to active when no hash is present', ->
    Spellbook.Modules.StateUrls.init()
    expect( $( '#section-01' ) ).toBeVisible()

  it 'should trigger a click on the link', ->
    Spellbook.Modules.StateUrls.init()

    spyOnEvent( @link, 'click' )
    @link.click()

    expect( 'click' ).toHaveBeenTriggeredOn( @link )

  it 'should show the appropriate section when the link is clicked on', ->
    Spellbook.Modules.StateUrls.init()

    @link.last().click()

    goto = @link.last().attr( 'href' )
    expect( $( goto ) ).toBeVisible()

  it 'should add an active class to the clicked link', ->
    Spellbook.Modules.StateUrls.init()

    @link.first().click()

    expect( @link.first() ).toHaveClass( @activeClass )
