describe 'Spellbook.Classes.Dispatcher', ->
  beforeEach ->
    loadFixtures( 'dispatcher.html' )

    @element  = $( '.js-dispatcher' )
    @dataAttr = 'dispatcher-page'

    new Spellbook.Classes.Dispatcher
      events: [
        {
          page: 'home',
          run: ->
            $( '#home' ).addClass( 'is-active' )
        },
        {
          page: 'about',
          run: ->
            $( '#about' ).addClass( 'is-active' )
        },
        {
          page: 'contact',
          run: ->
            $( '#contact' ).addClass( 'is-active' )
        }
      ]

  it 'should add an active class to the home container when on the home page', ->
    expect( $('#home') ).toHaveClass( 'is-active' )
