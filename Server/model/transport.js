const mongoose = require("mongoose");

var transportSchema = new mongoose.Schema({
    transportID : {
        type : String,
        trim : true, 
    },
    nameTransport : {
        type : String,
        trim : true,
    },
});

var Transport = mongoose.model("Transport", transportSchema, "transports");
module.exports = Transport;