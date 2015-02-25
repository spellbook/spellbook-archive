describe('Spellbook.limiter', function() {
  beforeEach(function() {
    loadFixtures('limiter.html');
    this.container = $('.fixture--limiter');
    this.element = $('.js-limiter-element');
    this.toggle = $('.js-limiter-toggle');
    this.hiddenClass = 'is-hidden';
    return Spellbook.limiter();
  });
  afterEach(function() {
    this.element.removeClass('is-hidden');
    return this.toggle.appendTo(this.container);
  });
  it('should do nothing if there are less items than the limit', function() {
    Spellbook.limiter({
      limit: 6
    });
    return expect(this.element).not.toHaveClass(this.hiddenClass);
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
    return expect('.js-limiter-element:nth-child( 5 )').toHaveClass(this.hiddenClass);
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
