const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validEventCategories = require('./eventCategories');

const eventSchema = new Schema({
    eventName: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        enum: validEventCategories, // Use the array of valid categories as enum
        required: true,
      },
      location: {
        type: String,
      },
      dateTime: {
        type: Date,
        required: true,
      },
      participants: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Participant',
        },
      ],
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
    
    });
    
   module.exports = mongoose.model('Event', eventSchema);
    