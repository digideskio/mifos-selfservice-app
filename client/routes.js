angular.module('Mifos_Self_Service')
  .config(function ($urlRouterProvider, $stateProvider, $locationProvider, USER_ROLES) {
    $locationProvider.html5Mode(true);

    $stateProvider
      .state('app', {
        url: '/app',
        abstract: true,
        //templateUrl: 'app/components/common/main.html',
        controller: 'MainCtrl',
        controllerAs: 'vm'
      })
      .state('app.dashboard', {
        url: '/dashboard',
        //templateUrl: 'app/components/common/dashboard.html',
        controller: 'MainCtrl',
        controllerAs: 'vm',
        data: {
          title: 'Profile',
          authorizedRoles: [USER_ROLES.user]
        }
      })
      .state('app.clients', {
        url: '/clients',
        //templateUrl: 'app/components/client/clients.html',
        controller: 'ClientCtrl',
        controllerAs: 'vm',
        data: {
          title: 'Clients',
          authorizedRoles: [USER_ROLES.user]
        }
      })
      .state('app.viewclient', {
        url: '/viewclient/:clientId',
        //templateUrl: 'app/components/client/viewclient.html',
        controller: 'ViewClientCtrl',
        controllerAs: 'vm',
        data: {
          title: 'View Client',
          authorizedRoles: [USER_ROLES.user]
        }
      })
      .state('login', {
        url: '/login',
        templateUrl: () => {
          if (Meteor.isCordova) {
            return '/packages/hybrid-app/auth/login/login.html';
          }
          else {
            return '/packages/web-app/auth/login.html';
          }
        },
        controller: 'LoginCtrl',
        controllerAs: 'vm',
        data: {
          title: 'Login'
        }
      });

    $urlRouterProvider.otherwise("/login");
  })
  // .run(function ($rootScope, $state) {
  //   $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
  //     if (error === 'AUTH_REQUIRED') {
  //       $state.go('parties');
  //     }
  //   });
  // });