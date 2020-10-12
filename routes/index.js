const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('index page');
});

//user routing
router.use('/place', require('./place/index'));

module.exports = router;