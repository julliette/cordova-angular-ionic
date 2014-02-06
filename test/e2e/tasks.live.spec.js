describe('Basic Task Tests:', function () {
  'use strict';

  beforeEach(function () {
    browser.get('#');
    browser.waitForAngular();
  });

  it('view title', function () {
    var element = browser.findElement(by.css('.header'));
    expect(element.isDisplayed()).toBe(true);
    expect(element.getText()).toBe('Tasks');
  });

  it('messages should not be visible', function () {
    var element = browser.findElement(by.css('.message'));
    expect(element.isDisplayed()).toBe(false);
  });

  it('should contain more than 10 items in the repeater', function() {
    var elements = element.all(by.repeater('task in tasks'));
    elements.then(function(arr) {
      expect(arr.length > 10).toBe(true);
    });
  });

});
