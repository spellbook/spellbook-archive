describe 'Spellbook.Classes.QuantityInput', ->

  before ->
    @fixture = new Fixture('
      <h1>
        <span class="js-quantityInput-target">$29</span>
        <b>Per Month</b>
      </h1>
      <form action="">
        <fieldset class="js-quantityInput-field">
          <a class="js-quantityInput-decrease" href="#">Decrease</a>
          <input class="js-quantityInput" type="text" value="1">
          <a class="js-quantityInput-increase" href="#">Increase</a>
        </fieldset>
      </form>
    ')

  beforeEach ->
    @element         = $( '.js-quantityInput' )
    @field           = $( '.js-quantityInput-field' )
    @increase        = $( '.js-quantityInput-increase' )
    @decrease        = $( '.js-quantityInput-decrease' )
    @target          = $( '.js-quantityInput-target' )
    @targetBaseValue = 29
    @minValue        = 1
    @maxValue        = 100

    new Spellbook.Classes.QuantityInput

  it 'should register a click event on the increase button', ->
    spy = sinon.spy( @increase, 'click' )

    @increase.click()

    expect( spy ).to.be.called

  it 'should register a click event on the decrease button', ->
    spy = sinon.spy( @decrease, 'click' )

    @decrease.click()

    expect( spy ).to.be.called

  it 'should register a change event on the input', ->
    spy = sinon.spy( @element, 'change' )

    @element.change()

    expect( spy ).to.be.called

  xit 'should increase the input value when the increase link is clicked', ->
    startValue = parseInt( @element.val() )

    @increase.click()

    newValue = parseInt( @element.val() )

    expect( newValue ).to.equal( startValue + 1 )

  xit 'should decrease the input value when the decrease link is clicked', ->
    @element.attr( 'value', '2' )

    startValue = parseInt( @element.val() )

    @increase.click()
    @decrease.click()

    newValue = parseInt( @element.val() )

    expect( newValue ).to.equal( startValue - 1 )

  xit 'should update the target value when the increase link is clicked', ->
    @increase.click()

    newTargetValue = parseInt( @element.val() ) * @targetBaseValue

    expect( newTargetValue ).to.equal( @targetBaseValue * 2 )

  xit 'should update the target value when the decrease link is clicked', ->
    @increase.click()
    @increase.click()
    @decrease.click()

    newTargetValue = parseInt( @element.val() ) * @targetBaseValue

    expect( newTargetValue ).to.equal( @targetBaseValue * 2 )

  it 'should update the target value when the input is changed', ->
    @element.attr( 'value', '2' )
    @element.trigger( 'change' )

    newTargetValue = parseInt( @element.val() ) * @targetBaseValue

    expect( newTargetValue ).to.equal( @targetBaseValue * 2 )

  it 'should not go below the specified minimun value', ->
    @element.attr( 'value', @minValue )

    @decrease.click()

    newValue = parseInt( @element.val() )

    expect( newValue ).to.equal( @minValue )

  it 'should not go above the specified maximum value', ->
    @element.attr( 'value', @maxValue )

    @decrease.click()

    newValue = parseInt( @element.val() )

    expect( newValue ).to.equal( @maxValue )

  afterEach -> @fixture.cleanup()
