const express = require('express');
const router = express.Router();
const taskController = require('../controller/taskController');

router.get('/tasks', taskController.getTasks);
router.post('/tasks', taskController.createNewTask);
router.patch('/tasks/:id', taskController.updateStatus);
router.delete('/tasks/:id', taskController.removeTask);

module.exports = router;