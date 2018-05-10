const mongoose = require('mongoose');

const crawlSchema = new mongoose.Schema({
  name: { type: String },
  date: { type: Date },
  tubeLine: { type: String },
  startPoint: {
    name: { type: String },
    location: {
      lat: { type: Number },
      lng: { type: Number }
    }
  },
  endPoint: {
    name: { type: String },
    location: {
      lat: { type: Number },
      lng: { type: Number }
    }
  },
  pubs: []
// Will later need to create the pubs schema once we know what information we can get from the api
});

module.exports = mongoose.model('Crawl', crawlSchema);
