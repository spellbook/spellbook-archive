describe 'Spellbook.SaveProgress', ->
  beforeEach ->
    loadFixtures( 'save_progress.html' )

    @element   = $( '.js-saveProgress' )
    @container = $( '.js-saveProgress-container' )
    @key       = @element.data( 'saveprogress' )
    @value     = 'string'

  it 'should save input element values to localStorage on input event', ->
    Spellbook.Modules.SaveProgress.init()

    @element.val( @value )
    @element.trigger( 'input' )

    expect( localStorage.getItem( @key ) ).toEqual( @element.val() )

  it 'should fill input elements with localStorage values when initialized', ->
    @element.val( '' )

    Spellbook.Modules.SaveProgress.init()

    expect( @element.val() ).toEqual( @value )

  it 'should remove container-specific localStorage items on form submission', ->
    Spellbook.Modules.SaveProgress.init()

    localStorage.setItem( @key, @value )
    localStorage.setItem( 'keep', 'me' )

    spyOnEvent( @container, 'submit' )
    @container.trigger( 'submit' )

    expect( localStorage.getItem( @key ) ).toEqual( null )
    expect( localStorage.getItem( 'keep' ) ).toEqual( 'me' )
