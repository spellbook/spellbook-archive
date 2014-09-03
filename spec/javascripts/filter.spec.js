describe('Spellbook.filter', function() {
  beforeEach(function() {
    loadFixtures('filter.html');
    this.link = $('.js-filter-link');
    this.item = $('.js-filter-item');
    this.activeClass = 'is-active';
    this.hiddenClass = 'is-hidden';
    return Spellbook.filter();
  });
  it('should trigger a click on the filter link', function() {
    spyOnEvent(this.link, 'click');
    this.link.click();
    return expect('click').toHaveBeenTriggeredOn(this.link);
  });
  it('should add an active class to the clicked link', function() {
    this.link.first().click();
    return expect(this.link.first()).toHaveClass(this.activeClass);
  });
  it('should remove the active class from all other links', function() {
    this.link.first().click();
    return expect(this.link.not(this.link.first())).not.toHaveClass(this.activeClass);
  });
  it('should show the first set when the first set link is clicked', function() {
    var firstSet;
    firstSet = $('.set-01');
    this.link.click();
    return expect(firstSet).not.toHaveClass(this.hiddenClass);
  });
  it('should show the second set when the second set link is clicked', function() {
    var secondSet;
    secondSet = $('.set-02');
    this.link.click();
    return expect(secondSet).not.toHaveClass(this.hiddenClass);
  });
  return it('should show all elements when the all link is clicked', function() {
    this.link.click();
    return expect(this.item).not.toHaveClass(this.hiddenClass);
  });
});
