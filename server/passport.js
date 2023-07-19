const passport = require('passport');
const LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt');
const usersModel = require('./model/users.model.js');

function initPassport() {
  const salt = 'ksdkjsjldsldnlsdsb,';
  passport.use(new LocalStrategy(async function verify(username, password, cb) {
    try {
      console.log(username, password);
      const user = await usersModel.findOne({ email: username });
      if (!user) {
        return cb(null, false, { message: 'Incorrect username or password.' });
      }
      console.log(bcrypt.compareSync(password, user.password));
      if (!bcrypt.compareSync(password, user.password)) {
        console.log(bcrypt.compareSync(password, user.password));
        return cb(null, false, { message: 'Incorrect username or password.' });
      }
      return cb(null, user);
    } catch (err) {
      console.log(err);
      if (err) {
        return cb(err);
      }
    }
  }));
}

module.exports = initPassport;


// const passport = require('passport');
// const LocalStrategy = require('passport-local');
// const bcrypt = require('bcrypt');
// const usersModel = require('./model/users.model.js');


// // import passport from "passport";
// // import LocalStrategy from 'passport-local'
// // import bcrypt from 'bcrypt'
// // import usersModel from "./model/users.model.js";

// export default function initPassport(){
//   const salt = 'ksdkjsjldsldnlsdsb,'
//   passport.use(new LocalStrategy(async function verify(username, password, cb) {
//     try{
//       console.log(username,password);
//       const user = await usersModel.findOne({email:username})
//       if (!user ) { return cb(null, false, { message: 'Incorrect username or password.' }); }
//       console.log(bcrypt.compareSync(password,user.password));
//       if (!bcrypt.compareSync(password,user.password)) {
//         console.log(bcrypt.compareSync(password,user.password));
//         return cb(null, false, { message: 'Incorrect username or password.' });
//       }
//       return cb(null, user);
//     }catch(err){
//       console.log(err);
//       if (err) { return cb(err); }
//     }
//   }));
// }