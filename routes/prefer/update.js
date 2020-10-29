const express = require('express');
const router = express.Router();

// 선호 상태 업데이트
router.get('/:uid/:pid/:like/:dislike', (req, res)=> {
  var user_id = req.params.uid;
  var place_id = req.params.pid;
  var place_like = Number(req.params.like);
  var place_dislike = Number(req.params.dislike);
  console.log('<<prefer/update>>');
  const { Prefer } = require('../../models');

  Prefer.upsert(
    {
    userid : user_id,
    placeid : place_id,
    liked : place_like,
    disliked : place_dislike,
  },
    {
    where : {
      placeid : place_id,
      userid : user_id
    }
  }).then((prefer)=> {
    res.json({"result" : 'ok' , "prefer" : prefer});
  }).catch(()=>{
    res.json({"result" : 'failed'});
  });


});

module.exports = router;
