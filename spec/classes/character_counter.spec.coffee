describe 'Spellbook.Classes.CharacterCounter', ->
  beforeEach ->
    loadFixtures( 'character_counter.html' )

    @element      = $( '.js-characterCounter' )
    @label        = $( '.js-characterCounter-label' )
    @number       = $( '.js-characterCounter-number' )
    @classError   = 'is-error'
    @classSuccess = 'is-success'

    new Spellbook.Classes.CharacterCounter()

  it 'should initialize with a zero character count', ->
    expect( @label ).toContainText( '0' )

  it 'should change character count based on the typed string', ->
    @element.val( 'This is some text here.' )

    expect( @number ).toContainText( @element.text().length )

  it 'should add an error class when the max is exceeded', ->
    @element.val( "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." )
    @element.trigger( 'keyup' )

    expect( @element ).toHaveClass( @classError )
    expect( @label ).toHaveClass( @classError )

  it 'should add an error class when the min is not met', ->
    new Spellbook.Classes.CharacterCounter
      charsMin : 100

    @element.val( 'This is some text here.' )
    @element.trigger( 'keyup' )

    expect( @element ).toHaveClass( @classError )
    expect( @label ).toHaveClass( @classError )

  it 'should add a success class when conditions are met', ->
    new Spellbook.Classes.CharacterCounter
      charsMin : 10
      charsMax : 20

    @element.val( 'Hello, friend!' )
    @element.trigger( 'keyup' )

    expect( @element ).toHaveClass( @classSuccess )
    expect( @label ).toHaveClass( @classSuccess )
