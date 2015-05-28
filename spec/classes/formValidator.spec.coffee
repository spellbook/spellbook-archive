describe 'Spellbook.Classes.FormValidator', ->
  beforeEach ->
    loadFixtures( 'form_validator.html' )

    @field1     = $( '#field1' )
    @field2     = $( '#field2' )
    @field3     = $( '#field3' )
    @submit     = $( '#submit' )
    @message    = $( '.js-formValidator-message' )
    @errorClass = 'is-invalid'

    new Spellbook.Classes.FormValidator()

  it 'should trigger a click event when the submit button is clicked', ->
    spyOnEvent( @submit, 'click' )
    @submit.click()

    expect( 'click' ).toHaveBeenTriggeredOn( @submit )

  it 'should trigger a keyup event on the inputs', ->
    spyOnEvent( @field1, 'keyup' )
    spyOnEvent( @field2, 'keyup' )
    spyOnEvent( @field3, 'keyup' )

    @field1.trigger( 'keyup' )
    @field2.trigger( 'keyup' )
    @field3.trigger( 'keyup' )

    expect( 'keyup' ).toHaveBeenTriggeredOn( @field1 )
    expect( 'keyup' ).toHaveBeenTriggeredOn( @field2 )
    expect( 'keyup' ).toHaveBeenTriggeredOn( @field3 )

  it 'should set the inputs as invalid when left empty', ->
    @submit.click()

    expect( @field1 ).toHaveClass( @errorClass )
    expect( @field2 ).toHaveClass( @errorClass )
    expect( @field3 ).toHaveClass( @errorClass )

  it 'should remove the error class on the input that is typed into', ->
    @field1.val( 'hello' ).trigger( 'keyup' )
    @field2.trigger( 'keyup' )
    @field3.trigger( 'keyup' )

    expect( @field1 ).not.toHaveClass( @errorClass )
    expect( @field2 ).toHaveClass( @errorClass )
    expect( @field3 ).toHaveClass( @errorClass )

  it 'should show a message when there is an error', ->
    @submit.click()

    expect( $( 'p' ).length ).toBe( 3 )
    expect( $( 'p' ).first().text() ).toBe( 'The field is required.' )
