describe 'Spellbook.Classes.Modal', ->

  before ->
    @fixture = new Fixture('
      <a class="js-modal-trigger" data-modal="#modal" href="#">Open Modal</a>

      <div id="modal">
        <a class="js-modal-close" data-modal="#modal" href="#"></a>
        <h1>I am a modal.</h1>
        <p>This is a modal! Srsly.</p>
      </div>
    ')

  beforeEach ->
    @trigger     = $( '.js-modal-trigger' )
    @close       = $( '.js-modal-close' )
    @modal       = $( '#modal' )
    @backdrop    = $( '.modal-backdrop' )
    @classActive = 'is-active'

    new Spellbook.Classes.Modal

  it 'should trigger a click event when the link is clicked', ->
    spy = sinon.spy( @trigger, 'click' )

    @trigger.click()

    expect( spy ).to.be.called

  xit 'should open the modal when the trigger is clicked', ->
    @trigger.click()

    expect( @modal ).to.have.class( @classActive )

  xit 'should inject a backdrop element into the page', ->
    @trigger.click()

    expect( @backdrop ).to.exist

  it 'should close the modal when the close button is clicked', ->
    @close.click()

    expect( @modal ).not.to.have.class( @classActive )

  it 'should close the modal when the backdrop is clicked', ->
    @backdrop.click()

    expect( @modal ).not.to.have.class( @classActive )

  afterEach -> @fixture.cleanup()
