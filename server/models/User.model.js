const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  firstName:{
    type:String,
    required:true,
    trim:true,
    min:3,
    max:30
  },
  lastName:{
    type:String,
    required:true,
    trim:true,
    min:3,
    max:30
  },
  email:{
    type:String,
    required:true,
    trim:true,
    min:3,
    max:30,
    unique:true,
    lowercase:true
  },
  hashPassword:{
    type:String,
    required:true,
    trim:true,
    min:3,
    max:15,
  },
  expense_categories: [
    {
      name: { type: String, trim: true },
    }
  ],
  income_categories: [
    {
      name: { type: String, trim: true },
      
    }
  ],
  profilePicture:{type:String},
},{timestamps:true})


userSchema.virtual('password').set(function(password){
  this.hashPassword = bcrypt.hashSync(password, 10);
})


userSchema.virtual('fullname').get(function(){
  return `${this.firstName} ${this.lastName}`;
})

userSchema.methods = {
  authenticate: function(password){
    return bcrypt.compareSync(password , this.hashPassword)
  
  }
}

module.exports = mongoose.model('User' , userSchema);