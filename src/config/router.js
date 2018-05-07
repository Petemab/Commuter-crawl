



Router.$inject = ['$stateProvider', '$urlRouterProvider'];

function Router($stateProvider, $urlRouterProvider){
  $stateProvider
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
    });

  $urlRouterProvider.otherwise('/');

}
