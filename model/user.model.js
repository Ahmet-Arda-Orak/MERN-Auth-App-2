const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const uniqueValidator = require('mongoose-unique-validator');
const router = require("../routers/user.router");

const userSchema = mongoose.Schema({
    userName:{
        type:String,
        required:true,
        minlenght:2
    },
    lastName:{
        type:String,
        required:true,
        minlenght:2
    },
    email:{
        type:String,
        required:true,
        minlenght:2,
        unique:true
    },
    password:{
        type:String,
        minlenght:6,
        required:true,
    }

})

userSchema.pre("save",async function(next){
    const user = this;
    if(user.isModified("password")){
        user.password = await bcrypt.hash(user.password,10);
    }
    next();
})

userSchema.statics.findUser = async function (email, password){
    const user = await User.findOne({email})
    if(!user){
        return;
    }
    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch){
        return;
    }
    return user;
}


userSchema.plugin(uniqueValidator);

const User = mongoose.model("Users",userSchema);

module.exports = User;