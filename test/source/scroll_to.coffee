describe 'Spellbook.Services.scrollTo', ->

  before ->
    @fixture = new Fixture('
      <a class="js-scrollTo" href="#turtle" style="margin-bottom: 2000px;">Element</a>
      <div id="turtle">
        <p>This is an element that is being scrolled to.</p>
      </div>
    ')

  beforeEach ->
    @element  = $( '.js-scrollTo' )
    @document = $( 'body, html' )
    @to       = $( @element.attr( 'href' ) )

    Spellbook.Services.scrollTo()

  it 'should trigger a click event on the element', ->
    spy = sinon.spy( @element, 'click' )

    @element.click()

    expect( spy ).to.be.called
