describe 'Spellbook.Classes.FormValidator', ->

  before ->
    @fixture = new Fixture('
      <form class="js-formValidator" action="">
        <input type="text" id="field1" class="js-formValidator-input" data-validate="required" />
        <input type="text" id="field2" class="js-formValidator-input" data-validate="required" />
        <input type="text" id="field3" class="js-formValidator-input" data-validate="required" />
        <input type="submit" id="submit" class="js-formValidator-submit" />
      </form>
    ')

  beforeEach ->
    @element    = $( '.js-formValidator' )
    @field1     = $( '#field1' )
    @field2     = $( '#field2' )
    @field3     = $( '#field3' )
    @submit     = $( '#submit' )
    @message    = $( '.js-formValidator-message' )
    @errorClass = 'is-invalid'

    new Spellbook.Classes.FormValidator

  xit 'should trigger a click event when the submit button is clicked', ->
    spy = sinon.spy( @submit, 'click' )

    @submit.click()

    expect( spy ).to.be.called

  it 'should trigger a keyup event on the inputs', ->
    spy1 = sinon.spy( @field1, 'keyup' )
    spy2 = sinon.spy( @field2, 'keyup' )
    spy3 = sinon.spy( @field3, 'keyup' )

    @field1.keyup()
    @field2.keyup()
    @field3.keyup()

    expect( spy1 ).to.be.called
    expect( spy2 ).to.be.called
    expect( spy3 ).to.be.called

  xit 'should set the inputs as invalid when left empty', ->
    spy = sinon.spy( @element, 'submit' )

    @element.submit()

    expect( @field1 ).to.have.class( @errorClass )
    expect( @field2 ).to.have.class( @errorClass )
    expect( @field3 ).to.have.class( @errorClass )

  xit 'should remove the error class on the input that is typed into', ->
    @field1.val( 'hello' ).keyup()
    @field2.keyup()
    @field3.keyup()

    expect( @field1 ).not.to.have.class( @errorClass )
    expect( @field2 ).to.have.class( @errorClass )
    expect( @field3 ).to.have.class( @errorClass )

  xit 'should show a message when there is an error', ->
    spy = sinon.spy( @submit, 'click' )

    @submit.click()

    expect( $( 'p' ).length ).to.equal( 3 )
    expect( $( 'p' ).first().text() ).to.equal( 'The field is required.' )

  afterEach -> @fixture.cleanup()
