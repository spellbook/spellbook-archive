describe('Spellbook.headingLinks', function() {
  beforeEach(function() {
    this.element = $('<h1>This is a heading</h1>');
    return Spellbook.headingLinks.init({
      headings: this.element
    });
  });
  it('should slugify the heading string as an ID', function() {
    return expect(this.element).toHaveId('this-is-a-heading');
  });
  it('should have an anchor link prepended to the heading', function() {
    return expect(this.element).toContainElement('a');
  });
  return it('should apply the correct class to the heading link', function() {
    return expect(this.element.find('a')).toHaveAttr('class', 'anchor');
  });
});
