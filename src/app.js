import angular from 'angular';

//styles
import './scss/style.scss';

//3rd party dependencies
import '@uirouter/angularjs';
import 'satellizer';
import 'angular-messages';

//our modules
import Router from './config/router';
import Auth from './config/auth';



import CrawlsShowCtrl from './controllers/crawls/show';
import CrawlsNewCtrl from './controllers/crawls/new';
import CrawlsEditCtrl from './controllers/crawls/edit';
import StationsIndexCtrl from './controllers/stations/index';
import RegisterCtrl from './controllers/auth/register';
import LoginCtrl from './controllers/auth/login';


//models
import gMap from './directives/gMap.js';
import Crawl from './models/crawl';



angular.module('crawls', ['ui.router', 'satellizer', 'ngMessages'])
  .config(Router)
  .config(Auth)
  .controller('StationsIndexCtrl', StationsIndexCtrl)
  .controller('CrawlsShowCtrl', CrawlsShowCtrl)
  .controller('CrawlsEditCtrl', CrawlsEditCtrl)
  .controller('CrawlsNewCtrl', CrawlsNewCtrl)
  .controller('RegisterCtrl', RegisterCtrl)
  .controller('LoginCtrl', LoginCtrl)
  .directive('gMap', gMap)
  .service('Crawl', Crawl);
