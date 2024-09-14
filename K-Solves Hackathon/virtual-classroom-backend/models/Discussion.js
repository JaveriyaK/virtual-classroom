const mongoose = require('mongoose');

const discussionSchema = new mongoose.Schema({
  content: String,
  replies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Discussion' }],
  lecture: { type: mongoose.Schema.Types.ObjectId, ref: 'Lecture' },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' }
});

module.exports = mongoose.model('Discussion', discussionSchema);
