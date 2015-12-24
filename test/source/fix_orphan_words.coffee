describe 'Spellbook.Services.fixOrphanWords', ->

  before ->
    @fixture = new Fixture('
      <p class="js-orphan">This is a paragraph of words.</p>
    ')

  beforeEach ->
    @element = $( '.js-orphan' )

    Spellbook.Services.fixOrphanWords()

  it 'should add a non-breaking space', ->
    expect( @element.html() ).to.contain( '&nbsp;' )

  afterEach -> @fixture.cleanup()
