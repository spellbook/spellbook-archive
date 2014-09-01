describe 'Spellbook.toggle', ->
  beforeEach ->
    loadFixtures('toggle.html')

    @sender = $('.js-toggle-sender')
    @toggleClass = 'is-hidden'

    Spellbook.toggle()

  it 'should register a click on the sender', ->
    spyOnEvent(@sender, 'click')
    @sender.click()

    expect('click').toHaveBeenTriggeredOn(@sender)

  it 'should toggle the visibility of the next element', ->
    @sender1 = $('.js-toggle-sender-01')
    @receiver1 = $('#receiver-01')

    Spellbook.toggle
      sender: @sender1

    @sender1.trigger('click')
    expect(@receiver1).toHaveClass(@toggleClass)

  it 'should toggle the visibility of the previous element', ->
    @sender2 = $('.js-toggle-sender-02')
    @receiver2 = $('#receiver-02')

    Spellbook.toggle
      sender: @sender2
      proximity: 'prev'

    @sender2.trigger('click')
    expect(@receiver2).toHaveClass(@toggleClass)

  it 'should toggle the visibility of the next parent element', ->
    @sender3 = $('.js-toggle-sender-03')
    @receiver3 = $('#receiver-03')

    Spellbook.toggle
      sender: @sender3
      proximity: 'nextParent'

    @sender3.trigger('click')
    expect(@receiver3).toHaveClass(@toggleClass)

  it 'should toggle the visibility of the previous parent element', ->
    @sender4 = $('.js-toggle-sender-04')
    @receiver4 = $('#receiver-04')

    Spellbook.toggle
      sender: @sender4
      proximity: 'prevParent'

    @sender4.trigger('click')
    expect(@receiver4).toHaveClass(@toggleClass)

