describe('Spellbook.fixOrphanWords', function() {
  beforeEach(function() {
    loadFixtures('fix_orphan_words.html');
    this.element = $('.js-orphan');
    return Spellbook.fixOrphanWords();
  });
  return it('should add a non-breaking space', function() {
    return expect(this.element.html()).toContain('&nbsp;');
  });
});
