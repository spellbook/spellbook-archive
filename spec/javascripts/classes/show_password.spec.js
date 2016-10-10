describe('Spellbook.Classes.ShowPassword', function() {
  beforeEach(function() {
    loadFixtures('show_password.html');
    this.input = $('.js-showPassword-input');
    this.toggle = $('.js-showPassword-toggle');
    return new Spellbook.Classes.ShowPassword();
  });
  it('should show the standard password input by default', function() {
    return expect(this.input).toHaveAttr('type', 'password');
  });
  it('should show the password if isShownByDefault is true', function() {
    new Spellbook.Classes.ShowPassword({
      isShownByDefault: true
    });
    return expect(this.input).toHaveAttr('type', 'text');
  });
  it('should show the password when the checkbox is clicked', function() {
    this.toggle.click();
    return expect(this.input).toHaveAttr('type', 'text');
  });
  return it('should hide the password when the checkbox is clicked again', function() {
    this.toggle.prop('checked', true);
    this.toggle.click();
    return expect(this.input).toHaveAttr('type', 'password');
  });
});
