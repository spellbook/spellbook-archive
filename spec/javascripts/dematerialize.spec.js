describe('Spellbook.dematerialize', function() {
  beforeEach(function() {
    loadFixtures('dematerialize.html');
    this.element = $('.js-dematerialize-element');
    this.trigger = $('.js-dematerialize-trigger');
    this.itemTitle = 'hidden_element';
    this.hiddenClass = 'is-hidden';
    return Spellbook.dematerialize();
  });
  afterEach(function() {
    return localStorage.removeItem(this.itemTitle);
  });
  it('should not be hidden by default', function() {
    return expect(this.element).not.toHaveClass(this.hiddenClass);
  });
  it('should register a click on the trigger', function() {
    spyOnEvent(this.trigger, 'click');
    this.trigger.click();
    return expect('click').toHaveBeenTriggeredOn(this.trigger);
  });
  return it('should hide the element when the trigger is clicked', function() {
    this.trigger.click();
    return expect(this.element).toHaveClass(this.hiddenClass);
  });
});
