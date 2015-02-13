describe 'Spellbook.QuantityInput', ->
  beforeEach ->
    loadFixtures( 'quantity-input.html' )

    @element         = $( '.js-quantityInput' )
    @field           = $( '.js-quantityInput-field' )
    @increase        = $( '.js-quantityInput-increase' )
    @decrease        = $( '.js-quantityInput-decrease' )
    @target          = $( '.js-quantityInput-target' )
    @targetBaseValue = 29
    @minValue        = 1
    @maxValue        = 100

    Spellbook.QuantityInput.init()

  it 'should register a click event on the increase button', ->
    spyOnEvent( @increase, 'click' )
    @increase.click()

    expect( 'click' ).toHaveBeenTriggeredOn( @increase )

  it 'should register a click event on the decrease button', ->
    spyOnEvent( @decrease, 'click' )
    @decrease.click()

    expect( 'click' ).toHaveBeenTriggeredOn( @decrease )

  it 'should register a change event on the input', ->
    spyOnEvent( @element, 'change' )
    @element.trigger( 'change' )

    expect( 'change' ).toHaveBeenTriggeredOn( @element )

  it 'should increase the input value when the increase link is clicked', ->
    startValue = parseInt( @element.val() )

    @increase.click()

    newValue = parseInt( @element.val() )

    expect( newValue ).toEqual( startValue + 1 )

  it 'should decrease the input value when the decrease link is clicked', ->
    @element.attr( 'value', '2' )

    console.log @element.val()

    startValue = parseInt( @element.val() )

    @increase.click()
    @decrease.click()

    newValue = parseInt( @element.val() )

    expect( newValue ).toEqual( startValue - 1 )

  it 'should update the target value when the increase link is clicked', ->
    @increase.click()

    newTargetValue = parseInt( @element.val() ) * @targetBaseValue

    expect( newTargetValue ).toEqual( @targetBaseValue * 2 )

  it 'should update the target value when the decrease link is clicked', ->
    @increase.click()
    @increase.click()
    @decrease.click()

    newTargetValue = parseInt( @element.val() ) * @targetBaseValue

    expect( newTargetValue ).toEqual( @targetBaseValue * 2 )

  it 'should update the target value when the input is changed', ->
    @element.attr( 'value', '2' )
    @element.trigger( 'change' )

    newTargetValue = parseInt( @element.val() ) * @targetBaseValue

    expect( newTargetValue ).toEqual( @targetBaseValue * 2 )

  it 'should not go below the specified minimun value', ->
    @element.attr( 'value', @minValue )

    @decrease.click()

    newValue = parseInt( @element.val() )

    expect( newValue ).toEqual( @minValue )

  it 'should not go above the specified maximum value', ->
    @element.attr( 'value', @maxValue )

    @decrease.click()

    newValue = parseInt( @element.val() )

    expect( newValue ).toEqual( @maxValue )
