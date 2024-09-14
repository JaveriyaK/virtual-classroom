const mongoose = require('mongoose');

const lectureSchema = new mongoose.Schema({
  title: String,
  content: String,
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Discussion' }]
});

module.exports = mongoose.model('Lecture', lectureSchema);
