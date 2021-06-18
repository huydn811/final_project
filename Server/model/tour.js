const mongoose = require("mongoose");

var tourSchema = new mongoose.Schema({
    tourID  : {
        type : String,
    },
    tourName : {
        type : String,
    },
    avatar : {
        type : String,
    },
    startAddress : {
        type : String,
    },
    endAddress : {
        type : String,
    },
    startDate : {
        type : String
    },
    endDate : {
        type : String
    },
    priceTour : {
        type : Number
    },
    qtyPeople : { 
        type : Number
    },
    descriptionTour : {
        type : String,
    },
    detailTour : {
        type : String
    }
});

var Tour = mongoose.model("Tour", tourSchema, "tours");
module.exports = Tour;
