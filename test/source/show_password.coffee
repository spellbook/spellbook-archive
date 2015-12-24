describe 'Spellbook.Classes.ShowPassword', ->

  before ->
    @fixture = new Fixture('
      <form action="">
        <input id="" type="password" name="" class="js-showPassword-input" />
        <input id="" type="checkbox" name="" class="js-showPassword-toggle" />
      </form>
    ')

  beforeEach ->
    @input  = $( '.js-showPassword-input' )
    @toggle = $( '.js-showPassword-toggle' )

  it 'should show the standard password input by default', ->
    new Spellbook.Classes.ShowPassword

    expect( @input ).to.have.attr( 'type', 'password' )

  xit 'should show the password if isShownByDefault is true', ->
    new Spellbook.Classes.ShowPassword
      isShownByDefault : true

    expect( @input ).to.have.attr( 'type', 'text' )
    expect( @input ).to.have.prop( 'checked', true )

  xit 'should show the password when the checkbox is clicked', ->
    new Spellbook.Classes.ShowPassword

    @toggle.click()

    expect( @input ).to.have.attr( 'type', 'text' )
    expect( @input ).to.have.prop( 'checked', true )

  it 'should hide the password when the checkbox is clicked again', ->
    new Spellbook.Classes.ShowPassword

    @toggle.prop( 'checked', true )
    @toggle.click()

    expect( @input ).to.have.attr( 'type', 'password' )

  afterEach -> @fixture.cleanup()
