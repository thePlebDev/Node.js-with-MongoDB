const Comment = require('../../models/testSchema')


module.exports = function deleteComment(name){
  Comment.deleteOne(
    {author:{ $eq:`${name}` }
  })
  .then(doc=>{
    console.log(doc)
  })
  .catch(err =>{
    console.error(err)
  })
}
