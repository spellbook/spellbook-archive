describe('Spellbook.limiter', function() {
  beforeEach(function() {
    this.container = $('.fixture--limiter');
    this.elements = $('.js-limiter-element');
    this.toggle = $('.js-limiter-toggle');
    this.hiddenClass = 'is-hidden';
    return Spellbook.limiter();
  });
  afterEach(function() {
    this.elements.removeClass('is-hidden');
    return this.toggle.appendTo(this.container);
  });
  it('should do nothing if there are less items than the limit', function() {
    Spellbook.limiter({
      limit: 6
    });
    return expect(this.elements).not.toHaveClass(this.hiddenClass);
  });
  it('should hide the toggle if there are less items than the limit', function() {
    Spellbook.limiter({
      limit: 6
    });
    return expect(this.toggle).toBeHidden();
  });
  it('should add a hidden class to hide elements greater than the limit', function() {
    Spellbook.limiter({
      limit: 4
    });
    return expect('.js-limiter-element:nth-child(5)').toHaveClass(this.hiddenClass);
  });
  return it('should trigger a click on the toggle', function() {
    Spellbook.limiter({
      limit: 2
    });
    spyOnEvent(this.toggle, 'click');
    this.toggle.click();
    return expect('click').toHaveBeenTriggeredOn(this.toggle);
  });
});
