const Comments = require('../../models/testSchema')

module.exports = function getAllComments(){
  Comments.find({})
    .then(doc=>{
      console.log(doc)
    })
    .catch(err =>{
      console.error(err)
    })
}
