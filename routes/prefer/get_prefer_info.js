const express = require('express');
const router = express.Router();

//선호 정보 받아오기
router.get('/:uid/:pid', (req, res)=> {
  var user_id = req.params.uid;
  var place_id = req.params.pid;
  console.log('<<prefer/get_prefer_info/'+user_id+'/'+place_id+'>>');
  const { Prefer } = require('../../models');

  Prefer.findOne({
    where : {
      userid : user_id,
      placeid : place_id
    }
  }).then((prefer)=> {
    res.json({"result" : 'ok' , "prefer" : prefer});
  }).catch(()=>{
    res.json({"result" : 'failed'});
  });


});

module.exports = router;
