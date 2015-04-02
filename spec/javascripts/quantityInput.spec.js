describe('Spellbook.QuantityInput', function() {
  beforeEach(function() {
    loadFixtures('quantity-input.html');
    this.element = $('.js-quantityInput');
    this.field = $('.js-quantityInput-field');
    this.increase = $('.js-quantityInput-increase');
    this.decrease = $('.js-quantityInput-decrease');
    this.target = $('.js-quantityInput-target');
    this.targetBaseValue = 29;
    this.minValue = 1;
    this.maxValue = 100;
    return Spellbook.QuantityInput.init();
  });
  it('should register a click event on the increase button', function() {
    spyOnEvent(this.increase, 'click');
    this.increase.click();
    return expect('click').toHaveBeenTriggeredOn(this.increase);
  });
  it('should register a click event on the decrease button', function() {
    spyOnEvent(this.decrease, 'click');
    this.decrease.click();
    return expect('click').toHaveBeenTriggeredOn(this.decrease);
  });
  it('should register a change event on the input', function() {
    spyOnEvent(this.element, 'change');
    this.element.trigger('change');
    return expect('change').toHaveBeenTriggeredOn(this.element);
  });
  it('should increase the input value when the increase link is clicked', function() {
    var newValue, startValue;
    startValue = parseInt(this.element.val());
    this.increase.click();
    newValue = parseInt(this.element.val());
    return expect(newValue).toEqual(startValue + 1);
  });
  it('should decrease the input value when the decrease link is clicked', function() {
    var newValue, startValue;
    this.element.attr('value', '2');
    startValue = parseInt(this.element.val());
    this.increase.click();
    this.decrease.click();
    newValue = parseInt(this.element.val());
    return expect(newValue).toEqual(startValue - 1);
  });
  it('should update the target value when the increase link is clicked', function() {
    var newTargetValue;
    this.increase.click();
    newTargetValue = parseInt(this.element.val()) * this.targetBaseValue;
    return expect(newTargetValue).toEqual(this.targetBaseValue * 2);
  });
  it('should update the target value when the decrease link is clicked', function() {
    var newTargetValue;
    this.increase.click();
    this.increase.click();
    this.decrease.click();
    newTargetValue = parseInt(this.element.val()) * this.targetBaseValue;
    return expect(newTargetValue).toEqual(this.targetBaseValue * 2);
  });
  it('should update the target value when the input is changed', function() {
    var newTargetValue;
    this.element.attr('value', '2');
    this.element.trigger('change');
    newTargetValue = parseInt(this.element.val()) * this.targetBaseValue;
    return expect(newTargetValue).toEqual(this.targetBaseValue * 2);
  });
  it('should not go below the specified minimun value', function() {
    var newValue;
    this.element.attr('value', this.minValue);
    this.decrease.click();
    newValue = parseInt(this.element.val());
    return expect(newValue).toEqual(this.minValue);
  });
  return it('should not go above the specified maximum value', function() {
    var newValue;
    this.element.attr('value', this.maxValue);
    this.decrease.click();
    newValue = parseInt(this.element.val());
    return expect(newValue).toEqual(this.maxValue);
  });
});
