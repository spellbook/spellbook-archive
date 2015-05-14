describe 'Spellbook.Modules.CharacterCounter', ->
  beforeEach ->
    loadFixtures( 'character_counter.html' )

    @element      = $( '.js-characterCounter' )
    @label        = $( '.js-characterCounter-label' )
    @number       = $( '.js-characterCounter-number' )
    @errorClass   = 'is-error'
    @successClass = 'is-success'

    Spellbook.Modules.CharacterCounter.init()

  it 'should initialize with a zero character count', ->
    expect( @label ).toContainText( '0' )

  it 'should change character count based on the typed string', ->
    @element.val( 'This is some text here.' )

    expect( @number ).toContainText( @element.text().length )

  it 'should add an error class when the max is exceeded', ->
    @element.val( "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." )
    @element.trigger( 'keyup' )

    expect( @element ).toHaveClass( @errorClass )
    expect( @label ).toHaveClass( @errorClass )

  it 'should add an error class when the min is not met', ->
    Spellbook.Modules.CharacterCounter.init
      minChars : 100

    @element.val( 'This is some text here.' )
    @element.trigger( 'keyup' )

    expect( @element ).toHaveClass( @errorClass )
    expect( @label ).toHaveClass( @errorClass )

  it 'should add a success class when conditions are met', ->
    Spellbook.Modules.CharacterCounter.init
      minChars : 10
      maxChars : 20

    @element.val( 'Hello, friend!' )
    @element.trigger( 'keyup' )

    expect( @element ).toHaveClass( @successClass )
    expect( @label ).toHaveClass( @successClass )
