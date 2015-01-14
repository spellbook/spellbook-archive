describe('Spellbook.Share', function() {
  beforeEach(function() {
    loadFixtures('share.html');
    this.element = $('.js-share-service');
    this.activeClass = 'is-active';
    return Spellbook.Share.init();
  });
  return it('should trigger a click on the service element', function() {
    spyOnEvent(this.element, 'click');
    this.element.click();
    return expect('click').toHaveBeenTriggeredOn(this.element);
  });
});
