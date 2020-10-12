const express = require('express');
const router = express.Router();

//식당 정보 받아오기
router.get('/', (req, res)=> {
  console.log('<<place/get_restau_info>>');
  const { Place } = require('../../models');

  Place.findAll({
    
  }).then((place)=> {
    res.json({"result" : 'ok' , "place" : place});
  }).catch(()=>{
    res.json({"result" : 'failed'});
  });


});

module.exports = router;
