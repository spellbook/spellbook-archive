describe('Spellbook.scrollTo', function() {
  beforeEach(function() {
    loadFixtures('scroll_to.html');
    this.element = $('.js-scrollTo');
    this.document = $('body, html');
    this.to = $(this.element.attr('href'));
    return Spellbook.Services.scrollTo();
  });
  return it('should trigger a click event on the element', function() {
    spyOnEvent(this.element, 'click');
    this.element.click();
    return expect('click').toHaveBeenTriggeredOn(this.element);
  });
});
