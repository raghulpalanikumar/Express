const todo = require('../models/todoModel.js');

// Get all tasks
exports.getRoute = async (req, res) => {
    const todoData = await todo.find();
    res.status(200).json(todoData);
};
2
// Get task by ID
exports.getRouteById = async (req, res) => {2
    const todoData = await todo.findById(req.params.id);
    if (!todoData) {
        return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json({todoData });
};

// Create new task
exports.postRoute = async (req, res) => {
    const { task } = req.body;
    if (!task) {
        return res.status(400).json({ message: "Task is required" });
    }
    const newTask = new todo({ task });
    await newTask.save();
    res.status(201).json({ message: "Task created successfully", data: newTask });
};


exports.putRoute = async (req, res) => {
    const { task, status } = req.body;
    try {
        const updatedTask = await todo.findByIdAndUpdate(
            req.params.id,
            { task, status },
            { new: true }
        );
        if (!updatedTask) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.status(200).json({ message: "Task updated successfully", data: updatedTask });
    } catch (err) {
        res.status(500).json({ message: "Error updating task", error: err.message });
    }
};


exports.deleteRoute = async (req, res) => {
    const deletedTask = await todo.findByIdAndDelete(req.params.id);
    if (!deletedTask) {
        return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json({ message: "Task deleted successfully" });
};
