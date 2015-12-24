describe 'Spellbook.Classes.AutoDuplicateInput', ->

  before ->
    @fixture = new Fixture('
      <form action="">
        <field class="set js-autoDuplicateInput-container">
          <input class="js-autoDuplicateInput" data-validate="email" placeholder="email@example.com" required type="email" />
        </field>
      </form>
    ')

  beforeEach ->
    @classInvalid          = 'is-invalid'
    @classValid            = 'is-valid'
    @clonedDataAttribute   = 'cloned'
    @container             = $( '.js-autoDuplicateInput-container' )
    @selector              = '.js-autoDuplicateInput'
    @element               = $( @selector )
    @validateDataAttribute = 'validate'

    @adi = new Spellbook.Classes.AutoDuplicateInput

  it 'should register a keyup event on the input', ->
    spy = sinon.spy( @element, 'keyup' )

    @element.keyup()

    expect( spy ).to.be.called

  xit 'should mark the input as invalid and give the appropriate class', ->
    @element.val( 'thisisapartialemail' )
    @element.keyup()

    expect( @element ).to.have.class( @classInvalid )

  xit 'should mark the input as valid and give the appropriate class', ->
    @element.val( 'email@example.com' )
    @element.keyup()

    expect( @element ).to.have.class( @classValid )

  xit 'should duplicate the input when a valid string is provided', ->
    @element.val( 'email@example.com' )
    @element.keyup()

    expect( $( @selector ).length ).to.equal( 2 )

  xit 'should keep a count of valid fields', ->
    @element.val( 'email@example.com' )
    @element.keyup()

    expect( @adi.getCount() ).to.equal( 1 )

  afterEach -> @fixture.cleanup()
