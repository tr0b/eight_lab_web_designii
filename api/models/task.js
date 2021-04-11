const mongoose = require('mongoose');

const { Schema } = mongoose;

const TaskSchema = new Schema({
  id: { type: Number, required: true },
  task: { type: String, required: true, trim: true },
  owner: { type: String, required: true },
  finished: { type: Boolean, required: true },
});
module.exports = mongoose.model('Task', TaskSchema);
