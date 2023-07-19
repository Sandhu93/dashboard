const mongoose = require('mongoose');

//import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const zone = new Schema({
  Zone_name:String,
  Status: String,
})

zone.set('versionKey', false);

//export default mongoose.model('Zone', zone);
module.exports = mongoose.model('Zone', zone);