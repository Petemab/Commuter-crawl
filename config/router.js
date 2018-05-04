const router = require('express').Router();
const crawls = require('../controllers/crawls');

router.route('/crawls')
  .post(crawls.create);

router.route('/crawls/:id')
  .get(crawls.show)
  .put(crawls.update)
  .delete(crawls.delete);

module.exports = router;
