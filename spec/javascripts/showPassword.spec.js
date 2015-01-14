describe('Spellbook.ShowPassword', function() {
  beforeEach(function() {
    loadFixtures('show_password.html');
    this.input = $('.js-showPassword-input');
    this.toggle = $('.js-showPassword-toggle');
    return Spellbook.ShowPassword.init();
  });
  it('should show the standard password input by default', function() {
    return expect(this.input).toHaveAttr('type', 'password');
  });
  it('should show the password if showByDefault is true', function() {
    Spellbook.ShowPassword.init({
      showByDefault: true
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
