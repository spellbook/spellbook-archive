describe 'Spellbook.Services.contextMenu', ->
  beforeEach ->
    loadFixtures( 'context_menu.html' )

    @document    = $( document )
    @element     = $( '.js-contextMenu' )
    @activeClass = 'is-active'

    Spellbook.Services.contextMenu()

  it 'should trigger a contextmenu event on the document', ->
    spyOnEvent( @document, 'contextmenu' )
    @document.trigger( 'contextmenu' )

    expect( 'contextmenu' ).toHaveBeenTriggeredOn( @document )

  it 'should add an active class on the contextmenu event', ->
    @document.trigger( 'contextmenu' )

    expect( @element ).toHaveClass( @activeClass )

  it 'should trigger a click event on the document', ->
    spyOnEvent( @document, 'click' )
    @document.trigger( 'click' )

    expect( 'click' ).toHaveBeenTriggeredOn( @document )

  it 'should remove the active class when the document is clicked', ->
    @document.trigger( 'contextmenu' )
    @document.trigger( 'click' )

    expect( @element ).not.toHaveClass( @activeClass )

  it 'should apply inline CSS properties to the menu', ->
    @document.trigger( 'contextmenu' )

    expect( @element ).toHaveProp( 'style' )
