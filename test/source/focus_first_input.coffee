describe 'Spellbook.Services.focusFirstInput', ->

  before ->
    @fixture = new Fixture('
      <form action="" class="js-focusFirstInput">
        <input type="hidden" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </form>

      <form action="" class="js-focusFirstInput-2">
        <input type="hidden" />
        <textarea>Focus me!</textarea>
        <textarea>Focus me!</textarea>
        <textarea>Focus me!</textarea>
      </form>

      <form action="" class="js-focusFirstInput-3">
        <input type="hidden" />
        <p contenteditable>Focus me!</p>
        <p contenteditable>Focus me!</p>
        <p contenteditable>Focus me!</p>
      </form>
    ')

  beforeEach ->
    @hiddenInput     = $( 'input[type="hidden"]' )
    @textInput       = $( 'input[type="text"]' )
    @textarea        = $( 'textarea' )
    @contenteditable = $( '[contenteditable]' )

  it 'should not focus the hidden input element', ->
    Spellbook.Services.focusFirstInput()

    expect( $( ':focus' ) ).to.not.match( @hiddenInput[0] )

  xit 'should focus the first text input element', ->
    Spellbook.Services.focusFirstInput()

    expect( $( ':focus' ) ).to.match( @textInput[0] )

  xit 'should focus the first textarea element', ->
    Spellbook.Services.focusFirstInput
      $element : $( '.js-focusFirstInput-2' )

    expect( $( ':focus' ) ).to.match( @textarea[0] )

  xit 'should focus the first contenteditable element', ->
    Spellbook.Services.focusFirstInput
      $element : $( '.js-focusFirstInput-3' )

    expect( $( ':focus' ) ).to.match( @contenteditable[0] )

  afterEach -> @fixture.cleanup()
