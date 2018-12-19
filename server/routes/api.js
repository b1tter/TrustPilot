const express = require('express');
const router = express.Router();
const User = require('../models/user');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const db = "mongodb://admintrustpilot:asd123@ds247061.mlab.com:47061/trustpilot";

mongoose.connect(db, { useNewUrlParser: true }, err => {
  if (err) {
    console.error('Error! : ' + err);
  } else {
    console.log("Connected to mLab")
  }
});

router.get('/', (req, res) =>{
  res.send('From API ROUTE')
});

router.post('/register', (req, res) => {
  let userData = req.body;
  let user = new User(userData);
  user.save((err, registeredUser) => {
    if (err) {
      console.log(err)
    } else {
      let payload = { subject: registeredUser._id};
      let token = jwt.sign(payload, 'secretKey');
      res.status(200).send({token})
    }
  });
});

router.post('/login', (req, res) => {
  let userData = req.body;

  //login api
  User.findOne({email: userData.email}, (error, user) => {
    if (error) {
      console.log(error)
    } else {
      if (!user) {
        res.status(401).send('Invalid email')
      } else {
        if(user.password !== userData.password) {
          res.status(401).send('Invalid password')
        } else {
          let payload = {subject: user._id};
          let token = jwt.sign(payload, 'secretKey');
          res.status(200).send({token})
        }
      }
    }
  })
});

//return hard coded events
router.get('/websites', (req, res) => {
  let websites = [
    {
      "_id": "1",
      "name": "google",
      "review": "5"
    },{
      "_id": "2",
      "name": "facebook",
      "review": "5"
    },{
      "_id": "3",
      "name": "instagram",
      "review": "5"
    }
  ];
  res.json(websites)
});

module.exports = router;
