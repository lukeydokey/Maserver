const express = require('express');
const router = express.Router();

//식당 정보 받아오기
router.get('/', (req, res)=> {
  console.log('<<places/get_restau_info>>');
  const { Places } = require('../../models');

  Places.findAll({

  }).then((places)=> {
    res.json({"result" : 'ok' , "places" : places});
  }).catch(()=>{
    res.json({"result" : 'failed'});
  });


});

module.exports = router;
