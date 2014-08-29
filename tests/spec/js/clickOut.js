describe('Spellbook.clickOut', function() {
  beforeEach(function() {
    this.document = $(document);
    this.element = $('<div class="js-clickout"></div>');
    return Spellbook.clickOut({
      element: this.element
    });
  });
  it('should trigger a click event on the element', function() {
    spyOnEvent(this.element, 'click');
    this.element.click();
    return expect('click').toHaveBeenTriggeredOn(this.element);
  });
  return xit('should trigger a click event on the document', function() {
    spyOnEvent(this.document, 'click');
    this.document.click();
    return expect('click').toHaveBeenTriggeredOn(this.document);
  });
});
