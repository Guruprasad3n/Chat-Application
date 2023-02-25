const {Schema, model, default: mongoose} = require("mongoose");
const userSchema = new Schema({
name:{
    type:String,
    require:true
},
email:{
    type:String,
    require:true,
    nique:true
},
password:{
    type:String,
    require:true
},
phone:{
    type:Number,
    require:true,
    // unique:true
},
pic:{
    type:String,
    require:true,
    default:"https://t3.ftcdn.net/jpg/01/18/01/98/360_F_118019822_6CKXP6rXmVhDOzbXZlLqEM2ya4HhYzSV.jpg"
},



},{
    timestamps:true
})
const userModel = model("User", userSchema)

module.exports = userModel