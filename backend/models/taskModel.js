const db = require('../config/db');

// 1. Function untuk mengambil semua task (dengan filter)
async function getAllTasks(statusFilter) {
  let query = 'SELECT * FROM tasks';
  const values = [];

  if (statusFilter && statusFilter !== 'all') {
    query += ' WHERE status = $1';
    values.push(statusFilter);
  }

  query += ' ORDER BY created_at DESC';
  const { rows } = await db.query(query, values);
  return rows;
}

// 2. Function untuk membuat task baru
async function createTask(title) {
  const query = 'INSERT INTO tasks (title) VALUES ($1) RETURNING *';
  const { rows } = await db.query(query, [title]);
  return rows[0];
}

// 3. Function untuk update status task
async function updateTaskStatus(id, status) {
  const query = 'UPDATE tasks SET status = $1 WHERE id = $2 RETURNING *';
  const { rows } = await db.query(query, [status, id]);
  return rows[0];
}

// 4. Function untuk menghapus task
async function deleteTask(id) {
  const query = 'DELETE FROM tasks WHERE id = $1 RETURNING *';
  const { rows } = await db.query(query, [id]);
  return rows[0];
}

// Export function-function di atas agar bisa dipanggil di Controller
module.exports = {
  getAllTasks,
  createTask,
  updateTaskStatus,
  deleteTask,
};