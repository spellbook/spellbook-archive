describe 'Spellbook.Classes.Dispatcher', ->

  before ->
    @fixture = new Fixture('
      <div class="js-dispatcher" data-dispatcher-page="home">
        <div id="home">
          <h1>Home</h1>
        </div>

        <div id="about">
          <h1>About</h1>
        </div>

        <div id="contact">
          <h1>Contact</h1>
        </div>
      </div>
    ')

  beforeEach ->
    @element  = $( '.js-dispatcher' )
    @dataAttr = 'dispatcher-page'

    new Spellbook.Classes.Dispatcher
      events : [
        {
          page : 'home',
          run : ->
            $( '#home' ).addClass( 'is-active' )
        },
        {
          page : 'about',
          run : ->
            $( '#about' ).addClass( 'is-active' )
        },
        {
          page : 'contact',
          run : ->
            $( '#contact' ).addClass( 'is-active' )
        }
      ]

  xit 'should add an active class to the home container when on the home page', ->
    expect( $( '#home' ) ).to.have.class( 'is-active' )

  xit 'should add an active class to all containers', ->
    new Spellbook.Classes.Dispatcher
      events : [
        {
          page : 'all',
          run : ->
            $( '#home' ).addClass( 'is-active' )
            $( '#about' ).addClass( 'is-active' )
            $( '#contact' ).addClass( 'is-active' )
        }
      ]

    expect( $( '#home' ) ).to.have.class( 'is-active' )
    expect( $( '#about' ) ).to.have.class( 'is-active' )
    expect( $( '#contact' ) ).to.have.class( 'is-active' )

  afterEach -> @fixture.cleanup()
