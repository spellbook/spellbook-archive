describe 'Spellbook.Services.focusFirstInput', ->
  beforeEach ->
    loadFixtures( 'focus_first_input.html' )

    @hiddenInput     = $( 'input[type="hidden"]' )
    @textInput       = $( 'input[type="text"]' )
    @textarea        = $( 'textarea' )
    @contenteditable = $( '[contenteditable]' )

  it 'should not focus the hidden input element', ->
    Spellbook.Services.focusFirstInput()

    expect( document.activeElement ).not.toBe( @hiddenInput[0] )

  it 'should focus the first text input element', ->
    Spellbook.Services.focusFirstInput()

    expect( document.activeElement ).toBe( @textInput[0] )

  it 'should focus the first textarea element', ->
    Spellbook.Services.focusFirstInput
      $element : $( '.js-focusFirstInput-2' )

    expect( document.activeElement ).toBe( @textarea[0] )

  it 'should focus the first contenteditable element', ->
    Spellbook.Services.focusFirstInput
      $element : $( '.js-focusFirstInput-3' )

    expect( document.activeElement ).toBe( @contenteditable[0] )
