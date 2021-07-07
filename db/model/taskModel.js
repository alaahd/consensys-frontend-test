const mongoose = require('mongoose');
// Here's the task we want to insert:
const taskSchema = mongoose.Schema({
  title: String,
  description: String
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;