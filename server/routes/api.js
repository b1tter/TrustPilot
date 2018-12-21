const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Website = require ('../models/website');
const Review = require ('../models/review');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
let ObjectId = mongoose.Types.ObjectId;

const db = "mongodb://admintrustpilot:asd123@ds247061.mlab.com:47061/trustpilot";
mongoose.Promise = global.Promise;

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

module.exports = router;

router.get('/websites', (req, res) => {
  console.log('get request for website');
  Website.find({}).exec(function (err, websites) {
    if(err){
      console.log("Error getting websites")
    } else {
      res.json(websites)
    }
  })
});

router.get('/reviews', (req, res) => {
  console.log("getting the reviews");
  Review.find({}).exec(function (err, reviews) {
    if(err){
      console.log("can`t get reviews")
    } else {
      res.json(reviews)
    }
  })
});

router.get('/reviews/id', (req, res) => {
  Review.findById(req.params.id, (err, review) => {
    if(err){
      console.log('review id error')
    } else {
      res.json(review)
    }
  });
});

router.get('/api/websites/:id', (req, res) => {
  console.log('Get request for one website');
  Website.findOne({_id: new ObjectId(req.params.id)}, function (err, website) {
    if(err){
      console.log("Error getting the website")
    } else {
      res.status(200).json(website)
    }
  })
});

router.post('/website', function (req, res) {
  let newWebsite = new Website();
  newWebsite.websiteName = req.body.websiteName;
  newWebsite.websiteReviews = req.body.websiteReviews;
  newWebsite.save((err, nsertedWebsite) => {
    if(err){
      console.log("Error saving website")
    } else {
      res.json(nsertedWebsite);
    }
  });
});

router.post('/review', (res, req) => {
  console.log('new review');
  const newReview = new Review();
  newReview.websiteId = req.body.websiteId;
  newReview.OwnerEmail = req.body.OwnerEmail;
  newReview.reviewComment = req.body.reviewComment;
  newReview.save(function (err, insertedReview) {
    if(err) {
      console.log("cnat inserted")
    } else {
      res.json(insertedReview)
    }
  })
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


