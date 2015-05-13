describe('Spellbook.Services.contextMenu', function() {
  beforeEach(function() {
    loadFixtures('context_menu.html');
    this.document = $(document);
    this.element = $('.js-contextMenu');
    this.activeClass = 'is-active';
    return Spellbook.Services.contextMenu();
  });
  it('should trigger a contextmenu event on the document', function() {
    spyOnEvent(this.document, 'contextmenu');
    this.document.trigger('contextmenu');
    return expect('contextmenu').toHaveBeenTriggeredOn(this.document);
  });
  it('should add an active class on the contextmenu event', function() {
    this.document.trigger('contextmenu');
    return expect(this.element).toHaveClass(this.activeClass);
  });
  it('should trigger a click event on the document', function() {
    spyOnEvent(this.document, 'click');
    this.document.trigger('click');
    return expect('click').toHaveBeenTriggeredOn(this.document);
  });
  it('should remove the active class when the document is clicked', function() {
    this.document.trigger('contextmenu');
    this.document.trigger('click');
    return expect(this.element).not.toHaveClass(this.activeClass);
  });
  return it('should apply inline CSS properties to the menu', function() {
    this.document.trigger('contextmenu');
    return expect(this.element).toHaveProp('style');
  });
});
