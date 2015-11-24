describe 'Spellbook.Classes.SaveProgress', ->
  beforeEach ->
    loadFixtures( 'save_progress.html' )

    @element   = $( '.js-saveProgress' )
    @container = $( '.js-saveProgress-container' )
    @key       = @element.data( 'saveprogress' )
    @value     = 'string'

  it 'should save input element values to localStorage on input event', ->
    new Spellbook.Classes.SaveProgress()

    @element.val( @value )
    @element.trigger( 'input' )

    expect( localStorage.getItem( @key ) ).toEqual( @element.val() )

  it 'should fill input elements with localStorage values when initialized', ->
    @element.val( '' )

    new Spellbook.Classes.SaveProgress()

    expect( @element.val() ).toEqual( @value )

  it 'should remove container-specific localStorage items on form submission', ->
    new Spellbook.Classes.SaveProgress()

    localStorage.setItem( @key, @value )
    localStorage.setItem( 'keep', 'me' )

    spyOnEvent( @container, 'submit' )
    @container.trigger( 'submit' )

    expect( localStorage.getItem( @key ) ).toEqual( null )
    expect( localStorage.getItem( 'keep' ) ).toEqual( 'me' )
