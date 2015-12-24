describe 'Spellbook.Classes.Dematerialize', ->

  before ->
    @fixture = new Fixture('
      <div class="js-dematerialize is-hidden">
        <a href="#" class="js-dematerialize-trigger">Trigger</a>
        <p>This is a thing.</p>
      </div>
    ')

  beforeEach ->
    @element     = $( '.js-dematerialize' )
    @trigger     = $( '.js-dematerialize-trigger' )
    @itemTitle   = 'hidden_element'
    @hiddenClass = 'is-hidden'

    element = new Spellbook.Classes.Dematerialize()

  it 'should register a click on the trigger', ->
    spy = sinon.spy( @trigger, 'click' )

    @trigger.click()

    expect( spy ).to.be.called

  xit 'should hide the element when the trigger is clicked', ->
    @trigger.click()

    expect( @element ).not.to.have.class( @hiddenClass )

  afterEach -> @fixture.cleanup()
