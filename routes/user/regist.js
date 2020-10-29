const express = require('express');
const router = express.Router();

//정보 업로드
router.post('/', (req, res) =>{
    var user_id = req.body.userid;
    console.log('<<user/regist>>');
    const { User } = require('../../models');

    User.upsert(
      {
      userid : user_id
    }).then((user)=>{
      res.send("welcome");
    }).catch(()=>{
      res.json({"result" : 'failed'});
    });

});

module.exports = router;
