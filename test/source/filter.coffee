describe 'Spellbook.Services.filter', ->

  before ->
    @fixture = new Fixture('
      <ul>
        <li><a href="#all" class="link-all js-filter-link">All</a></li>
        <li><a href="#set-01" class="link-first js-filter-link">Set 01</a></li>
        <li><a href="#set-02" class="link-second js-filter-link">Set 02</a></li>
        <li><a href="#set-03" class="link-third js-filter-link">Set 03</a></li>
      </ul>

      <div class="js-filter">

        <div class="all js-filter-item" data-item="all">
          <p>This is an item.</p>
        </div>

        <div class="all js-filter-item" data-item="all">
          <p>This is an item.</p>
        </div>

        <div class="set-01 js-filter-item" data-item="set-01">
          <p>This is an item.</p>
        </div>

        <div class="set-01 js-filter-item" data-item="set-01">
          <p>This is an item.</p>
        </div>

        <div class="set-02 js-filter-item" data-item="set-02">
          <p>This is an item.</p>
        </div>

        <div class="set-02 js-filter-item" data-item="set-02">
          <p>This is an item.</p>
        </div>

      </div>
    ')

  beforeEach ->
    @element     = $( '.js-filter' )
    @item        = $( '.js-filter-item' )
    @link        = $( '.js-filter-link' )
    @empty       = '<p>There are no items to show.</p>'
    @classActive = 'is-active'
    @classHidden = 'is-hidden'

    Spellbook.Services.filter()

  it 'should trigger a click on the filter link', ->
    spy = sinon.spy( @link, 'click' )

    @link.click()

    expect( spy ).to.be.called

  it 'should add an active class to the clicked link', ->
    @link.first().click()

    expect( @link.first() ).to.have.class( @classActive )

  it 'should remove the active class from all other links', ->
    @link.first().click()

    expect( @link.not( @link.first() ) ).not.to.have.class( @classActive )

  it 'should show the first set when the first set link is clicked', ->
    firstSetLink = $( '.link-first' )
    firstSet     = $( '.set-01' )

    firstSetLink.click()

    expect( firstSet ).not.to.have.class( @classHidden )

  it 'should show the second set when the second set link is clicked', ->
    secondSetLink = $( '.link-second' )
    secondSet     = $( '.set-02' )

    secondSetLink.click()

    expect( secondSet ).not.to.have.class( @classHidden )

  it 'should show all elements when the all link is clicked', ->
    allLink = $( '.link-all' )

    allLink.click()

    expect( @item ).not.to.have.class( @classHidden )

  it 'should show an empty message when there are not items in the set', ->
    thirdSetLink = $( '.link-third' )

    thirdSetLink.click()

    expect( @element.html() ).to.contain( @empty )

  afterEach -> @fixture.cleanup()
