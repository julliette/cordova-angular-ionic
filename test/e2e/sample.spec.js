// 'use strict';

// describe('angularjsGruntExampleApp app', function() {

//     beforeEach(function() {
//         browser().navigateTo('/');
//     });

//     describe('Homepage', function() {
//         it('should display the correct route', function() {
//             expect(browser().location().path()).toBe('/');
//         });
//     });

// });

/*global
  beforeEach: false,
  browser: false,
  by: false,
  describe: false,
  expect: false,
  it: false,
  protractor: false
 */

describe('First:', function () {
  'use strict';

  beforeEach(function () {
    browser.get('#');
    browser.waitForAngular();
  });

  it('view title', function () {
    var element = browser.findElement(by.css('.jumbotron h1'));
    expect(element.isDisplayed()).toBe(true);
    expect(element.getText()).toBe('First route');
  });

});
