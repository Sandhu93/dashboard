const mongoose = require('mongoose');

//import mongoose from "mongoose";

const marquee = new mongoose.Schema({
  Title: String,
  Description: String,
  EndDate: Date,
})

marquee.set('versionKey', false);

//export default mongoose.model('marquee', marquee);
module.exports = mongoose.model('marquee', marquee);