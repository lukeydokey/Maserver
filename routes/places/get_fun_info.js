const express = require('express');
const router = express.Router();

//재밌는 장소 정보 받아오기
router.get('/', (req, res)=> {
  console.log('<<places/get_fun_info>>');
  const { Places } = require('../../models');

  Places.findAll({
    where : {
      category : "fun"
    }
  }).then((places)=> {
    res.json({"result" : 'ok' , "places" : places});
  }).catch(()=>{
    res.json({"result" : 'failed'});
  });


});

module.exports = router;
