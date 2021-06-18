const mongoose = require("mongoose");

var orderSchema = mongoose.Schema({
    // orderID : {
    //     type : String,
    //     trim  : true,
    // },
    tourID : {
        type : String,
        trim : true,
    },
    customerID : {
        type : String,
        trim : true,
    },
    qtyPeopleJoin : {
        type : Number,
        trim : true,
    },
    orderStatus : {
        type : String,
        trim : true,
    },
    paymentMethod : {
        type : String,
        trim : true,
    },
    numberPhoneCustomer : {
        type : Number,
        trim : true
    },
    totalPrice : {
        type : Number,
        trim : true,
    },
    // orderDetail : [{
    //     qtyPeopleJoin : {
    //         type : Number,
    //         trim : true,
    //     },
    //     nameCustomerJoin : {
    //         type : String,
    //         trim : true,
    //     } 
    // }]
});

var Order = mongoose.model("Order", orderSchema, "orders");
module.exports = Order;