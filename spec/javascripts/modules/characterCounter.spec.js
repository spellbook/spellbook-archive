describe('Spellbook.Modules.CharacterCounter', function() {
  beforeEach(function() {
    loadFixtures('character_counter.html');
    this.element = $('.js-characterCounter');
    this.label = $('.js-characterCounter-label');
    this.number = $('.js-characterCounter-number');
    this.errorClass = 'is-error';
    return Spellbook.Modules.CharacterCounter.init();
  });
  it('should initialize with a zero character count', function() {
    return expect(this.label).toContainText('0');
  });
  it('should change character count based on the typed string', function() {
    this.element.val('This is some text here.');
    return expect(this.number).toContainText(this.element.text().length);
  });
  it('should add an error class when the max is exceeded', function() {
    this.element.val("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.");
    this.element.trigger('keyup');
    expect(this.element).toHaveClass(this.errorClass);
    return expect(this.label).toHaveClass(this.errorClass);
  });
  return it('should add an error class when the min is not met', function() {
    Spellbook.Modules.CharacterCounter.init({
      minChars: 100
    });
    this.element.val('This is some text here.');
    this.element.trigger('keyup');
    expect(this.element).toHaveClass(this.errorClass);
    return expect(this.label).toHaveClass(this.errorClass);
  });
});
