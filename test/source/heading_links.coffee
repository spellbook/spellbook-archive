describe 'Spellbook.Classes.HeadingLinks', ->

  before ->
    @fixture = new Fixture('
      <div class="js-headingLinks">
        <h1>This is a heading</h1>
        <h2>This is another heading</h2>
        <h3>And another</h3>
        <h4>And yet another</h4>
      </div>
    ')

  beforeEach ->
    @element      = $( '.js-headingLinks' )
    @firstHeading = @element.find( 'h1' )
    @headings     = @element.find( 'h1, h2, h3, h4' )

    new Spellbook.Classes.HeadingLinks
      headings : @headings

  xit 'should slugify the heading string as an ID', ->
    @headings.find( 'a' )

    expect( @firstHeading.attr( 'id' ) ).to.equal( 'this-is-a-heading' )

  it 'should have an anchor link prepended to the heading', ->
    expect( @headings ).to.contain( 'a' )

  xit 'should apply the correct class to the heading link', ->
    expect( @headings.find( 'a' ) ).to.have.class( 'anchor' )

  afterEach -> @fixture.cleanup()
