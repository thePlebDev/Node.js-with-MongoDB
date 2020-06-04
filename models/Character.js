const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Schema
const characterSchema = new Schema({
  name: String,
  ultimate: String
})


//Model
module.exports = mongoose.model('Character',characterSchema)
