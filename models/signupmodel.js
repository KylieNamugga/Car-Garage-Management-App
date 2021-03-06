// Require mongoose
const mongoose = require('mongoose')

// This captures our user name.
const passportLocalmongoose = require('passport-local-mongoose')

// Create schema
const signupSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },

    lastname: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

})
// our "username" is the email, we set it like this because it's not the default
signupSchema.plugin(passportLocalmongoose, {
    usernameField: "email",
});

// export schema
const Signup = module.exports = mongoose.model('Signup', signupSchema);
