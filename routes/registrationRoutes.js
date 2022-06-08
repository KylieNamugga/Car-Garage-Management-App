const express = require('express');
const router = express.Router();
const passport = require('passport');
const expressValidator = require('express-validator');
const mongoose = require('mongoose')

router.use(expressValidator());

// Requiring schema
const Registration = require('../models/registrationmodel')

//The get route
router.get('/registration', (req, res) => {
    res.render('registration');
});

// Posting route
router.post('/registration', (req, res) => {
    //Kylie, declare variables that match your form input names
    const fullname = req.body.fullname;
    const phonenumber = req.body.phonenumber;
    const numberplate = req.body.numberplate;
    const date = req.body.date;
    const vehicletype = req.body.vehicletype;
    const service = req.body.service;
    const servicefee = req.body.servicefee;
    const batteryprice = req.body.batteryprice;
    const tyreprice = req.body.tyreprice;

    const errors = req.validationErrors()
    if (errors) {
        res.render('registration')
    }
    // matching my inputs to my schema
    else {
        let newRegistration = new Registration({
            fullname: fullname,
            phonenumber: phonenumber,
            numberplate: numberplate,
            date: date,
            vehicletype: vehicletype,
            service: service,
            servicefee: servicefee,
            batteryprice: batteryprice,
            tyreprice: tyreprice,

        });
        // Saving registration data
        newRegistration.save((err) => {
            if (err) {
                console.error(err);
                return;
            }
            else {
                console.log('Kylie, you have successfully registered your First client');
                res.redirect('/dashboard')
            }
        })
    }

});

module.exports = router;