const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  title: String,
  lectures: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Lecture' }]
});

module.exports = mongoose.model('Session', sessionSchema);
