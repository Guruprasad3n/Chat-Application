const bcrypt = require('bcryptjs')

const {Schema, model, default: mongoose} = require("mongoose");
const userSchema = new Schema({
name:{
    type:String,
    require:true
},
email:{
    type:String,
    require:true,
    unique:true
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
    default:"https://t3.ftcdn.net/jpg/01/18/01/98/360_F_118019822_6CKXP6rXmVhDOzbXZlLqEM2ya4HhYzSV.jpg"
},



},{
    timestamps:true
})

userSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.pre('save', async function (next){
if(!this.isModified){
    next()
}
const salt = await bcrypt.genSalt(10);
this.password = await bcrypt.hash(this.password, salt)
});




const userModel = model("User", userSchema)

module.exports = userModel