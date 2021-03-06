describe('Spellbook.Classes.SaveProgress', function() {
  beforeEach(function() {
    loadFixtures('save_progress.html');
    this.element = $('.js-saveProgress');
    this.container = $('.js-saveProgress-container');
    this.key = this.element.data('saveprogress');
    return this.value = 'string';
  });
  it('should save input element values to localStorage on input event', function() {
    new Spellbook.Classes.SaveProgress();
    this.element.val(this.value);
    this.element.trigger('input');
    return expect(localStorage.getItem(this.key)).toEqual(this.element.val());
  });
  it('should fill input elements with localStorage values when initialized', function() {
    this.element.val('');
    new Spellbook.Classes.SaveProgress();
    return expect(this.element.val()).toEqual(this.value);
  });
  return it('should remove container-specific localStorage items on form submission', function() {
    new Spellbook.Classes.SaveProgress();
    localStorage.setItem(this.key, this.value);
    localStorage.setItem('keep', 'me');
    spyOnEvent(this.container, 'submit');
    this.container.trigger('submit');
    expect(localStorage.getItem(this.key)).toEqual(null);
    return expect(localStorage.getItem('keep')).toEqual('me');
  });
});
