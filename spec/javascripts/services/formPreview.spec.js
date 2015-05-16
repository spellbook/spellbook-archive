describe('Spellbook.Services.formPreview', function() {
  beforeEach(function() {
    loadFixtures('form_preview.html');
    this.element = $('.js-formPreview-input');
    this.idName = 'formPreview';
    return Spellbook.Services.formPreview();
  });
  it('should trigger a keyup event when the input is typed in', function() {
    spyOnEvent(this.element, 'keyup');
    this.element.trigger('keyup');
    return expect('keyup').toHaveBeenTriggeredOn(this.element);
  });
  it('should show the first input value in the associated HTML element', function() {
    var element, string, tag;
    element = $('.js-formPreview-input[data-preview="1"]');
    tag = $('#formPreview-1');
    string = 'Hello, friend!';
    element.val(string);
    element.trigger('keyup');
    return expect(tag).toContainText(string);
  });
  it('should show the second input value in the associated HTML element', function() {
    var element, string, tag;
    element = $('.js-formPreview-input[data-preview="2"]');
    tag = $('#formPreview-2');
    string = 'Hello, friend!';
    element.val(string);
    element.trigger('keyup');
    return expect(tag).toContainText(string);
  });
  return it('should show the third input value in the associated HTML element', function() {
    var element, string, tag;
    element = $('.js-formPreview-input[data-preview="3"]');
    tag = $('#formPreview-3');
    string = 'Hello, friend!';
    element.val(string);
    element.trigger('keyup');
    return expect(tag).toContainText(string);
  });
});
