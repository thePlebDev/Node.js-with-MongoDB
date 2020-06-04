const mongoose = require('mongoose')
const Schema = mongoose.Schema

// the Schema
const commentSchema = new mongoose.Schema({
  author: String,
  body: String,
  date: { type:Date, default:Date.now()}

})

//model, which is a compiled schema, we call mongoose.model()
module.exports = mongoose.model('Comment',commentSchema);
