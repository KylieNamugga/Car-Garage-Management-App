const mongoose = require('mongoose')

const registrationSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    numberplate: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    vehicletype: {
        type: String,
        required: true
    },
    service: {
        type: String,
        required: true
    },
    servicefee: {
        type: Number,
        required: true
    },
    batteryprice: {
        type: Number,
        required: true
    },
    tyreprice: {
        type: Number,
        required: true
    },

});

const Registration = module.exports = mongoose.model('Registration', registrationSchema);