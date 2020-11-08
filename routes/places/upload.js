const express = require('express');
const router = express.Router();

//정보 업로드
router.post('/', (req, res) =>{
    console.log('<<places/upload>>');
    const { Places } = require('../../models');
    Places.create({
        placename : req.body.placename,
        category : req.body.category,
        like : req.body.like,
        dislike : req.body.dislike,
        recomrate : req.body.recomrate,
        address : req.body.address,
        phoneNum : req.body.phoneNum
    }).then(() => {
        res.send(true);
    }).catch(()=>{
        res.send(false);
    });
});

module.exports = router;
