import angular from 'angular';

//3rd party dependencies
import '@uirouter/angularjs';

//our modules
import Router from './config/router';


import CrawlsShowCtrl from './controllers/crawls/show';


//models

import Crawl from './models/crawl';



angular.module('crawls', ['ui.router', 'satellizer'])
  .config(Router)

  .controller('CrawlsShowCtrl', CrawlsShowCtrl)

  .service('Crawl', Crawl);
