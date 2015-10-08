describe('Spellbook.Classes.Share', function() {
  beforeEach(function() {
    loadFixtures('share.html');
    this.element = $('.js-share');
    this.activeClass = 'is-active';
    return new Spellbook.Classes.Share();
  });
  return it('should trigger a click on the service element', function() {
    spyOnEvent(this.element, 'click');
    this.element.click();
    return expect('click').toHaveBeenTriggeredOn(this.element);
  });
});
