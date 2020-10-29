const express = require('express');
const router = express.Router();

//좋아요 + 1
router.get('/:pid/:like/:dislike', (req, res)=> {
  var place_id = req.params.pid;
  var place_like = Number(req.params.like) + 1;
  var place_dislike = Number(req.params.dislike);
  var place_recomrate = ((place_like) / ( place_like + place_dislike) * 100).toFixed(2);
  console.log('<<places/like>>');
  const { Places } = require('../../models');

  Places.update(
    {
    like : place_like,
    recomrate : place_recomrate
  },
    {
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
