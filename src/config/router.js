Router.$inject = ['$stateProvider', '$urlRouterProvider'];

function Router($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/home.html'
    })
    .state('crawlsShow', {
      url: '/crawls/:id',
      templateUrl: 'views/crawls/show.html',
      controller: 'CrawlsShowCtrl as crawlsShow'
    })
    .state('stationsIndex', {
      url: '/stations',
      templateUrl: 'views/stations/index.html',
      controller: 'StationsIndexCtrl as stationsIndex'
    })
    .state('crawlsEdit', {
      url: '/crawls/:id/edit',
      templateUrl: 'views/crawls/edit.html',
      controller: 'CrawlsEditCtrl as crawlsEdit'
      // need to add resolve: { secureState} === James
    })
    .state('crawlsNew', {
      url: '/crawls/new',
      templateUrl: 'views/crawls/new.html',
      controller: 'CrawlsNewCtrl as crawlsNew'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'views/auth/login.html',
      controller: 'LoginCtrl as login'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'views/auth/register.html',
      controller: 'RegisterCtrl as register'
    });

  $urlRouterProvider.otherwise('/');

}

export default Router;
