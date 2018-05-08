const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');

const Crawl = require('../models/crawl');
const User = require('../models/user');

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase();

  Crawl.create([{

    name: 'GA crawl',
    date: 11-11-1994,
    line: 'central',
    start: 'mile end',
    end: 'oxford st',
    pubs: []
  },{
    name: 'central crawl',
    date: 11-11-1994,
    line: 'central',
    start: 'mile end',
    end: 'oxford st',
    pubs: []
  },{
    name: 'westside crawl',
    date: 11-11-1994,
    line: 'central',
    start: 'mile end',
    end: 'oxford st',
    pubs: []
  }]);

  User.create([{

    username: 'James',
    email: 'James@ga.co',
    password: 'pass'
  },{
    username: 'Dan',
    email: 'Dan@ga.co',
    password: 'pass'
  },{
    username: 'Stacey',
    email: 'Stacey@ga.co',
    password: 'pass'

  }])

    .then(crawls => console.log(`${crawls.length} crawls created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());

});
