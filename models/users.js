const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs');

const SALT_FACTOR = 10;

const userSchema = mongoose.Schema({
  username:{ type: String,require:true,unique:true},
  password:{ type: String,require:true},
  createdAt:{ type: Date,default: Date.now},
  displayName:String,
  bio:String,
})

userSchema.methods.name = ()=>{
  return this.displayName || this.username
}

let noop = ()=>{}

userSchema.pre('save',(done)=>{
  let user = this;
  if(!user.isModified("password")){
    return done();
  }
  bcrypt.genSalt(SALT_FACTOR, (err,salt)=>{
    if(err){return done(err)}
    bcrypt.hash(user.password,salt,noop,(err,hashPassword)=>{
      if(err){return done(err)}
      user.password = hashedPassword;
      done();
    });
  });
});

userSchema.methods.checkPassword = (guess,done) =>{
  bcrypt.compare(guess, this.password,(err,isMatch)=>{
    done(err,isMatch);
  });
};

const User = mongoose.model('User', userSchema);
module.exports = User;
