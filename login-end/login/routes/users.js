var express = require('express');
var User = require('../models/lemon')
var router = express.Router();

/* GET users listing. */
router.post('/register', async (req, res, next) =>{
  try {
    let users = await User.find({
      $or:[{
        "name": req.body.name
      },{
        "studentId": req.body.studentId
      }]
    })
    if (users && users.length){
      res.status(200).json({
        success: true,
        code: 500,
        message: '姓名或学号重复！'
      })
    } else {
      try {
        let data = await new User(req.body).save()
        // 注册成功，使用 Session 记录用户的登陆状态
        req.session.user = data
        res.status(200).json({
          success: true,
          code: 200,
          message: '注册登录成功！'
        })
      } catch (err) {
        return next(err)
      }
    }
  } catch (err) {
    return next(err)
  }
});

router.post('/login', async (req, res, next) => {
  try {
    let users = await User.find({
      "name": req.body.name,
      "studentId": req.body.studentId

    })
    if (users && (users.length > 0)){
      req.session.user = users[0]
      res.status(200).json({
        success: true,
        code: 200,
        message: '登录成功！'
      })
    } else {
      res.status(200).json({
        success: true,
        code: 500,
        message: '姓名或学号错误！'
      })
    }
  } catch (err) {
    return next(err)
  }
})

module.exports = router;
