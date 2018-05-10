const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');

const Crawl = require('../models/crawl');
const User = require('../models/user');

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase();

  Crawl.create([{

    name: 'Sunday Crawl',
    date: '2018-05-13',
    tubeLine: 'District',
    startPoint: {
      name: 'Mile End',
      location: {
        lat: 51.525122,
        lng: -0.03364
      }
    },
    endPoint: {
      name: 'Tower Hill',
      location: {
        lat: 51.509971,
        lng: -0.076546
      }
    },
    pubs: [ {
      name: 'New Globe Hotel',
      address: '359 Mile End Road, London',
      location: {
        lat: 51.5244954,
        lng: -0.03679910000005293
      },
      image: 'https://lh3.googleusercontent.com/p/AF1QipOu8XsWxVEFC8OzquTzn6g3kp0QEkgYrueoymCe=w100-h100-k'
    }, {
      name: 'Genesis Cinema',
      address: '93-95 Mile End Road, London',
      location: {
        lat: 51.521115,
        lng: -0.05110709999996743
      },
      image: 'https://lh3.googleusercontent.com/p/AF1QipN5DKVNp83VQ1HNNyEPfshvmRwoylRbztGy0VSH=w100-h100-k'
    }, {
      name: 'The Tower Hotel',
      address: 'Saint Katharine\'s Way, London',
      location: {
        lat: 51.5064438,
        lng: -0.0737950999999839
      },
      image: 'https://lh3.googleusercontent.com/p/AF1QipMB9P0hhSbBoEzYaHb3snHML96re6ugpqEvj8n7=w100-h100-k'
    } ]},
  {
    name: 'Birthday Crawl',
    date: '2018-06-08',
    tubeLine: 'Central',
    startPoint: {
      name: 'Holborn',
      location: {
        lat: 51.51758,
        lng: -0.120475
      }
    },
    endPoint: {
      name: 'Bond Street',
      location: {
        lat: 51.514304,
        lng: -0.149723
      }
    },
    pubs: [ {
      name: 'The Enterprise',
      address: '38 Red Lion Street, London',
      location: {
        lat: 51.52023029999999,
        lng: -0.11744920000001002
      },
      image: 'https://lh3.googleusercontent.com/p/AF1QipNgKZLUWVBAy80qWnMBDtThFSfQUels00E1Vm0O=w100-h100-k'
    }, {
      name: 'The Bar',
      address: '19-21 Great Marlborough Street, London',
      location: {
        lat: 51.5143566,
        lng: -0.13946820000001026
      },
      image: 'https://lh3.googleusercontent.com/p/AF1QipNkb6rlJdMR_YQz2mdd8DAnIAhsPKjoqggHcxI7=w100-h100-k'
    }, {
      name: 'Mayfair Garden',
      address: '8-10 North Audley Street, London',
      location: {
        lat: 51.5127918,
        lng: -0.15299049999998715
      },
      image: 'https://lh3.googleusercontent.com/p/AF1QipNwktH8kmolvoT2mV_orUs_yBQjiX5n42Kp5PxF=w100-h100-k'
    } ]}
  ])
    .then(crawls => console.log(`${crawls.length} crawls created`));

  User.create([{

    username: 'James',
    email: 'James@ga.co',
    password: 'pass',
    passwordConfirmation: 'pass'
  },{
    username: 'Dan',
    email: 'Dan@ga.co',
    password: 'pass',
    passwordConfirmation: 'pass'
  },{
    username: 'Stacey',
    email: 'Stacey@ga.co',
    password: 'pass',
    passwordConfirmation: 'pass'
  }])

    .then(users => console.log(`${users.length} users were created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());

});
