const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validEventCategories = require('./category');

const eventSchema = new Schema({
    eventName: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        enum: validEventCategories, 
        required: true,
      },
      location: {
        type: String,
      },
      dateTime: {
        type: Date,
        required: true,
      },
      participants: [String],
      recurringWeekly: {
        type: Boolean,
        default: false,
      },
      details: {
        type: String,
      },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true,
      },
    
    });
    
   module.exports = mongoose.model('Event', eventSchema);
    