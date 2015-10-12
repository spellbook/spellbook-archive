describe('Spellbook.Services.focusFirstInput', function() {
  beforeEach(function() {
    loadFixtures('focus_first_input.html');
    this.hiddenInput = $('input[type="hidden"]');
    this.textInput = $('input[type="text"]');
    this.textarea = $('textarea');
    return this.contenteditable = $('[contenteditable]');
  });
  it('should not focus the hidden input element', function() {
    Spellbook.Services.focusFirstInput();
    return expect(document.activeElement).not.toBe(this.hiddenInput[0]);
  });
  it('should focus the first text input element', function() {
    Spellbook.Services.focusFirstInput();
    return expect(document.activeElement).toBe(this.textInput[0]);
  });
  it('should focus the first textarea element', function() {
    Spellbook.Services.focusFirstInput({
      $element: $('.js-focusFirstInput-2')
    });
    return expect(document.activeElement).toBe(this.textarea[0]);
  });
  return it('should focus the first contenteditable element', function() {
    Spellbook.Services.focusFirstInput({
      $element: $('.js-focusFirstInput-3')
    });
    return expect(document.activeElement).toBe(this.contenteditable[0]);
  });
});
