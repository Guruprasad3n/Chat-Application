const jwt = require("jsonwebtoken");

const generateToken=()=>{
 return jwt.sign({id},process.env.JSON_SECRET_KEY,{
    expiresIn:"5d"
} )


}
module.exports = generateToken