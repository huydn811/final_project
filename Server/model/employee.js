const mongoose = require("mongoose");

var employeeSchema = new mongoose.Schema({
    employeeID : {
        type : String,
        trim : true,  
    },
    nameEmployee : {
        type : String,
        trim : true,
    },
    emailEmployee : {
        type : String,
        trim : true,
    },
    roleEmployee : {
        type : String,
        trim : true
    },
    avatar : {
        type : String,
        trim :true
    },
    dayOfBirthEmployee : {
        type : String,
        trim : true,
    },
    genderEmployee : { 
        type : String,
        trim : true,
    },
    addressEmployee : {
        type : String,
        trim : true,
        require : true
    },
    numberPhoneEmployee : {
        type : Number,
        trim : true,
    }
});

var Employee = mongoose.model("Employee", employeeSchema, "employees");
module.exports = Employee;