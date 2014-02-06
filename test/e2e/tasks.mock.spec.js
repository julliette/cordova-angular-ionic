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

  it('should contain two items in the repeater', function() {
    var elements = element.all(by.repeater('task in tasks'));
    elements.then(function(arr) {
      expect(arr.length).toEqual(2);
    });
  });

  it('should be displayed in chronological order', function() {
    var elements = element.all(by.repeater('task in tasks').column('Content'));
    elements.then(function(arr) {
      expect(arr.length).toEqual(2);
      expect(arr[0].getText()).toBe('Do this without a postback, for real yo');
      expect(arr[1].getText()).toBe('Watch a Movie');
    });
  });

});
