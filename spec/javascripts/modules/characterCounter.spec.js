describe('Spellbook.Modules.CharacterCounter', function() {
  beforeEach(function() {
    loadFixtures('character_counter.html');
    this.element = $('.js-characterCounter');
    this.label = $('.js-characterCounter-label');
    return Spellbook.Modules.CharacterCounter.init();
  });
  it('should initialize with a zero character count', function() {
    return expect(this.label).toContainText('0');
  });
  return it('should change character count based on the typed string', function() {
    this.element.val('This is some text here.');
    return expect(this.label).toContainText(this.element.text().length);
  });
});
