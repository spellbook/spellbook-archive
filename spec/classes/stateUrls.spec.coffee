describe 'Spellbook.Classes.StateUrls', ->
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
    new Spellbook.Classes.StateUrls()
    expect( $( '#section-03' ) ).toBeVisible()

  it 'should set the first section to active when no hash is present', ->
    new Spellbook.Classes.StateUrls()
    expect( $( '#section-01' ) ).toBeVisible()

  it 'should trigger a click on the link', ->
    new Spellbook.Classes.StateUrls()

    spyOnEvent( @link, 'click' )
    @link.click()

    expect( 'click' ).toHaveBeenTriggeredOn( @link )

  it 'should show the appropriate section when the link is clicked on', ->
    new Spellbook.Classes.StateUrls()

    @link.last().click()

    goto = @link.last().attr( 'href' )
    expect( $( goto ) ).toBeVisible()

  it 'should add an active class to the clicked link', ->
    new Spellbook.Classes.StateUrls()

    @link.first().click()

    expect( @link.first() ).toHaveClass( @activeClass )
