describe 'Spellbook.Services.formPreview', ->

  before ->
    @fixture = new Fixture('
      <form action="">
        <input class="js-formPreview-input" type="text" data-preview="1" />
        <input class="js-formPreview-input" type="text" data-preview="2" />
        <input class="js-formPreview-input" type="text" data-preview="3" />
      </form>

      <div id="formPreview">
        <h1 id="formPreview-1"></h1>
        <h3 id="formPreview-2"></h3>
        <p id="formPreview-3"></p>
      </div>
    ')

  beforeEach ->
    @element = $( '.js-formPreview-input' )
    @idName  = 'formPreview'

    Spellbook.Services.formPreview()

  it 'should trigger a keyup event when the input is typed in', ->
    spy = sinon.spy( @element, 'keyup' )

    @element.keyup()

    expect( spy ).to.be.called

  it 'should show the first input value in the associated HTML element', ->
    element = $( '.js-formPreview-input[data-preview="1"]' )
    tag     = $( '#formPreview-1' )
    string  = 'Hello, friend!'

    element.val( string )
    element.keyup()

    expect( tag.text() ).to.equal( string )

  it 'should show the second input value in the associated HTML element', ->
    element = $( '.js-formPreview-input[data-preview="2"]' )
    tag     = $( '#formPreview-2' )
    string  = 'Hello, friend!'

    element.val( string )
    element.keyup()

    expect( tag.text() ).to.equal( string )

  it 'should show the third input value in the associated HTML element', ->
    element = $( '.js-formPreview-input[data-preview="3"]' )
    tag     = $( '#formPreview-3' )
    string  = 'Hello, friend!'

    element.val( string )
    element.keyup()

    expect( tag.text() ).to.equal( string )

  afterEach -> @fixture.cleanup()
