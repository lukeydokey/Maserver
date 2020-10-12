const express = require('express');
const router = express.Router();

//식당 정보 받아오기
router.post('/', (req, res)=> {
  console.log('<<place/get_restau_info>>');
  const { Place } = require('../../models');
  Place.findAll({}).then(()=> {
    res.send(true);
  }).catch(()=>{
    res.send(false);
  });
});

module.exports = router;
