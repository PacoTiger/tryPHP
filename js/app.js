var app = angular.module('myAPP',['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when("/",{
		templateUrl:"views/main.php",
		controller: "main"
	})
	.otherwise({
		redirectTo: "/"
	})
}]);

app.controller('main',['$scope','$http', function($scope,$http){

	//$http.get("json/Bands_Json.json").success (function (data){
	//	$scope.bandsjson = data;
	//});
}]);

app.directive('header', function() {
    return {
     restrict : 'E',
     templateUrl : "views/header.php"
    }
});

app.directive('footer', function() {
    return {
     restrict : 'E',
     templateUrl : "views/footer.php"
    }
});