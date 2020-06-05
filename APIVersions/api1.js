const express = require('express');
const api = express.Router()

const createComment = require('../utils/createComment/index.js');
const getAllComments = require('../utils/GetAllComments/index.js');
const getComment = require('../utils/GetComment/index.js');
const deleteElement = require('../utils/DeleteComment/index.js');

api.get('/getallcomments',(req,res)=>{
  getAllComments()
  res.send(' ALL COMMENTS GOTTEN')
})

api.get('/getcomment/:author',(req,res)=>{
  const author = req.params.author;
  getComment(author)
  res.send('WE GOT THE SPECIFICE COMMENT ')
})

api.post('/postcomment',(req,res)=>{
  createComment()
  res.send('Just created a comment ')
})

api.delete('/deletecomment/:author',(req,res)=>{
  let {author,body} = req.params
  deleteElement(author)
  res.send('JUST DELETED A COMMENT')
})

module.exports = api;
