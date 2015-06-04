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

  it 'should add an active class to all containers', ->
    new Spellbook.Classes.Dispatcher
      events: [
        {
          page: 'all',
          run: ->
            $( '#home' ).addClass( 'is-active' )
            $( '#about' ).addClass( 'is-active' )
            $( '#contact' ).addClass( 'is-active' )
        }
      ]

    expect( $('#home') ).toHaveClass( 'is-active' )
    expect( $('#about') ).toHaveClass( 'is-active' )
    expect( $('#contact') ).toHaveClass( 'is-active' )
