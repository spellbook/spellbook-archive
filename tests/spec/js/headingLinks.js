describe('Spellbook.headingLinks', function() {
  beforeEach(function() {
    this.headings = $('h1, h2, h3, h4');
    return Spellbook.headingLinks.init({
      headings: this.headings
    });
  });
  it('should slugify the heading string as an ID', function() {
    return expect(this.headings).toHaveId('this-is-a-heading');
  });
  it('should have an anchor link prepended to the heading', function() {
    return expect(this.headings).toContainElement('a');
  });
  return it('should apply the correct class to the heading link', function() {
    return expect(this.headings.find('a')).toHaveAttr('class', 'anchor');
  });
});
