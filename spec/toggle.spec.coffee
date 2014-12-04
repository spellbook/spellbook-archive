describe 'Spellbook.toggle', ->
  beforeEach ->
    loadFixtures('toggle.html')

    @sender               = $('.js-toggle-sender')
    @proximityToggleClass = 'is-hidden'
    @senderActiveClass    = 'is-active'

    Spellbook.toggle()

  describe 'click', ->

    it 'should register a click on the sender', ->
      spyOnEvent(@sender, 'click')
      @sender.click()

      expect('click').toHaveBeenTriggeredOn(@sender)

    it 'should add an active class to the sender when clicked', ->
      @sender.click()

      expect(@sender).toHaveClass(@senderActiveClass)

    it 'should toggle the visibility of the next element when clicked', ->
      @sender1   = $('.js-toggle-sender-01')
      @receiver1 = $('#receiver-01')

      Spellbook.toggle
        sender: @sender1

      @sender1.trigger('click')
      expect(@receiver1).toHaveClass(@proximityToggleClass)

    it 'should toggle the visibility of the previous element when clicked', ->
      @sender2   = $('.js-toggle-sender-02')
      @receiver2 = $('#receiver-02')

      Spellbook.toggle
        sender    : @sender2
        proximity : 'prev'

      @sender2.trigger('click')
      expect(@receiver2).toHaveClass(@proximityToggleClass)

    it 'should toggle the visibility of the next parent element when clicked', ->
      @sender3   = $('.js-toggle-sender-03')
      @receiver3 = $('#receiver-03')

      Spellbook.toggle
        sender    : @sender3
        proximity : 'nextParent'

      @sender3.trigger('click')
      expect(@receiver3).toHaveClass(@proximityToggleClass)

    it 'should toggle the visibility of the previous parent element when clicked', ->
      @sender4   = $('.js-toggle-sender-04')
      @receiver4 = $('#receiver-04')

      Spellbook.toggle
        sender    : @sender4
        proximity : 'prevParent'

      @sender4.trigger('click')
      expect(@receiver4).toHaveClass(@proximityToggleClass)

    it 'should toggle the visibility of the referenced element when clicked', ->
      @sender   = $('.js-toggle-sender-04')
      @receiver = $('#receiver-04')

      Spellbook.toggle
        sender    : @sender
        proximity : @receiver

      @sender.trigger('click')
      expect(@receiver).toHaveClass(@proximityToggleClass)

  describe 'hover', ->

    it 'should register a mouseover on the sender', ->
      Spellbook.toggle
        event: 'hover'

      spyOnEvent(@sender, 'mouseover')
      @sender.trigger('mouseover')

      expect('mouseover').toHaveBeenTriggeredOn(@sender)

    it 'should register a mouseout on the sender', ->
      Spellbook.toggle
        event: 'hover'

      spyOnEvent(@sender, 'mouseout')
      @sender.trigger('mouseout')

      expect('mouseout').toHaveBeenTriggeredOn(@sender)

    it 'should add an active class to the sender when hovered on', ->
      Spellbook.toggle
        event: 'hover'

      @sender.trigger('mouseover')

      expect(@sender).toHaveClass(@senderActiveClass)

    it 'should remove the active class to the sender when hovered off', ->
      Spellbook.toggle
        event: 'hover'

      @sender.trigger('mouseout')

      expect(@sender).not.toHaveClass(@senderActiveClass)

    it 'should toggle the visibility of the next element when hovered on', ->
      @sender1   = $('.js-toggle-sender-01')
      @receiver1 = $('#receiver-01')

      Spellbook.toggle
        event  : 'hover'
        sender : @sender1

      @sender1.trigger('mouseover')
      expect(@receiver1).toHaveClass(@proximityToggleClass)

    it 'should toggle the visibility of the previous element when hovered on', ->
      @sender2   = $('.js-toggle-sender-02')
      @receiver2 = $('#receiver-02')

      Spellbook.toggle
        event     : 'hover'
        sender    : @sender2
        proximity : 'prev'

      @sender2.trigger('mouseover')
      expect(@receiver2).toHaveClass(@proximityToggleClass)

    it 'should toggle the visibility of the next parent element when hovered on', ->
      @sender3   = $('.js-toggle-sender-03')
      @receiver3 = $('#receiver-03')

      Spellbook.toggle
        event     : 'hover'
        sender    : @sender3
        proximity : 'nextParent'

      @sender3.trigger('mouseover')
      expect(@receiver3).toHaveClass(@proximityToggleClass)

    it 'should toggle the visibility of the previous parent element when hovered on', ->
      @sender4   = $('.js-toggle-sender-04')
      @receiver4 = $('#receiver-04')

      Spellbook.toggle
        event     : 'hover'
        sender    : @sender4
        proximity : 'prevParent'

      @sender4.trigger('mouseover')
      expect(@receiver4).toHaveClass(@proximityToggleClass)

    it 'should toggle the visibility of the referenced element when hovered on', ->
      @sender   = $('.js-toggle-sender-04')
      @receiver = $('#receiver-04')

      Spellbook.toggle
        event     : 'hover'
        sender    : @sender
        proximity : @receiver

      @sender.trigger('mouseover')
      expect(@receiver).toHaveClass(@proximityToggleClass)

