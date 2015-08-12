// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services',
  'starter-constants', 'ngOpenFB'])

  .run(function($ionicPlatform, ngFB, facebookApiKey) {
    ngFB.init({appId: facebookApiKey});
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleLightContent();
      }
    });
  })

  .config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
    .state('users', {
      url: '/users',
      abstract: true,
      templateUrl: 'templates/login-tabs.html'
    })

    // Each tab has its own nav history stack:
    .state('users.login', {
      url: '/login',
      views: {
        'users-login': {
          templateUrl: 'templates/login/index.html',
          controller: 'LoginController as loginController'
        }
      },
  		data: {
  	    requireLogin: false
      }
    })
    .state('users.new', {
      url: '/new',
      views: {
        'users-new': {
          templateUrl: 'templates/users/new.html',
          controller: 'UsersController as usersController'
        }
      },
  		data: {
  	    requireLogin: false
      }
    })

    // setup an abstract state for the tabs directive
    .state('dashboard', {
      url: '/dashboard',
      abstract: true,
      templateUrl: 'templates/tabs.html'
    })

    // Each tab has its own nav history stack:
    .state('dashboard.dash', {
      url: '/dash',
      views: {
        'dashboard-dash': {
          templateUrl: 'templates/tab-dash.html',
          controller: 'DashCtrl'
        }
      },
  		data: {
  	    requireLogin: true
      }
    })

    .state('dashboard.pieces', {
      url: '/pieces',
      views: {
        'dashboard-pieces-index': {
          templateUrl: 'templates/dashboard/pieces/index.html',
          controller: 'Dashboard.PiecesController'
        }
      },
  		data: {
  	    requireLogin: true
      }
    })

    .state('dashboard.chats', {
        url: '/chats',
        views: {
          'dashboard-chats': {
            templateUrl: 'templates/tab-chats.html',
            controller: 'ChatsCtrl'
          }
        }
      })
      .state('dashboard.chat-detail', {
        url: '/chats/:chatId',
        views: {
          'dashboard-chats': {
            templateUrl: 'templates/chat-detail.html',
            controller: 'ChatDetailCtrl'
          }
        }
      })

    .state('dashboard.account', {
      url: '/account',
      views: {
        'dashboard-account': {
          templateUrl: 'templates/tab-account.html',
          controller: 'AccountCtrl'
        }
      }
    });

  	//$urlRouterProvider.

    // if none of the above states are matched, use this as the fallback
  	//  $urlRouterProvider.otherwise('/tab/dash');
    $urlRouterProvider.otherwise('/users/login');

  });
