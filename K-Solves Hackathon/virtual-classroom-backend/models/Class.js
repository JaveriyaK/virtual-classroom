const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
  name: String,
  units: [{ type: String }],
  sessions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Session' }],
  enrolledStudents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }]
});

module.exports = mongoose.model('Class', classSchema);

