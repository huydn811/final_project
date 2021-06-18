const mongoose = require("mongoose");

var ticketSchema = mongoose.Schema({
    ticketID : {
        type : String,
        trim : true,
    },
    employeeID : {
        type : String,
        trim : true,
        unique : true
    },
    startAddress : { 
        type : String,
        trim : true,
    },
    startDate : {
        type : Date,
        trim : true,
    },
    endDate : {
        type : Date,
        trim : true,
    },
    totalPrice : {
        type : Number,
        trim : true,
    }
});

var Ticket = mongoose.model("Ticket", ticketSchema, "tickets");
module.exports = Ticket;