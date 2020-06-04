const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const MongoClient = require('mongodb').MongoClient

const Comments = require('./models/testSchema');

const db = mongoose.connection;


//CONNECTION ERROR HANDLING
//initial connection errors
mongoose.connect('mongodb://localHost/myNewDB', {useNewUrlParser:true,useUnifiedTopology: true})
  .catch(error => handleError(error))
//after initial connection errors
mongoose.connection.on('error',err =>{
  logError(err);
})

//INITIAL CONNECTION, NO ERRORS TO HANDLE
db.once('open', ()=>{
  const comment = new Comments({
    author:'another one',
    body:'good but not the goodest',
    date: Date.now()
  })

  comment.save((err,document)=>{
    if(err) return handleError(err)
    console.log(document)
  })
})


const app = express()


//middleware
app.use(bodyParser.urlencoded({ extended: true }))



app.get('/',(req,res)=>{
  res.render('index')
});

app.listen(3000)
