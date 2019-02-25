angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('home', {
    url: '/page1',
	params: {
		language: "",
		rule_id: ""		
},
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  .state('searchRules', {
    url: '/page3',
	params: {
		language: "",
		keyword: "",
		rule_id: ""		
},
    templateUrl: 'templates/searchRules.html',
    controller: 'searchRulesCtrl'
  })

  .state('ePRULES', {
    url: '/page5',
	params: {
		language: ""		
},
    templateUrl: 'templates/ePRULES.html',
    controller: 'ePRULESCtrl'
  })

$urlRouterProvider.otherwise('/page1')


});