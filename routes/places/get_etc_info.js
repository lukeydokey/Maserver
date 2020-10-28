const express = require('express');
const router = express.Router();

//기타 정보 받아오기
router.get('/', (req, res)=> {
  console.log('<<places/get_etc_info>>');
  const { Places } = require('../../models');

  Places.findAll({
    where : {
      category : "etc"
    }
  }).then((places)=> {
    res.json({"result" : 'ok' , "places" : places});
  }).catch(()=>{
    res.json({"result" : 'failed'});
  });


});

module.exports = router;
