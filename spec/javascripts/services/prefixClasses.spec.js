describe('Spellbook.prefixClasses', function() {
  beforeEach(function() {
    loadFixtures('prefix_classes.html');
    this.element = $('.js-prefixClasses');
    this.firstChild = this.element.find('.first');
    return this.secondChild = this.element.find('.second');
  });
  it("should prepend a string the matched elements' classes", function() {
    Spellbook.Services.prefixClasses();
    expect(this.firstChild).toHaveClass('prefix-first');
    return expect(this.secondChild).toHaveClass('prefix-second');
  });
  it("should not prepend a string to the unmatched elements' classes", function() {
    Spellbook.Services.prefixClasses({
      query: '.second'
    });
    expect(this.firstChild).toHaveClass('first');
    return expect(this.secondChild).toHaveClass('prefix-second');
  });
  return it("should prepend a custom string to the matched elements' classes", function() {
    Spellbook.Services.prefixClasses({
      prefix: 'custom'
    });
    expect(this.firstChild).toHaveClass('custom-first');
    return expect(this.secondChild).toHaveClass('custom-second');
  });
});
