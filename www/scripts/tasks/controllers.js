'use strict';

angular.module('rampageApp')
.controller('MyCtrl1', function MyCtrl1($scope, kinvey) {

	kinvey.ping().then(function(data) {
		$scope.data = data.data;
		$scope.status = data.status;
	}, function(data) {
		$scope.data = data || 'Request failed';
	});

}).controller('TaskController', function ($scope, kinvey, $moment) {
	$scope.tasks = [];

	$scope.message = '';

	$scope.tasks = kinvey.tasks().query(
		function() {},
		function() {
			$scope.message = 'There was an error retrieving your tasks.';
		});
});
