



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
    });

  $urlRouterProvider.otherwise('/');

}
