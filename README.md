# 📝 Mini Task Management System

Sistem manajemen tugas harian berbasis web sederhana (*Fullstack*) yang dibangun menggunakan **Node.js Native/Express**, **PostgreSQL**, serta **JavaScript Native (Vanilla JS)** dan **CSS Native**. 

Aplikasi ini dikembangkan dengan mengedepankan prinsip **Clean Code**, **Separation of Concerns (SoC)**, **RESTful API Standard**.

---

## 👤 Pengembang (Author)

* **Nama Lengkap:** OKTA GABRIEL SINSAKU SINAGA
* **Peran:** Fullstack Web Developer (Post-Test Interview Assignment)

---

## 🛠️ Tech Stack & Alat Pengembangan

### **Backend**
* **Runtime Environment:** Node.js (v22+)
* **Framework:** Express.js
* **Database Driver:** `pg` (node-postgres)
* **Environment Management:** `dotenv`
* **CORS Management:** `cors`

### **Database**
* **Database Engine:** PostgreSQL

### **Frontend**
* **Markup:** HTML5 (Semantic HTML)
* **Styling:** Native CSS3 (Responsive Design, Custom CSS Variables, Flexbox)
* **Logic & API Communication:** Native JavaScript (ES6+, Fetch API Async/Await, DOM Manipulation)

### **Testing & Version Control**
* **API Client Testing:** Bruno
* **Version Control:** Git

---

## 📁 Struktur Folder Proyek

Proyek ini menerapkan pemisahan tanggung jawab yang jelas antara layer **Backend** (Model-Controller-Route) dan **Frontend**.

```text
task-management/
├── backend/
│   ├── config/
│   │   └── db.js            # Konfigurasi Pool Koneksi PostgreSQL
│   ├── controllers/
│   │   └── taskController.js # Logika penanganan request & response HTTP
│   ├── models/
│   │   └── taskModel.js      # Layer interaksi Kueri SQL Database
│   ├── routes/
│   │   └── taskRoutes.js     # Definisi Endpoint RESTful API
│   ├── .env                 # Konfigurasi Kredensial Environment (Private)        # Template variabel environment
│   ├── package.json
│   └── server.js            # Entry point aplikasi backend Express
├── frontend/
│   ├── index.html           # Struktur antarmuka pengguna
│   ├── style.css            # Styling responsif anti-overflow (Mobile-First)
│   └── app.js               # Logika penanganan DOM & AJAX Fetch API
├── .gitignore               # Mencegah komit node_modules & file sensitif
└── README.md                # Dokumentasi proyek

## 🚀 Cara Menjalankan Proyek (Running Instructions)

Ikuti langkah-langkah di bawah ini untuk menjalankan aplikasi secara lokal:

### 1. Menjalankan Backend Server

Buka terminal, lalu masuk ke folder `backend`:

```bash
cd backend

Pastikan sudah membuat file .env untuk konfigurasi credential database postgresql dengan format berikut 
# Database Configuration
DB_USER=postgres
DB_HOST=localhost
DB_NAME=task_db
DB_PASSWORD=
DB_PORT=

# Application Server Port
PORT=