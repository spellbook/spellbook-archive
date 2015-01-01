describe('Spellbook.equalHeights', function() {
  beforeEach(function() {
    loadFixtures('equal_heights.html');
    this.element = $('.js-equalHeight');
    return Spellbook.equalHeights.init();
  });
  return it('should set equal heights on the elements', function() {
    return expect(this.element).toHaveProp('style');
  });
});
