const Crawl = require('../models/crawl');

function crawlsCreate(req, res, next){
// (createdBy property automatically becomes current user)
//  req.body.createdBy = req.currentUser
  Crawl
    .create(req.body)
    .then(crawl => res.status(201).json(crawl))
    .catch(next);
}

function crawlsShow(req, res, next){
  Crawl
    .findById(req.params.id)
    .exec()
    .then(crawl => {
      if(!crawl) return res.sendStatus(404);
      res.json(crawl);
    })
    .catch(next);
}

function crawlsUpdate(req, res, next){
  Crawl
    .findById(req.params.id)
    .exec()
    .then(crawl => {
      if(!crawl) return res.sendStatus(404);
      return Object.assign(crawl, req.body);
    })
    .then(crawl => crawl.save())
    .then(crawl => res.json(crawl))
    .catch(next);
}

function crawlsDelete(req, res, next){
  Crawl
    .findById(req.params.id)
    .exec()
    .then(crawl => {
      if(!crawl) return res.sendStatus(404);
      return crawl.remove();
    })
    .then(() => res.sendStatus(204))
    .catch(next);
}

module.exports = {
  create: crawlsCreate,
  show: crawlsShow,
  update: crawlsUpdate,
  delete: crawlsDelete
};
