describe 'Spellbook.filter', ->
  beforeEach ->
    loadFixtures('filter.html')

    @link =  $('.js-filter-link')
    @item =  $('.js-filter-item')
    @activeClass = 'is-active'
    @hiddenClass = 'is-hidden'

    Spellbook.filter()

  it 'should trigger a click on the filter link', ->
    spyOnEvent(@link, 'click')
    @link.click()

    expect('click').toHaveBeenTriggeredOn(@link)

  it 'should add an active class to the clicked link', ->
    @link.first().click()

    expect( @link.first() ).toHaveClass(@activeClass)

  it 'should remove the active class from all other links', ->
    @link.first().click()

    expect( @link.not( @link.first() ) ).not.toHaveClass(@activeClass)

  it 'should show the first set when the first set link is clicked', ->
    firstSet = $('.set-01')

    @link.click()

    expect(firstSet).not.toHaveClass(@hiddenClass)

  it 'should show the second set when the second set link is clicked', ->
    secondSet = $('.set-02')

    @link.click()

    expect(secondSet).not.toHaveClass(@hiddenClass)

  it 'should show all elements when the all link is clicked', ->
    @link.click()

    expect(@item).not.toHaveClass(@hiddenClass)
