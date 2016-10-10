describe('Spellbook.Classes.CharacterCounter', function() {
  beforeEach(function() {
    loadFixtures('character_counter.html');
    this.element = $('.js-characterCounter');
    this.label = $('.js-characterCounter-label');
    this.number = $('.js-characterCounter-number');
    this.classError = 'is-error';
    this.classSuccess = 'is-success';
    return new Spellbook.Classes.CharacterCounter();
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
    expect(this.element).toHaveClass(this.classError);
    return expect(this.label).toHaveClass(this.classError);
  });
  it('should add an error class when the min is not met', function() {
    new Spellbook.Classes.CharacterCounter({
      charsMin: 100
    });
    this.element.val('This is some text here.');
    this.element.trigger('keyup');
    expect(this.element).toHaveClass(this.classError);
    return expect(this.label).toHaveClass(this.classError);
  });
  return it('should add a success class when conditions are met', function() {
    new Spellbook.Classes.CharacterCounter({
      charsMin: 10,
      charsMax: 20
    });
    this.element.val('Hello, friend!');
    this.element.trigger('keyup');
    expect(this.element).toHaveClass(this.classSuccess);
    return expect(this.label).toHaveClass(this.classSuccess);
  });
});
