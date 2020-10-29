const express = require('express');
const router = express.Router();

//장소 정보 받아오기
router.get('/:pid', (req, res)=> {
  var place_id = req.params.pid;
  console.log('<<places/get_place/'+place_id+'>>');
  const { Places } = require('../../models');

  Places.findOne({
    where : {
      placeid : place_id
    }
  }).then((places)=> {
    res.json({"result" : 'ok' , "places" : places});
  }).catch(()=>{
    res.json({"result" : 'failed'});
  });


});

module.exports = router;
