secureState.$inject



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
    // this needds tobe added but i dont know the  branch name


    // .state('crawlsNew', {
    //   url: '/crawls/new',
    //   templateUrl: 'views/crawls/new.html',
    //   controller: 'CrawlsNewCtrl as crawlsNew'
    // });

  $urlRouterProvider.otherwise('/');

}
