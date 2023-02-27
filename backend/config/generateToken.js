const jwt = require("jsonwebtoken");

const generateToken=(id)=>{
 return jwt.sign({id},process.env.JSON_SECRET_KEY,{
    expiresIn:"5d"
    
} )
console.log(id)

}
module.exports = generateToken