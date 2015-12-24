describe 'Spellbook.Services.prefixClasses', ->

  before ->
    @fixture = new Fixture('
      <div class="js-prefixClasses">
        <p class="first">First</p>
        <p class="second">Second</p>
      </div>
    ')

  beforeEach ->
    @element     = $( '.js-prefixClasses' )
    @firstChild  = @element.find( '.first' )
    @secondChild = @element.find( '.second' )

  it "should prepend a string to the matched elements' classes", ->
    Spellbook.Services.prefixClasses()

    expect( @firstChild ).to.have.class( 'prefix-first' )
    expect( @secondChild ).to.have.class( 'prefix-second' )

  xit "should not prepend a string to the unmatched elements' classes", ->
    Spellbook.Services.prefixClasses
      query : '.second'

    expect( @firstChild ).to.have.class( 'first' )
    expect( @secondChild ).to.have.class( 'prefix-second' )

  xit "should prepend a custom string to the matched elements' classes", ->
    Spellbook.Services.prefixClasses
      prefix : 'custom'

    expect( @firstChild ).to.have.class( 'custom-first' )
    expect( @secondChild ).to.have.class( 'custom-second' )

  afterEach -> @fixture.cleanup()
