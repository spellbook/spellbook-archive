describe('Spellbook.Classes.EqualHeights', function() {
  beforeEach(function() {
    loadFixtures('equal_heights.html');
    this.element = $('.js-equalHeights');
    return new Spellbook.Classes.EqualHeights();
  });
  return it('should set equal heights on the elements', function() {
    return expect(this.element).toHaveProp('style');
  });
});
