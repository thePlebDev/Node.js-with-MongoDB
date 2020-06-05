const Comments = require('../../models/testSchema');

module.exports =function dude(){
  //trying to create a document
  const comment = new Comments({
    author: 'bob',
    body: 'find me',
    date: Date.now()
  })

  comment.save((err,document)=>{
    if(err)return console.err(err);
    console.log(document)
  })

}
