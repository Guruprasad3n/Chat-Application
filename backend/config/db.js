const mongoose = require("mongoose");
// mongoose.connect(())
// const connectDB = async ()=>{
// try{
// const connection = await mongosose.connect((process.env.MONGO_URL))
// }catch(err){
// console.log(err)
// }
// }
// module.export = connectDB
mongoose.set('strictQuery', true)
const connectDB  = mongoose.connect(process.env.MONGO_URL,((err)=>{
    if(!err){
        console.log("DB Connected Successfull")
    }
}))