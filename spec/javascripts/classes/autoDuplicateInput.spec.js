describe('Spellbook.Classes.AutoDuplicateInput', function() {
  beforeEach(function() {
    loadFixtures('auto_duplicate_input.html');
    this.selector = '.js-autoDuplicateInput';
    this.element = $(this.selector);
    this.container = $('.js-autoDuplicateInput-container');
    this.clonedDataAttribute = 'cloned';
    this.validateDataAttribute = 'validate';
    this.invalidClass = 'is-invalid';
    this.validClass = 'is-valid';
    return this.adi = new Spellbook.Classes.AutoDuplicateInput;
  });
  it('should register a keyup event on the input', function() {
    spyOnEvent(this.element, 'keyup');
    this.element.trigger('keyup');
    return expect('keyup').toHaveBeenTriggeredOn(this.element);
  });
  it('should mark the input as invalid and give the appropriate class', function() {
    this.element.val('thisisapartialemail');
    this.element.trigger('keyup');
    return expect(this.element).toHaveClass(this.invalidClass);
  });
  it('should mark the input as valid and give the appropriate class', function() {
    this.element.val('email@example.com');
    this.element.trigger('keyup');
    return expect(this.element).toHaveClass(this.validClass);
  });
  it('should duplicate the input when a valid string is provided', function() {
    this.element.val('email@example.com');
    this.element.trigger('keyup');
    return expect($(this.selector).length).toEqual(2);
  });
  return it('should keep a count of valid fields', function() {
    this.element.val('email@example.com');
    this.element.trigger('keyup');
    return expect(this.adi.getCount()).toEqual(1);
  });
});
