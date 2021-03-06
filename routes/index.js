const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('index page');
});

//user routing
router.use('/places', require('./places/index'));
router.use('/user', require('./user/index'));
router.use('/prefer', require('./prefer/index'));

module.exports = router;
