'use strict';

/* Services */


angular.module('rampageApp').factory('kinvey', ['$resource', '$http', 'SERVICE_URL',
	function($resource, $http, SERVICE_URL) {

		var token = 'Basic a2lkX1RlMGlDYllzWWY6ZjA0Y2ZjMTVkYjA4NDE2ZThkNmRiMzA5NGQwMTYwYjA=';
		$http.defaults.headers.common.Authorization = token;
		$http.defaults.headers.post.Authorization = token;
		$http.defaults.headers.common['X-Kinvey-API-Version'] = '3';

		var service = {
			ping : function() {
				return $http({
					url: SERVICE_URL,
					method: 'GET'
				});
			},

			tasks : function() {
				return $resource(SERVICE_URL + '/Task/:id', {id:'@_id'});
			}
		};

		return service;
	}]);
