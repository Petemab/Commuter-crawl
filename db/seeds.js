const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');

const Crawl = require('../models/crawl');

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase();

  Crawl.create([{
    name: 'Jeff',
    date: '32',
    location: 'Scunthorpe'
  },{
    teamMember: 'Noel',
    age: '32',
    location: 'Ipswich'
  },{
    teamMember: 'Ruta',
    age: '32',
    location: 'Brighton'
  }]);



});
