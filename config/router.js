const router = require('express').Router();
const crawls = require('../controllers/crawls');
const auth = require('../controllers/auth');

router.route('/crawls')
  .get(crawls.index)
  .post(crawls.create);

router.route('/crawls/:id')
  .get(crawls.show)
  .put(crawls.update)
  .delete(crawls.delete);

router.post('/register', auth.register);
router.post('/login', auth.login);

module.exports = router;
