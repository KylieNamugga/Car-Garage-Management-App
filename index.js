require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const expressValidator = require ('express-validator');
const flash = require('connect-flash');
const passport = require('passport');
const cors = require ('cors')
const Signup = require('./models/signupmodel')
const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
});

const homeRoutes = require('./routes/homeRoutes');
const loginRoutes = require('./routes/loginRoutes');
const registrationRoutes = require('./routes/registrationRoutes');
const signupRoutes = require('./routes/signupRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');

const { PORT } = process.env
const { WELCOME_MESSAGE, DATABASE_URL } = process.env

const app = express();

app.engine('pug', require('pug').__express);
app.set('view engine', 'pug')
app.set('views', path.join(__dirname,'views')); 

app.use(express.static(path.join(__dirname, "public")));


app.use(express.urlencoded({extended:false}));
app.use (express.json());

app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());
app.use(cors())

passport.use(Signup.createStrategy());
passport.serializeUser(Signup.serializeUser());
passport.deserializeUser(Signup.deserializeUser());


app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});

app.use('/', homeRoutes);
app.use('/', loginRoutes);
app.use('/', registrationRoutes);
app.use('/', signupRoutes);
app.use('/', dashboardRoutes);


app.get('*', (req, res) => {
  res.status(404).send('This is an invalid URL')
})

mongoose.connect(DATABASE_URL).then(() => {
  // successful connection
  app.listen(PORT, ()=> {
      let message = `${WELCOME_MESSAGE} ${PORT}`
      console.log(message)
  })
}).catch(error => {
  console.error("Failed to start the server due to : ",error)
})
// mongoose.connect(process.env.MONGODB_URI ||'mongodb://localhost:27017/loan-management',
// {
//   useNewUrlParser:true,
//   useUnifiedTopology:true,
// },
// ).then(() => {
//     // successful connection
//     app.listen(PORT, ()=> {
//         let message = `${WELCOME_MESSAGE} http://localhost:${PORT}`
//         console.log(message)
//     })
// }).catch(error => {
//     console.error("Failed to start the server due to : ",error)
// })


module.exports = app;