var express = require('express');
var router = express.Router();

// importing global database connection file here
var shared = require('../database/db');


// For Registering users into the database
router.post('/register', function (req, res) {
  var uid = req.body.uid;
  var pwd = req.body.pwd;
  var email = req.body.email;
  var phone = req.body.phone;

  //Using global sql connection connecting to the backend    
  var con = shared.getConnection();

  con.connect(function (err, suc) {
    if (err) {
      res.send('db connection error');
    }
  })


  var q = "insert into users(uid,pwd,email,phone) values('" + uid + "','" + pwd + "','" + email + "','" + phone + "')";

  con.query(q, function (e, s) {
    if (e) {
      res.send(e);
    } else {
      res.send(s);
    }
  })
})

router.post('/login', function (req, res) {
  var uid = req.body.uid;
  var pwd = req.body.pwd;

  var con = shared.getConnection();

  con.connect(function (err, suc) {
    if (err) {
      res.send('db connection error');
    }
  })

  var q = "select * from users where uid='" + uid + "' and pwd='" + pwd + "'";

  con.query(q, function (e, r) {
    if (e) {
      res.send(e);
    } else {
      res.send(r);
    }
  });

  router.post('/capttimer', function (req, res) {
    var uid = req.body.uid;
    var id = req.body.id;
    var capt = req.body.capt;
    var des = req.body.des;
  
    //Using global sql connection connecting to the backend    
    var con = shared.getConnection();
  
    con.connect(function (err, suc) {
      if (err) {
        res.send('db connection error');
      }
    })
  
    var q = "insert into users(capt,desc) values(" + capt + ",'" + des + "'where uid='"+uid+"')";
  
    con.query(q, function (e, s) {
      if (e) {
        res.send(e);
      } else {
        res.send(s);
      }
    })
  })

});

module.exports = router;
