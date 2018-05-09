const mongoose = require('mongoose');

const crawlSchema = new mongoose.Schema({
  name: { type: String },
  date: { type: String },
  line: { type: String },
  start: { type: String },
  end: { type: String },
  pubs: []
// Will later need to create the pubs schema once we know what information we can get from the api
});

module.exports = mongoose.model('Crawl', crawlSchema);
