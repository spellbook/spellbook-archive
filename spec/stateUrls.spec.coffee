describe 'Spellbook.stateUrls', ->
  beforeEach ->
    loadFixtures('state_urls.html')

    @link = $('.js-stateUrls-link')
    @section = $('.js-stateUrls-section')
    @hiddenClass = 'is-hidden'
    @activeClass = 'is-active'

  afterEach ->
    @link.removeClass(@activeClass)
    @section.removeClass(@hiddenClass)
    window.location.hash = ''

  it 'should set the state to the window hash, if present', ->
    window.location.hash = '#section-03'
    Spellbook.stateUrls.init()
    expect($('#section-03')).toBeVisible()

  it 'should set the first section to active when no hash is present', ->
    Spellbook.stateUrls.init()
    expect($('#section-01')).toBeVisible()

  it 'should trigger a click on the link', ->
    Spellbook.stateUrls.init()

    spyOnEvent(@link, 'click')
    @link.click()

    expect('click').toHaveBeenTriggeredOn(@link)

  it 'should show the appropriate section when the link is clicked on', ->
    Spellbook.stateUrls.init()

    @link.last().trigger('click')

    goto = @link.last().attr('href')
    expect($(goto)).toBeVisible()

  it 'should add an active class to the clicked link', ->
    Spellbook.stateUrls.init()

    @link.first().trigger('click')

    expect(@link.first()).toHaveClass(@activeClass)

