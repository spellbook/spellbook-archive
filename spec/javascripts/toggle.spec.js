describe('Spellbook.toggle', function() {
  beforeEach(function() {
    loadFixtures('toggle.html');
    this.sender = $('.js-toggle-sender');
    this.toggleClass = 'is-hidden';
    return Spellbook.toggle();
  });
  it('should register a click on the sender', function() {
    spyOnEvent(this.sender, 'click');
    this.sender.click();
    return expect('click').toHaveBeenTriggeredOn(this.sender);
  });
  it('should toggle the visibility of the next element', function() {
    this.sender1 = $('.js-toggle-sender-01');
    this.receiver1 = $('#receiver-01');
    Spellbook.toggle({
      sender: this.sender1
    });
    this.sender1.trigger('click');
    return expect(this.receiver1).toHaveClass(this.toggleClass);
  });
  it('should toggle the visibility of the previous element', function() {
    this.sender2 = $('.js-toggle-sender-02');
    this.receiver2 = $('#receiver-02');
    Spellbook.toggle({
      sender: this.sender2,
      proximity: 'prev'
    });
    this.sender2.trigger('click');
    return expect(this.receiver2).toHaveClass(this.toggleClass);
  });
  it('should toggle the visibility of the next parent element', function() {
    this.sender3 = $('.js-toggle-sender-03');
    this.receiver3 = $('#receiver-03');
    Spellbook.toggle({
      sender: this.sender3,
      proximity: 'nextParent'
    });
    this.sender3.trigger('click');
    return expect(this.receiver3).toHaveClass(this.toggleClass);
  });
  return it('should toggle the visibility of the previous parent element', function() {
    this.sender4 = $('.js-toggle-sender-04');
    this.receiver4 = $('#receiver-04');
    Spellbook.toggle({
      sender: this.sender4,
      proximity: 'prevParent'
    });
    this.sender4.trigger('click');
    return expect(this.receiver4).toHaveClass(this.toggleClass);
  });
});
