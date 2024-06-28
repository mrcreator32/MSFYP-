const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
});

const Class = mongoose.models.Class || mongoose.model('Class', classSchema);

module.exports = Class;
