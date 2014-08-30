describe 'Spellbook.equalHeights', ->
  beforeEach ->
    loadFixtures('equal_heights.html')

    @element = $('.js-equalHeight')

    Spellbook.equalHeights()

  it 'should set equal heights on the elements', ->
    expect(@element).toHaveCss({ height: '222px' })
