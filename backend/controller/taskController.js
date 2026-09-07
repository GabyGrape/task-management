// Import function spesifik menggunakan destructuring
const { 
  getAllTasks, 
  createTask, 
  updateTaskStatus, 
  deleteTask 
} = require('../models/taskModel');

async function getTasks(req, res) {
  try {
    const { status } = req.query;
    const tasks = await getAllTasks(status);
    res.json({ success: true, data: tasks });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

async function createNewTask(req, res) {
  try {
    const { title } = req.body;
    if (!title || !title.trim()) {
      return res.status(400).json({ success: false, message: 'Judul task tidak boleh kosong' });
    }
    const newTask = await createTask(title.trim());
    res.status(201).json({ success: true, data: newTask });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

async function updateStatus(req, res) {
  try {
    const { id } = req.params;
    const { status } = req.body;
    
    const updated = await updateTaskStatus(id, status);
    if (!updated) {
      return res.status(404).json({ success: false, message: 'Task tidak ditemukan' });
    }
    res.json({ success: true, data: updated });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

async function removeTask(req, res) {
  try {
    const { id } = req.params;
    const deleted = await deleteTask(id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: 'Task tidak ditemukan' });
    }
    res.json({ success: true, message: 'Task berhasil dihapus' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

module.exports = {
  getTasks,
  createNewTask,
  updateStatus,
  removeTask,
};