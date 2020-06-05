const Comments = require('../../models/testSchema')

 //(string) --> string
module.exports = function getComment(name){
  Comments.find({author:{$eq:`${name}`}})
    .then(doc=>{
      console.log(doc)
    })
    .catch(err=>{
      console.error(err)
    })
}
