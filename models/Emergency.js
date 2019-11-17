const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const EmergencySchema = new Schema({
  type: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Emergency = mongoose.model('emergency', EmergencySchema);