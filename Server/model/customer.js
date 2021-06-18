const mongoose = require("mongoose");

var customerSchema = new mongoose.Schema({
    // customerID : {
    //     type : String,
    //     trim : true,
    // },
    nameCustomer : {
        type : String,
        trim : true,
    },
    genderCustomer : { 
        type : String,
        trim : true,
    },
    identityCard : {
        type : Number,
        trim : true,
    },
    addressCustomer : {
        type : String,
        trim : true,
    },
    numberPhoneCustomer : {
        type : Number,
        trim : true,
    },
    nationalityCustomer : {
        type : String,
    },
    email : {
        type : String,
        trim : true,
    }
});

var Customner = mongoose.model("Customer", customerSchema , "customers");
module.exports = Customner;