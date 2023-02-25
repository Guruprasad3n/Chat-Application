const {Schema, model, default: mongoose} = require("mongoose");
const chatSchame = new Schema({

    chatName:{
        type:String,
        trim:true
    },
    isGroupChat:{
        type:Boolean, default:false
    },
    users:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }],
    latestMessage:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Message"
    },
    groupAdmin:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }


},{
    timestamps:true
})
const chatModel = model("Chat", chatSchame)

module.exports = chatModel