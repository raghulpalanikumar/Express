const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    task: String,
    status: { type: Boolean, default: false }
});

module.exports = mongoose.model('todos', todoSchema);
