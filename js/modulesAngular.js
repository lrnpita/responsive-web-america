// creando un modulo
var app = angular.module('aplication', ['ngRoute'])
.config(
    function($routeProvider)
    {
        $routeProvider
        .when('/aboutUs',
        {
            templateUrl:'aboutUs.html',
            controller : 'appController'
        })
        .when('/home',
        {
            templateUrl:'home.html',
            controller : 'appController'
        })
        .otherwise( {redirectTo: ''});
    }
);

// creando un controlador
app.controller('appController', function ($scope) {
	$scope.menuItems = [
	{name:'home',link:'#home'},
	{name:'about us',link:'#aboutUs'},
	{name:'services',link:'#services'},
	{name:'contact us',link:'#contactUs'},
	{name:'menu item',link:'#menuItem'}
	];
	
	$scope.moreOptions = ["More Options","Press & Awards","All News & Updates","About us","What is Elevate"];
	
	$scope.metodosScope = function() {
		$scope.datosScope = "nuevo valor";
	}

	$scope.avisar = function() {
		$scope.mensajeAviso = "Ya cambié";
	}
});

app.factory('');