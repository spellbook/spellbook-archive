describe 'Spellbook.share', ->
  beforeEach ->
    loadFixtures('share.html')

    @element = $('.js-share-service')
    @activeClass = 'is-active'

    Spellbook.share.init()

  it 'should trigger a click on the service element', ->
    spyOnEvent(@element, 'click')
    @element.click()

    expect('click').toHaveBeenTriggeredOn(@element)
