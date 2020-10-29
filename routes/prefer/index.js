const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('index page');
});

//user routing
router.use('/update', require('./update'));
router.use('/get_prefer_info', require('./get_prefer_info'));

module.exports = router;
