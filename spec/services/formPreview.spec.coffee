describe 'Spellbook.Services.formPreview', ->
  beforeEach ->
    loadFixtures( 'form_preview.html' )

    @element = $( '.js-formPreview-input' )
    @idName  = 'formPreview'

    Spellbook.Services.formPreview()

  it 'should trigger a keyup event when the input is typed in', ->
    spyOnEvent( @element, 'keyup' )
    @element.trigger( 'keyup' )

    expect( 'keyup' ).toHaveBeenTriggeredOn( @element )

  it 'should show the first input value in the associated HTML element', ->
    element = $( '.js-formPreview-input[data-preview="1"]' )
    tag     = $( '#formPreview-1' )
    string  = 'Hello, friend!'

    element.val( string )
    element.trigger( 'keyup' )

    expect( tag ).toContainText( string )

  it 'should show the second input value in the associated HTML element', ->
    element = $( '.js-formPreview-input[data-preview="2"]' )
    tag     = $( '#formPreview-2' )
    string  = 'Hello, friend!'

    element.val( string )
    element.trigger( 'keyup' )

    expect( tag ).toContainText( string )

  it 'should show the third input value in the associated HTML element', ->
    element = $( '.js-formPreview-input[data-preview="3"]' )
    tag     = $( '#formPreview-3' )
    string  = 'Hello, friend!'

    element.val( string )
    element.trigger( 'keyup' )

    expect( tag ).toContainText( string )
