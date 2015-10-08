describe('Spellbook.Classes.StateUrls', function() {
  beforeEach(function() {
    loadFixtures('state_urls.html');
    this.element = $('.js-stateUrls');
    this.link = $('.js-stateUrls-link');
    this.hiddenClass = 'is-hidden';
    return this.activeClass = 'is-active';
  });
  afterEach(function() {
    this.link.removeClass(this.activeClass);
    this.element.removeClass(this.hiddenClass);
    return window.location.hash = '';
  });
  it('should set the state to the window hash, if present', function() {
    window.location.hash = '#section-03';
    new Spellbook.Classes.StateUrls();
    return expect($('#section-03')).toBeVisible();
  });
  it('should set the first section to active when no hash is present', function() {
    new Spellbook.Classes.StateUrls();
    return expect($('#section-01')).toBeVisible();
  });
  it('should trigger a click on the link', function() {
    new Spellbook.Classes.StateUrls();
    spyOnEvent(this.link, 'click');
    this.link.click();
    return expect('click').toHaveBeenTriggeredOn(this.link);
  });
  it('should show the appropriate section when the link is clicked on', function() {
    var goto;
    new Spellbook.Classes.StateUrls();
    this.link.last().click();
    goto = this.link.last().attr('href');
    return expect($(goto)).toBeVisible();
  });
  return it('should add an active class to the clicked link', function() {
    new Spellbook.Classes.StateUrls();
    this.link.first().click();
    return expect(this.link.first()).toHaveClass(this.activeClass);
  });
});
