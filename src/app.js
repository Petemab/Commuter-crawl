import angular from 'angular';

//3rd party dependencies
import '@uirouter/angularjs';

//our modules
import Router from './config/router';


import CrawlsShowCtrl from './controllers/crawls/show';
import StationsIndexCtrl from './controllers/stations/index';


//models
import gMap from './directives/gMap.js';
import Crawl from './models/crawl';



angular.module('crawls', ['ui.router', 'satellizer'])
  .config(Router)
  .controller('StationsIndexCtrl', StationsIndexCtrl)
  .controller('CrawlsShowCtrl', CrawlsShowCtrl)
  .directive('gMap', gMap)
  .service('Crawl', Crawl);
