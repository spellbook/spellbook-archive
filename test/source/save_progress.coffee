describe 'Spellbook.Classes.SaveProgress', ->

  before ->
    @fixture = new Fixture('
      <div class="js-saveProgress-container">
        <input type="text" name="" class="js-saveProgress" data-saveprogress="key" >
      </div>
    ')

  beforeEach ->
    @element   = $( '.js-saveProgress' )
    @container = $( '.js-saveProgress-container' )
    @key       = @element.data( 'saveprogress' )
    @value     = 'string'

  it 'should save input element values to localStorage on input event', ->
    new Spellbook.Classes.SaveProgress

    @element.val( @value )
    @element.trigger( 'input' )

    expect( localStorage.getItem( @key ) ).to.equal( @element.val() )

  xit 'should fill input elements with localStorage values when initialized', ->
    @element.val( '' )

    new Spellbook.Classes.SaveProgress

    expect( @element.val() ).to.equal( @value )

  xit 'should remove container-specific localStorage items on form submission', ->
    new Spellbook.Classes.SaveProgress

    localStorage.setItem( @key, @value )
    localStorage.setItem( 'keep', 'me' )

    sinon.spy( @container, 'submit' )
    @container.submit()

    expect( localStorage.getItem( @key ) ).to.equal( null )
    expect( localStorage.getItem( 'keep' ) ).to.equal( 'me' )

  afterEach -> @fixture.cleanup()
