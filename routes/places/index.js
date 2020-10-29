const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.send('index page');
})

//user routing
router.use('/get_restau_info', require('./get_restau_info'));
router.use('/get_fun_info', require('./get_fun_info'));
router.use('/get_pub_info', require('./get_pub_info'));
router.use('/get_etc_info', require('./get_etc_info'));
router.use('/get_place', require('./get_place'));
router.use('/upload', require('./upload'));

module.exports = router;
