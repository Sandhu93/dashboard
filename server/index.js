const express = require('express');
//import dotenv from 'dotenv'
const bodyParser = require('body-parser');
const connectDB = require('./db.js');
const DataRoute = require('./route/data.route.js');
const BranchRoute = require('./route/branch.route.js');
const DeviceRoute = require('./route/device.route.js');
const marqueeroute = require('./route/marqueeroute.js');
const zoneroute = require('./route/devicedetails.route.js');
const userroute = require('./route/user.route.js');
const initPassport = require('./passport.js');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const passport = require('passport');


// import bodyParser from "body-parser";
// import connectDB from './db.js'
// import DataRoute from './route/data.route.js'
// import BranchRoute from './route/branch.route.js'
// import DeviceRoute from './route/device.route.js'
// import marqueeroute from './route/marqueeroute.js'
// import zoneroute from './route/devicedetails.route.js'
// import userroute from './route/user.route.js'
// import initPassport from './passport.js';
// import session from 'express-session';
// import MongoStore from 'connect-mongo';
// import passport from 'passport';








const PORT = 3001;

const app = express();
connectDB();

// giving before bodyparser to get raw data


app.use(bodyParser.json({ limit: "20mb" }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: false }));

// passport setup
initPassport()


// creating session and adding to passport
app.use(session({
  secret: 'super secret',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: 'mongodb+srv://dheeraj:dj%40mongo1415@cluster0.kafuosd.mongodb.net/database?retryWrites=true&w=majority' })
}));
app.use(passport.authenticate('session'));




app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

app.use('/api/data', DataRoute)
app.use('/api/branch', BranchRoute)
app.use('/api/device', DeviceRoute)
app.use('/api/marquee', marqueeroute)
app.use('/api/zone', zoneroute)
app.use('/api/user', userroute)





