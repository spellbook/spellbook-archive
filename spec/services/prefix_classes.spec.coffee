describe 'Spellbook.Services.prefixClasses', ->
  beforeEach ->
    loadFixtures( 'prefix_classes.html' )

    @element     = $( '.js-prefixClasses' )
    @firstChild  = @element.find( '.first' )
    @secondChild = @element.find( '.second' )

  it "should prepend a string the matched elements' classes", ->
    Spellbook.Services.prefixClasses()

    expect( @firstChild ).toHaveClass( 'prefix-first' )
    expect( @secondChild ).toHaveClass( 'prefix-second' )

  it "should not prepend a string to the unmatched elements' classes", ->
    Spellbook.Services.prefixClasses
      query : '.second'

    expect( @firstChild ).toHaveClass( 'first' )
    expect( @secondChild ).toHaveClass( 'prefix-second' )

  it "should prepend a custom string to the matched elements' classes", ->
    Spellbook.Services.prefixClasses
      prefix : 'custom'

    expect( @firstChild ).toHaveClass( 'custom-first' )
    expect( @secondChild ).toHaveClass( 'custom-second' )
