'use strict';

angular.module('checkslateFilters', []).filter('incomplete', function() {
		return function (input){
				var result = [];
				
				for (var i = 0; i < input.length; i++) {
						if (!input[i].complete) {
								result.push(input[i]);
						}
				}
				return result;
		}
})
.filter('complete', function() {
		return function (input){
				var result = [];
				
				for (var i = 0; i < input.length; i++) {
						if (input[i].complete) {
								result.push(input[i]);
						}
				}
				return result;
		}
});