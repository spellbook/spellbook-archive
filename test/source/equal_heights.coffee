describe 'Spellbook.Classes.EqualHeights', ->

  before ->
    @fixture = new Fixture('
      <div class="js-equalHeights">
        <h1>This is a heading.</h1>
      </div>
      <div class="js-equalHeights">
        <p>This is some paragraph text that is going to make this element taller than the other one.</p>
        <p>This is some paragraph text that is going to make this element taller than the other one.</p>
        <p>This is some paragraph text that is going to make this element taller than the other one.</p>
        <p>This is some paragraph text that is going to make this element taller than the other one.</p>
        <p>This is some paragraph text that is going to make this element taller than the other one.</p>
        <p>This is some paragraph text that is going to make this element taller than the other one.</p>
        <p>This is some paragraph text that is going to make this element taller than the other one.</p>
      </div>
    ')

  beforeEach ->
    @element = $( '.js-equalHeights' )

    new Spellbook.Classes.EqualHeights

  it 'should set equal heights on the elements', ->
    expect( @element ).to.have.prop( 'style' )

  afterEach -> @fixture.cleanup()
