describe 'Spellbook.AutoDuplicateInput', ->
  beforeEach ->
    loadFixtures( 'auto_duplicate_input.html' )

    @selector              = '.js-autoDuplicateInput'
    @element               = $( @selector )
    @container             = $( '.js-autoDuplicateInput-container' )
    @clonedDataAttribute   = 'cloned'
    @validateDataAttribute = 'validate'
    @invalidClass          = 'is-invalid'
    @validClass            = 'is-valid'

    @adi = Spellbook.AutoDuplicateInput
    @adi.init()

  it 'should register a keyup event on the input', ->
    spyOnEvent( @element, 'keyup' )
    @element.trigger( 'keyup' )

    expect( 'keyup' ).toHaveBeenTriggeredOn( @element )

  it 'should mark the input as invalid and give the appropriate class', ->
    @element.val( 'thisisapartialemail' )
    @element.trigger( 'keyup' )

    expect( @element ).toHaveClass( @invalidClass )

  it 'should mark the input as valid and give the appropriate class', ->
    @element.val( 'email@example.com' )
    @element.trigger( 'keyup' )

    expect( @element ).toHaveClass( @validClass )

  it 'should duplicate the input when a valid string is provided', ->
    @element.val( 'email@example.com' )
    @element.trigger( 'keyup' )

    expect( $( @selector ).length ).toEqual( 2 )

  it 'should keep a count of valid fields', ->
    @element.val('email@example.com')
    @element.trigger( 'keyup' )

    expect( @adi.getCount() ).toEqual( 3 )
