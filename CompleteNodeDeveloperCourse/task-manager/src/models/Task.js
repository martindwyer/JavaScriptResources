const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const taskSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  task: {
    type: String,
    required: true,
    trim: true,
  },
  started: {
    type: Date,
    default: Date.now,
  },
  due: {
    type: Date,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
