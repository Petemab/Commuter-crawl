import angular from 'angular';

//styles
import './scss/style.scss';

//3rd party dependencies
import '@uirouter/angularjs';
import 'satellizer';

//our modules
import Router from './config/router';




import CrawlsShowCtrl from './controllers/crawls/show';
import CrawlsEditCtrl from './controllers/crawls/edit';
import StationsIndexCtrl from './controllers/stations/index';
import RegisterCtrl from './controllers/auth/register';
import LoginCtrl from './controllers/auth/login';


//models
import gMap from './directives/gMap.js';
import Crawl from './models/crawl';



angular.module('crawls', ['ui.router', 'satellizer'])
  .config(Router)
  .controller('StationsIndexCtrl', StationsIndexCtrl)
  .controller('CrawlsShowCtrl', CrawlsShowCtrl)
  .controller('CrawlsEditCtrl', CrawlsEditCtrl)
  .controller('RegisterCtrl', RegisterCtrl)
  .controller('LoginCtrl', LoginCtrl)
  .directive('gMap', gMap)
  .service('Crawl', Crawl);
