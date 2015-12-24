describe 'Spellbook.Classes.Toggle', ->

  before ->
    @fixture = new Fixture('
      <a href="#" class="js-toggle">Toggle</a>

      <a href="#receiver-01" class="js-toggle-sender-01">Toggle</a>
      <div id="receiver-01">
        <p>This is an element.</p>
      </div>

      <div id="receiver-02">
        <p>This is an element.</p>
      </div>
      <a href="#receiver-02" class="js-toggle-sender-02">Toggle</a>

      <div>
        <a href="#receiver-03" class="js-toggle-sender-03">Toggle</a>
        <p>This is an element.</p>
      </div>
      <div id="receiver-03">
        <p>This is an element.</p>
      </div>

      <div id="receiver-04">
        <p>This is an element.</p>
      </div>
      <div>
        <a href="#receiver-04" class="js-toggle-sender-04">Toggle</a>
        <p>This is an element.</p>
      </div>
    ')

  beforeEach ->
    @element     = $( '.js-toggle' )
    @classToggle = 'is-hidden'
    @classActive = 'is-active'

  describe 'click', ->

    it 'should register a click on the sender', ->
      spy = sinon.spy( @element, 'click' )

      @element.click()

      expect( spy ).to.be.called

    xit 'should add an active class to the sender when clicked', ->
      new Spellbook.Classes.Toggle

      @element.click()

      expect( @element ).to.have.class( @classActive )

    it 'should toggle the visibility of the next element when clicked', ->
      @element1  = $( '.js-toggle-sender-01' )
      @receiver1 = $( '#receiver-01' )

      new Spellbook.Classes.Toggle
        $element : @element1

      @element1.click()

      expect( @receiver1 ).to.have.class( @classToggle )

    it 'should toggle the visibility of the previous element when clicked', ->
      @element2  = $( '.js-toggle-sender-02' )
      @receiver2 = $( '#receiver-02' )

      new Spellbook.Classes.Toggle
        $element  : @element2
        proximity : 'prev'

      @element2.click()

      expect( @receiver2 ).to.have.class( @classToggle )

    it 'should toggle the visibility of the next parent element when clicked', ->
      @element3  = $( '.js-toggle-sender-03' )
      @receiver3 = $( '#receiver-03' )

      new Spellbook.Classes.Toggle
        $element  : @element3
        proximity : 'nextParent'

      @element3.click()

      expect( @receiver3 ).to.have.class( @classToggle )

    it 'should toggle the visibility of the previous parent element when clicked', ->
      @element4  = $( '.js-toggle-sender-04' )
      @receiver4 = $( '#receiver-04' )

      new Spellbook.Classes.Toggle
        $element  : @element4
        proximity : 'prevParent'

      @element4.click()
      expect( @receiver4 ).to.have.class( @classToggle )

    xit 'should toggle the visibility of the referenced element when clicked', ->
      @element  = $( '.js-toggle-sender-04' )
      @receiver = $( '#receiver-04' )

      new Spellbook.Classes.Toggle
        $element  : @element
        proximity : @receiver

      @element.click()

      expect( @receiver ).to.have.class( @classToggle )

  describe 'hover', ->

    it 'should register a mouseover on the sender', ->
      spy = sinon.spy( @element, 'mouseover' )

      @element.mouseover()

      expect( spy ).to.be.called

    it 'should register a mouseout on the sender', ->
      spy = sinon.spy( @element, 'mouseout' )

      @element.mouseout()

      expect( spy ).to.be.called

    xit 'should add an active class to the sender when hovered on', ->
      new Spellbook.Classes.Toggle
        event : 'hover'

      @element.mouseout()

      expect( @element ).to.have.class( @classActive )

    it 'should remove the active class to the sender when hovered off', ->
      new Spellbook.Classes.Toggle
        event : 'hover'

      @element.trigger( 'mouseout' )

      expect( @element ).not.to.have.class( @classActive )

    xit 'should toggle the visibility of the next element when hovered on', ->
      @element1  = $( '.js-toggle-sender-01' )
      @receiver1 = $( '#receiver-01' )

      new Spellbook.Classes.Toggle
        $element : @element1
        event    : 'hover'

      @element1.mouseout()

      expect( @receiver1 ).to.have.class( @classToggle )

    xit 'should toggle the visibility of the previous element when hovered on', ->
      @element2  = $( '.js-toggle-sender-02' )
      @receiver2 = $( '#receiver-02' )

      new Spellbook.Classes.Toggle
        $element  : @element2
        event     : 'hover'
        proximity : 'prev'

      @element2.mouseout()

      expect( @receiver2 ).to.have.class( @classToggle )

    xit 'should toggle the visibility of the next parent element when hovered on', ->
      @element3  = $( '.js-toggle-sender-03' )
      @receiver3 = $( '#receiver-03' )

      new Spellbook.Classes.Toggle
        $element  : @element3
        event     : 'hover'
        proximity : 'nextParent'

      @element3.mouseout()

      expect( @receiver3 ).to.have.class( @classToggle )

    xit 'should toggle the visibility of the previous parent element when hovered on', ->
      @element4  = $( '.js-toggle-sender-04' )
      @receiver4 = $( '#receiver-04' )

      new Spellbook.Classes.Toggle
        $element  : @element4
        event     : 'hover'
        proximity : 'prevParent'

      @element4.mouseout()

      expect( @receiver4 ).to.have.class( @classToggle )

    xit 'should toggle the visibility of the referenced element when hovered on', ->
      @element  = $( '.js-toggle-sender-04' )
      @receiver = $( '#receiver-04' )

      new Spellbook.Classes.Toggle
        $element  : @element
        event     : 'hover'
        proximity : @receiver

      @element.mouseout()

      expect( @receiver ).to.have.class( @classToggle )

  afterEach -> @fixture.cleanup()
