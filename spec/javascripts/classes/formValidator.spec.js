describe('Spellbook.Classes.FormValidator', function() {
  beforeEach(function() {
    loadFixtures('form_validator.html');
    this.field1 = $('#field1');
    this.field2 = $('#field2');
    this.field3 = $('#field3');
    this.submit = $('#submit');
    this.message = $('.js-formValidator-message');
    this.errorClass = 'is-invalid';
    return new Spellbook.Classes.FormValidator();
  });
  it('should trigger a click event when the submit button is clicked', function() {
    spyOnEvent(this.submit, 'click');
    this.submit.click();
    return expect('click').toHaveBeenTriggeredOn(this.submit);
  });
  it('should trigger a keyup event on the inputs', function() {
    spyOnEvent(this.field1, 'keyup');
    spyOnEvent(this.field2, 'keyup');
    spyOnEvent(this.field3, 'keyup');
    this.field1.trigger('keyup');
    this.field2.trigger('keyup');
    this.field3.trigger('keyup');
    expect('keyup').toHaveBeenTriggeredOn(this.field1);
    expect('keyup').toHaveBeenTriggeredOn(this.field2);
    return expect('keyup').toHaveBeenTriggeredOn(this.field3);
  });
  it('should set the inputs as invalid when left empty', function() {
    this.submit.click();
    expect(this.field1).toHaveClass(this.errorClass);
    expect(this.field2).toHaveClass(this.errorClass);
    return expect(this.field3).toHaveClass(this.errorClass);
  });
  it('should remove the error class on the input that is typed into', function() {
    this.field1.val('hello').trigger('keyup');
    this.field2.trigger('keyup');
    this.field3.trigger('keyup');
    expect(this.field1).not.toHaveClass(this.errorClass);
    expect(this.field2).toHaveClass(this.errorClass);
    return expect(this.field3).toHaveClass(this.errorClass);
  });
  return it('should show a message when there is an error', function() {
    this.submit.click();
    expect($('p').length).toBe(3);
    return expect($('p').first().text()).toBe('The field is required.');
  });
});
