describe('Spellbook.Modules.Toggle', function() {
  beforeEach(function() {
    loadFixtures('toggle.html');
    this.element = $('.js-toggle');
    this.toggleClass = 'is-hidden';
    this.activeClass = 'is-active';
    return Spellbook.Modules.Toggle.init();
  });
  describe('click', function() {
    it('should register a click on the sender', function() {
      spyOnEvent(this.element, 'click');
      this.element.click();
      return expect('click').toHaveBeenTriggeredOn(this.element);
    });
    it('should add an active class to the sender when clicked', function() {
      this.element.click();
      return expect(this.element).toHaveClass(this.activeClass);
    });
    it('should toggle the visibility of the next element when clicked', function() {
      this.element1 = $('.js-toggle-sender-01');
      this.receiver1 = $('#receiver-01');
      Spellbook.Modules.Toggle.init({
        $element: this.element1
      });
      this.element1.trigger('click');
      return expect(this.receiver1).toHaveClass(this.toggleClass);
    });
    it('should toggle the visibility of the previous element when clicked', function() {
      this.element2 = $('.js-toggle-sender-02');
      this.receiver2 = $('#receiver-02');
      Spellbook.Modules.Toggle.init({
        $element: this.element2,
        proximity: 'prev'
      });
      this.element2.trigger('click');
      return expect(this.receiver2).toHaveClass(this.toggleClass);
    });
    it('should toggle the visibility of the next parent element when clicked', function() {
      this.element3 = $('.js-toggle-sender-03');
      this.receiver3 = $('#receiver-03');
      Spellbook.Modules.Toggle.init({
        $element: this.element3,
        proximity: 'nextParent'
      });
      this.element3.trigger('click');
      return expect(this.receiver3).toHaveClass(this.toggleClass);
    });
    it('should toggle the visibility of the previous parent element when clicked', function() {
      this.element4 = $('.js-toggle-sender-04');
      this.receiver4 = $('#receiver-04');
      Spellbook.Modules.Toggle.init({
        $element: this.element4,
        proximity: 'prevParent'
      });
      this.element4.trigger('click');
      return expect(this.receiver4).toHaveClass(this.toggleClass);
    });
    return it('should toggle the visibility of the referenced element when clicked', function() {
      this.element = $('.js-toggle-sender-04');
      this.receiver = $('#receiver-04');
      Spellbook.Modules.Toggle.init({
        $element: this.element,
        proximity: this.receiver
      });
      this.element.trigger('click');
      return expect(this.receiver).toHaveClass(this.toggleClass);
    });
  });
  return describe('hover', function() {
    it('should register a mouseover on the sender', function() {
      Spellbook.Modules.Toggle.init({
        event: 'hover'
      });
      spyOnEvent(this.element, 'mouseover');
      this.element.trigger('mouseover');
      return expect('mouseover').toHaveBeenTriggeredOn(this.element);
    });
    it('should register a mouseout on the sender', function() {
      Spellbook.Modules.Toggle.init({
        event: 'hover'
      });
      spyOnEvent(this.element, 'mouseout');
      this.element.trigger('mouseout');
      return expect('mouseout').toHaveBeenTriggeredOn(this.element);
    });
    it('should add an active class to the sender when hovered on', function() {
      Spellbook.Modules.Toggle.init({
        event: 'hover'
      });
      this.element.trigger('mouseover');
      return expect(this.element).toHaveClass(this.activeClass);
    });
    it('should remove the active class to the sender when hovered off', function() {
      Spellbook.Modules.Toggle.init({
        event: 'hover'
      });
      this.element.trigger('mouseout');
      return expect(this.element).not.toHaveClass(this.activeClass);
    });
    it('should toggle the visibility of the next element when hovered on', function() {
      this.element1 = $('.js-toggle-sender-01');
      this.receiver1 = $('#receiver-01');
      Spellbook.Modules.Toggle.init({
        $element: this.element1,
        event: 'hover'
      });
      this.element1.trigger('mouseover');
      return expect(this.receiver1).toHaveClass(this.toggleClass);
    });
    it('should toggle the visibility of the previous element when hovered on', function() {
      this.element2 = $('.js-toggle-sender-02');
      this.receiver2 = $('#receiver-02');
      Spellbook.Modules.Toggle.init({
        $element: this.element2,
        event: 'hover',
        proximity: 'prev'
      });
      this.element2.trigger('mouseover');
      return expect(this.receiver2).toHaveClass(this.toggleClass);
    });
    it('should toggle the visibility of the next parent element when hovered on', function() {
      this.element3 = $('.js-toggle-sender-03');
      this.receiver3 = $('#receiver-03');
      Spellbook.Modules.Toggle.init({
        $element: this.element3,
        event: 'hover',
        proximity: 'nextParent'
      });
      this.element3.trigger('mouseover');
      return expect(this.receiver3).toHaveClass(this.toggleClass);
    });
    it('should toggle the visibility of the previous parent element when hovered on', function() {
      this.element4 = $('.js-toggle-sender-04');
      this.receiver4 = $('#receiver-04');
      Spellbook.Modules.Toggle.init({
        $element: this.element4,
        event: 'hover',
        proximity: 'prevParent'
      });
      this.element4.trigger('mouseover');
      return expect(this.receiver4).toHaveClass(this.toggleClass);
    });
    return it('should toggle the visibility of the referenced element when hovered on', function() {
      this.element = $('.js-toggle-sender-04');
      this.receiver = $('#receiver-04');
      Spellbook.Modules.Toggle.init({
        $element: this.element,
        event: 'hover',
        proximity: this.receiver
      });
      this.element.trigger('mouseover');
      return expect(this.receiver).toHaveClass(this.toggleClass);
    });
  });
});
