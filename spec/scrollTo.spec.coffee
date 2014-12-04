describe 'Spellbook.scrollTo', ->
  beforeEach ->
    loadFixtures('scroll_to.html')

    @element  = $('.js-scrollTo')
    @document = $('body, html')
    @to       = $(@element.attr('href'))

    Spellbook.scrollTo()

  it 'should trigger a click event on the element', ->
    spyOnEvent(@element, 'click')
    @element.click()

    expect('click').toHaveBeenTriggeredOn(@element)

