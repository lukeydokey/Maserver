const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.send('index page');
})

//user routing
router.use('/get_restau_info', require('./get_restau_info'));

module.exports = router;
