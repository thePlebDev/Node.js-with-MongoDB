const express = require('express');
const User = require('./models/users');

const router = express.Router();

router.use((req,res,next)=>{
  res.locals.currentUser = req.user;
  res.locals.errors = req.flash("error");
  res.locals.infos = req.flash('info')
  .next();
});

router.get('/', function(req,res,next){
  User.find()
  .sort({ createdAt: 'descending' })
  .exect(function(err,users){
    if(err){return next(err); }
    res.render('index',{users:users})
  });
});

module.exports = router;
