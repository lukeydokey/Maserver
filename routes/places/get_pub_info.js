const express = require('express');
const router = express.Router();

//술집 정보 받아오기
router.get('/', (req, res)=> {
  console.log('<<places/get_pub_info>>');
  const { Places } = require('../../models');

  Places.findAll({
    where : {
      category : "pub"
    }
  }).then((places)=> {
    res.json({"result" : 'ok' , "places" : places});
  }).catch(()=>{
    res.json({"result" : 'failed'});
  });


});

module.exports = router;
