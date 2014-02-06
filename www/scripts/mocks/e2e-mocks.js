'use strict';
 
angular.module('e2e-mocks', ['ngMockE2E', 'rampageAppConsts'])
.run(function($httpBackend, SERVICE_URL) {
    // Do your mock
    var baseApiUrl = SERVICE_URL;
    var secondTask = {'Content':'Do this without a postback, for real yo','Status':'Complete','CreatedDate':1384981077810,'_acl':{'creator':'kid_Te0iCbYsYf'},'_kmd':{'lmt':'2013-11-20T20:57:58.982Z','ect':'2013-11-20T20:57:58.982Z'},'_id':'528d22566e8f6cbd7f02cbf6'};
    var firstTask = {'Content':'Watch a Movie','Status':'Incomplete','CreatedDate':1384981077900,'_acl':{'creator':'kid_Te0iCbYsYf'},'_kmd':{'lmt':'2013-11-21T14:49:27.287Z','ect':'2013-11-21T14:49:27.287Z'},'_id':'528e1d77b5393ebd1c03c310'};
    $httpBackend.whenGET(baseApiUrl + '/Task')
        .respond([firstTask, secondTask]);
 
    // Don't mock the html views
    $httpBackend.whenGET(/views\/\w+.*/).passThrough();
 
    // For everything else, don't mock
    $httpBackend.whenGET(/^\w+.*/).passThrough();
    $httpBackend.whenPOST(/^\w+.*/).passThrough();
  });
 
angular.module('rampageApp').requires.push('e2e-mocks');