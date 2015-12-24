describe 'Spellbook.Classes.Share', ->

  before ->
    @fixture = new Fixture('
      <a class="js-share" data-share-service="twitter" data-share-text="Share this thing!" href="http://www.example.com">Twitter</a>
      <a class="js-share" data-share-service="facebook" data-share-text="Share this thing!" href="http://www.example.com">Facebook</a>
      <a class="js-share" data-share-service="google" data-share-text="Share this thing!" href="http://www.example.com">Google</a>
    ')

  beforeEach ->
    @element     = $( '.js-share' )
    @activeClass = 'is-active'

    new Spellbook.Classes.Share

  it 'should trigger a click on the service element', ->
    spy = sinon.spy( @element, 'click' )

    @element.click()

    expect( spy ).to.be.called

  afterEach -> @fixture.cleanup()
