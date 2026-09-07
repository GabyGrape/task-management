const API_URL = 'http://localhost:5000/api/tasks';

const taskForm = document.getElementById('taskForm');
const taskTitleInput = document.getElementById('taskTitle');
const taskList = document.getElementById('taskList');
const filterStatus = document.getElementById('filterStatus');

// 1. Fetch & Render Tasks
async function fetchTasks() {
  try {
    const status = filterStatus.value;
    const res = await fetch(`${API_URL}?status=${status}`);
    const result = await res.json();

    if (result.success) {
      renderTasks(result.data);
    }
  } catch (err) {
    console.error('Gagal mengambil data task:', err);
  }
}

// 2. Render ke DOM
function renderTasks(tasks) {
  taskList.innerHTML = '';

  if (tasks.length === 0) {
    taskList.innerHTML = '<li style="text-align: center; color: #888;">Tidak ada task.</li>';
    return;
  }

  tasks.forEach((task) => {
    const li = document.createElement('li');
    li.className = `task-item ${task.status === 'completed' ? 'completed' : ''}`;

    li.innerHTML = `
      <div class="task-info">
        <input 
          type="checkbox" 
          ${task.status === 'completed' ? 'checked' : ''} 
          onchange="toggleTaskStatus(${task.id}, this.checked)"
        >
        <span class="task-title">${escapeHTML(task.title)}</span>
      </div>
      <button class="btn-delete" onclick="deleteTask(${task.id})">Hapus</button>
    `;

    taskList.appendChild(li);
  });
}

// 3. Tambah Task Baru (POST)
taskForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const title = taskTitleInput.value.trim();
  if (!title) return;

  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title }),
    });

    if (res.ok) {
      taskTitleInput.value = '';
      fetchTasks();
    }
  } catch (err) {
    console.error('Gagal menambah task:', err);
  }
});

// 4. Update Status Async (PATCH)
async function toggleTaskStatus(id, isChecked) {
  const newStatus = isChecked ? 'completed' : 'pending';
  try {
    await fetch(`${API_URL}/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: newStatus }),
    });
    fetchTasks();
  } catch (err) {
    console.error('Gagal memperbarui status:', err);
  }
}

// 5. Hapus Task (DELETE)
async function deleteTask(id) {
  try {
    const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    if (res.ok) {
      fetchTasks();
    }
  } catch (err) {
    console.error('Gagal menghapus task:', err);
  }
}

// Sanitasi Input untuk Mencegah XSS
function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}

// Event Listeners
filterStatus.addEventListener('change', fetchTasks);
document.addEventListener('DOMContentLoaded', fetchTasks);