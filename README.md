cordova-angular-ionic
=====================
Baseline installations of the tools needed to develop a combo Cordova/AngularJS/Ionic Framework mobile application. This solution works best in concert with the vagrant-angular-env project.

This solution includes the following tools:
* [Yeoman](http://yeoman.io/)
* [Bower](http://bower.io/)
* [Grunt](http://gruntjs.com/)
* [Karma](http://karma-runner.github.io/0.10/index.html)
* [Protractor](https://github.com/angular/protractor)

This assumes that [Cordova](http://cordova.apache.org/) is installed on the local machine.

Usage
---
### Getting set up
Install your node packages and bower libraries:

  npm install
  bower install

### Run your karma unit tests

  grunt test:unit

### Run your karma unit tests continuously

  grunt karma:watch watch

### Run your e2e tests with protractor 
This will run the e2e tests against Chromium, FireFox and PhantomJS.

This task assumes an external Selenium server. The configuration can be changed in the test/e2e/protractor.conf.base.js file.

  grunt test:e2e

### Run your server

  grunt serve

### Run this in an emulator

  cordova build <ios/android>
  cordova emulate <ios/android>
