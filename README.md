# 🌐 Fullstack Enquiry System

A modern fullstack web application built with **React (Vite)** on the frontend and **Node.js + Express** on the backend. This project allows users to submit enquiries through a form, which are then handled and stored in a backend database.

---

## 📁 Project Structure

```
project-root/
├── client/      # Frontend (React + Vite)
│   ├── src/
│   │   ├── enquiry/Enquiry.jsx
│   │   ├── app.jsx, main.jsx, app.css
│   │   └── index.css
│   ├── public/
│   ├── vite.config.js
│   └── ...
├── server/      # Backend (Node.js + Express)
│   ├── APP/
│   │   ├── controller/web/enquiryController.js
│   │   ├── models/enquiry.model.js
│   │   ├── routes/web/enquiryRoutes.js
│   ├── server.js
│   └── .env
```

---

## 🚀 Features

### Frontend (Client)
- ⚛️ Built using **React + Vite**
- 📋 Dynamic Enquiry Form
- 🎨 Clean and responsive UI
- 🔗 Axios for API calls

### Backend (Server)
- 🧠 Node.js + Express.js
- 💾 MongoDB for data storage
- 🔐 Environment variable configuration using `.env`
- 🧭 RESTful API with MVC structure

---

## ⚙️ Tech Stack

- **Frontend:** React, Vite, Axios, CSS
- **Backend:** Node.js, Express.js, MongoDB
- **Database:** MongoDB Atlas (or local)
- **Tools:** Git, GitHub, VS Code

---

## 📦 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Setup the Backend
```bash
cd server
npm install
```

Create a `.env` file in the server folder:
```
PORT=5000
MONGO_URI=your_mongodb_connection_uri
```

Start the server:
```bash
npm start
```

### 3. Setup the Frontend
```bash
cd ../client
npm install
npm run dev
```

Visit your app at: `http://localhost:5173`

---

## 📁 Folder Overview

### `client/`
- `src/enquiry/Enquiry.jsx` – Enquiry form component
- `app.jsx` & `main.jsx` – Main application entry
- `vite.config.js` – Vite configuration

### `server/APP/`
- `controller/web/enquiryController.js` – Handles form submission logic
- `routes/web/enquiryRoutes.js` – API endpoints
- `models/enquiry.model.js` – MongoDB Schema
- `server.js` – Express server entry

---


## ✍️ Contributors

- **Rana Karmakar** – Fullstack Developer  


---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 💡 Feedback

Got ideas or improvements? Feel free to open an issue or contribute via pull request!
