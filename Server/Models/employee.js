const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
    name: {
        type: String,
        required:true
    } ,
    id:{
        type: Number,
        required:true,
        unique:true
    },
    email:{
        type: String,
        required:true,
        unique:true
    },
    designation:{
        type: String,
        required:true
    }
    ,
    companyName: {
        type: String,
        required:true
    },
    companyAddress: {
        type: String,
        required:true
    },
    companyContact: {
        type: String,
        required:true
    },
    gender:{
        type: String,
        required:true,
        default: 'Male'
    },
    DOB:{
        type: String,
        default: "18/03/1995"
    },
    maritalStatus:{
        type: String,
        required:true
    },
    homeAddress:{
        type: String,
        required:true
    },
    homeContact:{
        type: String,
        required:true
    }
});

module.exports = mongoose.model('Employee', employeeSchema);