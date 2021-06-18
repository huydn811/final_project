const mongoose = require("mongoose");

var messageSchema = new mongoose.Schema({
    chatroomID : {
        type : String,
    },
    messages : [{
        userID : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User"
        },
        content :{
            type : String
        },
        sendAt : {
            type : Date,
            default : Date.now()
        }
    }],
    
});

var Message = mongoose.model("Message", messageSchema,"messages");
module.exports = Message;   