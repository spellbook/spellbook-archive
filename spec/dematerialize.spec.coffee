describe 'Spellbook.dematerialize', ->
  beforeEach ->
    loadFixtures('dematerialize.html')

    @element = $('.js-dematerialize-element')
    @trigger = $('.js-dematerialize-trigger')
    @itemTitle = 'hidden_element'
    @hiddenClass = 'is-hidden'

    Spellbook.dematerialize.init()

  afterEach ->
    localStorage.removeItem(@itemTitle)

  it 'should not be hidden by default', ->
    expect(@element).not.toHaveClass(@hiddenClass)

  it 'should register a click on the trigger', ->
    spyOnEvent(@trigger, 'click')
    @trigger.click()

    expect('click').toHaveBeenTriggeredOn(@trigger)

  it 'should hide the element when the trigger is clicked', ->
    @trigger.click()
    expect(@element).toHaveClass(@hiddenClass)

