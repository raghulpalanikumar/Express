const express = require('express');
const todoRouter = express.Router();
const {
    getRoute,
    getRouteById,
    postRoute,
    putRoute,
    deleteRoute
} = require('../controllers/todoController');

// Route to get all todos
todoRouter.get('/', getRoute);

// Route to get todo by ID
todoRouter.get('/:id', getRouteById);

// Route to create a new todo
todoRouter.post('/', postRoute);

// Route to update a todo by ID
todoRouter.put('/:id', putRoute);

// Route to delete a todo by ID
todoRouter.delete('/:id', deleteRoute);

module.exports = todoRouter;
