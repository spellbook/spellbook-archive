describe 'Spellbook.limiter', ->
  beforeEach ->
    loadFixtures('limiter.html')

    @container = $('.fixture--limiter')
    @elements = $('.js-limiter-element')
    @toggle = $('.js-limiter-toggle')
    @hiddenClass = 'is-hidden'

    Spellbook.limiter()

  afterEach ->
    @elements.removeClass('is-hidden')
    @toggle.appendTo(@container)

  it 'should do nothing if there are less items than the limit', ->
    Spellbook.limiter
      limit: 6

    expect(@elements).not.toHaveClass(@hiddenClass)

  it 'should hide the toggle if there are less items than the limit', ->
    Spellbook.limiter
      limit: 6

    expect(@toggle).toBeHidden()

  it 'should add a hidden class to hide elements greater than the limit', ->
    Spellbook.limiter
      limit: 4

    expect('.js-limiter-element:nth-child(5)').toHaveClass(@hiddenClass)

  it 'should trigger a click on the toggle', ->
    Spellbook.limiter
      limit: 2

    spyOnEvent(@toggle, 'click')
    @toggle.click()

    expect('click').toHaveBeenTriggeredOn(@toggle)

