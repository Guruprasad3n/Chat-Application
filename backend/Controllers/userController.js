const asyncHandler = require("express-async-handler")
const User = require("../Models/userModel")
const registerUser = asyncHandler (async(req, res)=>{
    const {name, email, password, pic, phone} = req.body;
    if(!name || !email || !password || !phone){
        res.status(400);
        throw new error("Please Enter all details")
    }

    const userExist = await User.findOne({email})
    if(userExist){
        res.status(400);
        throw new error("User already Exists")
    }
const user = await User.create({
    name, email, password, pic, phone
})
if(user){
    res.status(201).json({
        _id:user._id,
        name:user.name,
        email:user.email,
        password:user.password,
        pic:user.pic,
        phone:user.phone,
        token:generateToken(user._id)
    })
}
else{
    res.status(400);
    throw new error("User Creation Failed")
}


})

module.exports = {registerUser}