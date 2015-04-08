describe 'Spellbook.Modules.ShowPassword', ->
  beforeEach ->
    loadFixtures( 'show_password.html' )

    @input  = $( '.js-showPassword-input' )
    @toggle = $( '.js-showPassword-toggle' )

    Spellbook.Modules.ShowPassword.init()

  it 'should show the standard password input by default', ->
    expect( @input ).toHaveAttr( 'type', 'password' )

  it 'should show the password if showByDefault is true', ->
    Spellbook.Modules.ShowPassword.init
      showByDefault: true

    expect( @input ).toHaveAttr( 'type', 'text' )

  it 'should show the password when the checkbox is clicked', ->
    @toggle.click()

    expect( @input ).toHaveAttr( 'type', 'text' )

  it 'should hide the password when the checkbox is clicked again', ->
    @toggle.prop( 'checked', true )
    @toggle.click()

    expect( @input ).toHaveAttr( 'type', 'password' )
