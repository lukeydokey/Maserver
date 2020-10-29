const express = require('express');
const router = express.Router();

//싫어요 + 1
router.get('/:pid/:like/:dislike', (req, res)=> {
  var place_id = req.params.pid;
  var place_like = Number(req.params.like);
  var place_dislike = Number(req.params.dislike) + 1;
  if (place_like != 0) {
    var place_recomrate = ((place_like) / ( place_like + place_dislike) * 100).toFixed(2);
  }
  console.log('<<places/dislike>>');
  const { Places } = require('../../models');

  if(place_like != 0) {
    Places.update(
      {
      dislike : place_dislike ,
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
  }
  else{
    Places.update(
      {
      dislike : place_dislike
    },
      {
      where : {
        id : place_id
      }
    }).then((places)=> {
      res.json({"result" : 'ok' , "places" : places});
    }).catch(()=>{
      res.json({"result" : 'failed'});
    });
  }

});

module.exports = router;
