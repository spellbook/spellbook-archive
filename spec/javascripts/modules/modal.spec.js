describe('Spellbook.Modules.Modal', function() {
  beforeEach(function() {
    loadFixtures('modal.html');
    this.trigger = $('.js-modal-trigger');
    this.close = $('.js-modal-close');
    this.modal = $('#modal');
    this.backdrop = $('.modal-backdrop');
    this.activeClass = 'is-active';
    return Spellbook.Modules.Modal.init();
  });
  it('should trigger a click event when the link is clicked', function() {
    spyOnEvent(this.trigger, 'click');
    this.trigger.click();
    return expect('click').toHaveBeenTriggeredOn(this.trigger);
  });
  it('should open the modal when the trigger is clicked', function() {
    this.trigger.click();
    return expect(this.modal).toHaveClass(this.activeClass);
  });
  it('should inject a backdrop element into the page', function() {
    this.trigger.click();
    return expect(this.backdrop).toBeInDOM();
  });
  it('should close the modal when the close button is clicked', function() {
    this.close.click();
    return expect(this.modal).not.toHaveClass(this.activeClass);
  });
  return it('should close the modal when the backdrop is clicked', function() {
    this.backdrop.click();
    return expect(this.modal).not.toHaveClass(this.activeClass);
  });
});
