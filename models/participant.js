const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const participantSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: false,
    },
  });
  

  module.exports = mongoose.model('Participant', participantSchema);
  
  