import angular from 'angular';

//3rd party dependencies
import '@uirouter/angularjs';

//our modules
import Router from './config/router';


import CrawlsShowCtrl from './controllers/crawls/show';
import CrawlsEditCtrl from './controllers/crawls/edit';
import StationsIndexCtrl from './controllers/stations/index';


//models
import gMap from './directives/gMap.js';
import Crawl from './models/crawl';



angular.module('crawls', ['ui.router', 'satellizer'])
  .config(Router)
  .controller('StationsIndexCtrl', StationsIndexCtrl)
  .controller('CrawlsShowCtrl', CrawlsShowCtrl)
  .controller('CrawlsEditCtrl', CrawlsEditCtrl)
  .directive('gMap', gMap)
  .service('Crawl', Crawl);
