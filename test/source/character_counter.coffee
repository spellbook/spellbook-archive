describe 'Spellbook.Classes.CharacterCounter', ->

  before ->
    @fixture = new Fixture('
      <form action="">
        <textarea class="js-characterCounter"></textarea>
        <p class="js-characterCounter-label">
          <span class="js-characterCounter-number">0</span>
          Characters
        </p>
      </form>
    ')

  beforeEach ->
    @element      = $( '.js-characterCounter' )
    @label        = $( '.js-characterCounter-label' )
    @number       = $( '.js-characterCounter-number' )
    @classError   = 'is-error'
    @classSuccess = 'is-success'

    new Spellbook.Classes.CharacterCounter()

  it 'should initialize with a zero character count', ->
    expect( @label ).to.contain( '0' )

  it 'should change character count based on the typed string', ->
    @element.val( 'This is some text here.' )

    expect( @number ).to.contain( @element.text().length )

  xit 'should add an error class when the max is exceeded', ->
    @element.val( "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." )
    @element.keyup()

    expect( @element ).to.have.class( @classError )
    expect( @label ).to.have.class( @classError )

  xit 'should add an error class when the min is not met', ->
    new Spellbook.Classes.CharacterCounter
      minChars : 100

    @element.val( 'This is some text here.' )
    @element.keyup()

    expect( @element ).to.have.class( @classError )
    expect( @label ).to.have.class( @classError )

  xit 'should add a success class when conditions are met', ->
    new Spellbook.Classes.CharacterCounter
      minChars : 10
      maxChars : 20

    @element.val( 'Hello, friend!' )
    @element.keyup()

    expect( @element ).to.have.class( @classSuccess )
    expect( @label ).to.have.class( @classSuccess )

  afterEach -> @fixture.cleanup()
