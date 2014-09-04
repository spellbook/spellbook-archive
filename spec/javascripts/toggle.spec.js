describe('Spellbook.toggle', function() {
  beforeEach(function() {
    loadFixtures('toggle.html');
    this.sender = $('.js-toggle-sender');
    this.proximityToggleClass = 'is-hidden';
    this.senderActiveClass = 'is-active';
    return Spellbook.toggle();
  });
  describe('click', function() {
    it('should register a click on the sender', function() {
      spyOnEvent(this.sender, 'click');
      this.sender.click();
      return expect('click').toHaveBeenTriggeredOn(this.sender);
    });
    it('should add an active class to the sender when clicked', function() {
      this.sender.click();
      return expect(this.sender).toHaveClass(this.senderActiveClass);
    });
    it('should toggle the visibility of the next element when clicked', function() {
      this.sender1 = $('.js-toggle-sender-01');
      this.receiver1 = $('#receiver-01');
      Spellbook.toggle({
        sender: this.sender1
      });
      this.sender1.trigger('click');
      return expect(this.receiver1).toHaveClass(this.proximityToggleClass);
    });
    it('should toggle the visibility of the previous element when clicked', function() {
      this.sender2 = $('.js-toggle-sender-02');
      this.receiver2 = $('#receiver-02');
      Spellbook.toggle({
        sender: this.sender2,
        proximity: 'prev'
      });
      this.sender2.trigger('click');
      return expect(this.receiver2).toHaveClass(this.proximityToggleClass);
    });
    it('should toggle the visibility of the next parent element when clicked', function() {
      this.sender3 = $('.js-toggle-sender-03');
      this.receiver3 = $('#receiver-03');
      Spellbook.toggle({
        sender: this.sender3,
        proximity: 'nextParent'
      });
      this.sender3.trigger('click');
      return expect(this.receiver3).toHaveClass(this.proximityToggleClass);
    });
    it('should toggle the visibility of the previous parent element when clicked', function() {
      this.sender4 = $('.js-toggle-sender-04');
      this.receiver4 = $('#receiver-04');
      Spellbook.toggle({
        sender: this.sender4,
        proximity: 'prevParent'
      });
      this.sender4.trigger('click');
      return expect(this.receiver4).toHaveClass(this.proximityToggleClass);
    });
    return it('should toggle the visibility of the referenced element when clicked', function() {
      this.sender = $('.js-toggle-sender-04');
      this.receiver = $('#receiver-04');
      Spellbook.toggle({
        sender: this.sender,
        proximity: this.receiver
      });
      this.sender.trigger('click');
      return expect(this.receiver).toHaveClass(this.proximityToggleClass);
    });
  });
  return describe('hover', function() {
    it('should register a mouseover on the sender', function() {
      Spellbook.toggle({
        event: 'hover'
      });
      spyOnEvent(this.sender, 'mouseover');
      this.sender.trigger('mouseover');
      return expect('mouseover').toHaveBeenTriggeredOn(this.sender);
    });
    it('should register a mouseout on the sender', function() {
      Spellbook.toggle({
        event: 'hover'
      });
      spyOnEvent(this.sender, 'mouseout');
      this.sender.trigger('mouseout');
      return expect('mouseout').toHaveBeenTriggeredOn(this.sender);
    });
    it('should add an active class to the sender when hovered on', function() {
      Spellbook.toggle({
        event: 'hover'
      });
      this.sender.trigger('mouseover');
      return expect(this.sender).toHaveClass(this.senderActiveClass);
    });
    it('should remove the active class to the sender when hovered off', function() {
      Spellbook.toggle({
        event: 'hover'
      });
      this.sender.trigger('mouseout');
      return expect(this.sender).not.toHaveClass(this.senderActiveClass);
    });
    it('should toggle the visibility of the next element when hovered on', function() {
      this.sender1 = $('.js-toggle-sender-01');
      this.receiver1 = $('#receiver-01');
      Spellbook.toggle({
        event: 'hover',
        sender: this.sender1
      });
      this.sender1.trigger('mouseover');
      return expect(this.receiver1).toHaveClass(this.proximityToggleClass);
    });
    it('should toggle the visibility of the previous element when hovered on', function() {
      this.sender2 = $('.js-toggle-sender-02');
      this.receiver2 = $('#receiver-02');
      Spellbook.toggle({
        event: 'hover',
        sender: this.sender2,
        proximity: 'prev'
      });
      this.sender2.trigger('mouseover');
      return expect(this.receiver2).toHaveClass(this.proximityToggleClass);
    });
    it('should toggle the visibility of the next parent element when hovered on', function() {
      this.sender3 = $('.js-toggle-sender-03');
      this.receiver3 = $('#receiver-03');
      Spellbook.toggle({
        event: 'hover',
        sender: this.sender3,
        proximity: 'nextParent'
      });
      this.sender3.trigger('mouseover');
      return expect(this.receiver3).toHaveClass(this.proximityToggleClass);
    });
    it('should toggle the visibility of the previous parent element when hovered on', function() {
      this.sender4 = $('.js-toggle-sender-04');
      this.receiver4 = $('#receiver-04');
      Spellbook.toggle({
        event: 'hover',
        sender: this.sender4,
        proximity: 'prevParent'
      });
      this.sender4.trigger('mouseover');
      return expect(this.receiver4).toHaveClass(this.proximityToggleClass);
    });
    return it('should toggle the visibility of the referenced element when hovered on', function() {
      this.sender = $('.js-toggle-sender-04');
      this.receiver = $('#receiver-04');
      Spellbook.toggle({
        event: 'hover',
        sender: this.sender,
        proximity: this.receiver
      });
      this.sender.trigger('mouseover');
      return expect(this.receiver).toHaveClass(this.proximityToggleClass);
    });
  });
});
