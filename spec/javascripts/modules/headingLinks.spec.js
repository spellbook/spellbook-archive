describe('Spellbook.Modules.HeadingLinks', function() {
  beforeEach(function() {
    loadFixtures('heading_links.html');
    this.firstHeading = $('h1');
    this.headings = $('h1, h2, h3, h4');
    return Spellbook.Modules.HeadingLinks.init({
      headings: this.headings
    });
  });
  it('should slugify the heading string as an ID', function() {
    return expect(this.firstHeading).toHaveId('this-is-a-heading');
  });
  it('should have an anchor link prepended to the heading', function() {
    return expect(this.headings).toContainElement('a');
  });
  return it('should apply the correct class to the heading link', function() {
    return expect(this.headings.find('a')).toHaveClass('anchor');
  });
});
