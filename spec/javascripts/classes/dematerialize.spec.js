describe('Spellbook.Classes.Dematerialize', function() {
  beforeEach(function() {
    var element;
    loadFixtures('dematerialize.html');
    this.element = $('.js-dematerialize');
    this.trigger = $('.js-dematerialize-trigger');
    this.itemTitle = 'hidden_element';
    this.hiddenClass = 'is-hidden';
    element = new Spellbook.Classes.Dematerialize();
    return element.init();
  });
  it('should register a click on the trigger', function() {
    spyOnEvent(this.trigger, 'click');
    this.trigger.click();
    return expect('click').toHaveBeenTriggeredOn(this.trigger);
  });
  return it('should hide the element when the trigger is clicked', function() {
    this.trigger.click();
    return expect(this.element).not.toHaveClass(this.hiddenClass);
  });
});
