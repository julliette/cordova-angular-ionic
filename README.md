cordova-angular-ionic
=====================
Baseline installations of the tools needed to develop a combo Cordova/AngularJS/Ionic Framework mobile application. This solution works best in concert with the vagrant-angular-env project.

The bonus feature of this baseline is the ability to build out two sets of end-to-end tests: one with a mock backend and one with a live backend. When run in the appropriate mode, Grunt will configure the index.html and protractor config files to point to the right files. A side effect of this is that changes to these files should be made to the ".template.*" versions and not to the html or js file versions.

This solution includes the following tools:
* [Yeoman](http://yeoman.io/)
* [Bower](http://bower.io/)
* [Grunt](http://gruntjs.com/)
* [Karma](http://karma-runner.github.io/0.10/index.html)
* [Protractor](https://github.com/angular/protractor)
* [MomentJS](http://momentjs.com/)

This assumes that [Cordova](http://cordova.apache.org/) is installed on the local machine.

Getting set up
---
Install your node packages and bower libraries:

    npm install
    bower install

Usage
---
### Run your karma unit tests

    grunt test:unit

### Run your karma unit tests continuously

    grunt karma:watch watch

### Run your e2e tests with protractor 
This will run the e2e tests against Chromium and FireFox (and eventually, PhantomJS. PhantomJS gives issues after the first run through and is commented out, for now).

This task assumes an external Selenium server. The configuration can be changed in the test/e2e/protractor.conf.base.template.js file.

#### To run against a MOCK backend

    grunt test:e2e_mock

#### To run against a LIVE backend

    grunt test:e2e_live

### Run your server

    grunt serve

### To build for deployment

    grunt build

### Run this in an emulator

    cordova build <ios/android>
    cordova emulate <ios/android>

If you experience errors (Windows hosts?)
---
if you see any errors when running the grunt tasks, run the following command while in the source folder:

    npm ls

This may tell you that there are unmet dependencies. Manually install those dependencies:

    npm install delayed-stream@0.0.5
    npm install graceful-fs@~2.0.0
