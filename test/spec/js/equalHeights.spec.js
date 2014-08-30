describe('Spellbook.equalHeights', function() {
  beforeEach(function() {
    loadFixtures('equal_heights.html');
    this.element = $('.js-equalHeight');
    return Spellbook.equalHeights();
  });
  return it('should set equal heights on the elements', function() {
    return expect(this.element).toHaveCss({
      height: '222px'
    });
  });
});
