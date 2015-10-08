describe 'Spellbook.Classes.Toggle', ->
  beforeEach ->
    loadFixtures( 'toggle.html' )

    @element     = $( '.js-toggle' )
    @toggleClass = 'is-hidden'
    @activeClass = 'is-active'

  describe 'click', ->

    it 'should register a click on the sender', ->
      spyOnEvent( @element, 'click' )
      @element.click()

      expect( 'click' ).toHaveBeenTriggeredOn( @element )

    it 'should add an active class to the sender when clicked', ->
      new Spellbook.Classes.Toggle

      @element.click()

      expect( @element ).toHaveClass( @activeClass )

    it 'should toggle the visibility of the next element when clicked', ->
      @element1  = $( '.js-toggle-sender-01' )
      @receiver1 = $( '#receiver-01' )

      new Spellbook.Classes.Toggle
        $element : @element1

      @element1.trigger( 'click' )
      expect( @receiver1 ).toHaveClass( @toggleClass )

    it 'should toggle the visibility of the previous element when clicked', ->
      @element2  = $( '.js-toggle-sender-02' )
      @receiver2 = $( '#receiver-02' )

      new Spellbook.Classes.Toggle
        $element  : @element2
        proximity : 'prev'

      @element2.trigger( 'click' )
      expect( @receiver2 ).toHaveClass( @toggleClass )

    it 'should toggle the visibility of the next parent element when clicked', ->
      @element3  = $( '.js-toggle-sender-03' )
      @receiver3 = $( '#receiver-03' )

      new Spellbook.Classes.Toggle
        $element  : @element3
        proximity : 'nextParent'

      @element3.trigger( 'click' )
      expect( @receiver3 ).toHaveClass( @toggleClass )

    it 'should toggle the visibility of the previous parent element when clicked', ->
      @element4  = $( '.js-toggle-sender-04' )
      @receiver4 = $( '#receiver-04' )

      new Spellbook.Classes.Toggle
        $element  : @element4
        proximity : 'prevParent'

      @element4.trigger( 'click' )
      expect( @receiver4 ).toHaveClass( @toggleClass )

    it 'should toggle the visibility of the referenced element when clicked', ->
      @element  = $( '.js-toggle-sender-04' )
      @receiver = $( '#receiver-04' )

      new Spellbook.Classes.Toggle
        $element  : @element
        proximity : @receiver

      @element.trigger( 'click' )
      expect( @receiver ).toHaveClass( @toggleClass )

  describe 'hover', ->

    it 'should register a mouseover on the sender', ->
      spyOnEvent( @element, 'mouseover' )
      @element.trigger( 'mouseover' )

      expect( 'mouseover' ).toHaveBeenTriggeredOn( @element )

    it 'should register a mouseout on the sender', ->
      spyOnEvent( @element, 'mouseout' )
      @element.trigger( 'mouseout' )

      expect( 'mouseout' ).toHaveBeenTriggeredOn( @element )

    it 'should add an active class to the sender when hovered on', ->
      new Spellbook.Classes.Toggle
        event : 'hover'

      @element.trigger( 'mouseover' )

      expect( @element ).toHaveClass( @activeClass )

    it 'should remove the active class to the sender when hovered off', ->
      new Spellbook.Classes.Toggle
        event : 'hover'

      @element.trigger( 'mouseout' )

      expect( @element ).not.toHaveClass( @activeClass )

    it 'should toggle the visibility of the next element when hovered on', ->
      @element1  = $( '.js-toggle-sender-01' )
      @receiver1 = $( '#receiver-01' )

      new Spellbook.Classes.Toggle
        $element : @element1
        event    : 'hover'

      @element1.trigger( 'mouseover' )
      expect( @receiver1 ).toHaveClass( @toggleClass )

    it 'should toggle the visibility of the previous element when hovered on', ->
      @element2  = $( '.js-toggle-sender-02' )
      @receiver2 = $( '#receiver-02' )

      new Spellbook.Classes.Toggle
        $element  : @element2
        event     : 'hover'
        proximity : 'prev'

      @element2.trigger( 'mouseover' )
      expect( @receiver2 ).toHaveClass( @toggleClass )

    it 'should toggle the visibility of the next parent element when hovered on', ->
      @element3  = $( '.js-toggle-sender-03' )
      @receiver3 = $( '#receiver-03' )

      new Spellbook.Classes.Toggle
        $element  : @element3
        event     : 'hover'
        proximity : 'nextParent'

      @element3.trigger( 'mouseover' )
      expect( @receiver3 ).toHaveClass( @toggleClass )

    it 'should toggle the visibility of the previous parent element when hovered on', ->
      @element4  = $( '.js-toggle-sender-04' )
      @receiver4 = $( '#receiver-04' )

      new Spellbook.Classes.Toggle
        $element  : @element4
        event     : 'hover'
        proximity : 'prevParent'

      @element4.trigger( 'mouseover' )
      expect( @receiver4 ).toHaveClass( @toggleClass )

    it 'should toggle the visibility of the referenced element when hovered on', ->
      @element  = $( '.js-toggle-sender-04' )
      @receiver = $( '#receiver-04' )

      new Spellbook.Classes.Toggle
        $element  : @element
        event     : 'hover'
        proximity : @receiver

      @element.trigger( 'mouseover' )
      expect( @receiver ).toHaveClass( @toggleClass )
