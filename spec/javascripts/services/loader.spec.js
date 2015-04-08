describe('Spellbook.Services.loader', function() {
  beforeEach(function() {
    loadFixtures('loader.html');
    this.toggle = $('.js-loader-toggle');
    this.element = $('.js-loader-element');
    this.spinner = 'span';
    this.spinnerClass = 'loader';
    this.overlay = 'div';
    this.overlayClass = 'loader-overlay';
    this.loadingClass = 'is-loading';
    return Spellbook.Services.loader();
  });
  it('should register a click on the toggle', function() {
    spyOnEvent(this.toggle, 'click');
    this.toggle.click();
    return expect('click').toHaveBeenTriggeredOn(this.toggle);
  });
  it('should append the spinner element', function() {
    this.toggle.click();
    return expect(this.element).toContainElement(this.spinner);
  });
  it('should append the overlay element', function() {
    this.toggle.click();
    return expect(this.element).toContainElement(this.overlay);
  });
  it('should add the spinner class to the spinner element', function() {
    this.toggle.click();
    return expect(this.spinner).toHaveClass(this.spinnerClass);
  });
  it('should add the overlay class to the overlay element', function() {
    this.toggle.click();
    return expect(this.overlay).toHaveClass(this.overlayClass);
  });
  return it('should add the loading class to the element', function() {
    this.toggle.click();
    return expect(this.element).toHaveClass(this.loadingClass);
  });
});
