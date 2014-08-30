describe 'Spellbook.equalHeights', ->
  beforeEach ->
    @element = $('.js-equalHeight')

    Spellbook.equalHeights()

  it 'should set equal heights on the elements', ->
    expect(@element).toHaveCss({ height: '400px' })
