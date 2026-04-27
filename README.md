# 📝 TaskFlow - Smart Task Manager

A clean and modern **Task Management Web App** built using **Vanilla JavaScript**, designed with a minimal SaaS-style UI and powerful task handling features.

---

## 🚀 Features

* ➕ Add new tasks with priority levels (Low / Medium / High)
* ✅ Mark tasks as completed
* ✏️ Edit tasks with smooth inline editing
* 🗑️ Delete tasks instantly
* 📌 Pin important tasks to the top
* 🔍 Real-time search functionality
* 🎯 Filter tasks (All / Completed / Pending)
* 💾 Persistent storage using LocalStorage
* 🎨 Clean, responsive white UI (production-style)

---

## 🧠 How It Works

### 1. State Management

All tasks are stored in an array:

```js
tasks = [
  {
    id: 123,
    text: "Learn JavaScript",
    completed: false,
    priority: "high",
    pinned: false
  }
]
```

---

### 2. Rendering System

The app uses a central function:

```js
renderTasks()
```

It:

* Clears UI
* Applies search filter
* Applies status filter
* Sorts tasks (Pinned → Priority)
* Rebuilds DOM dynamically

---

### 3. Local Storage

Tasks are saved using:

```js
localStorage.setItem("tasks", JSON.stringify(tasks));
```

and loaded on startup.

---

### 4. Editing Flow

* Click **Edit**
* Task turns into input field
* Click **Save**
* UI re-renders with updated data

---

## 🧩 Tech Stack

* HTML5
* CSS3 (Modern SaaS-style design)
* Vanilla JavaScript (No frameworks)

---

## 📂 Project Structure

```
TaskFlow/
│── index.html
│── style.css
│── script.js
```

---

## 🎯 Key Concepts Practiced

* DOM Manipulation
* Event Handling
* State-driven UI rendering
* Array methods (`filter`, `sort`, `map`)
* LocalStorage usage
* Conditional rendering
* UI/UX design fundamentals

---

## 📸 Preview

<img width="1261" height="635" alt="image" src="https://github.com/user-attachments/assets/0aa3e1c2-e499-42e5-9820-dfcf77a4484f" />

---

## 🛠️ Future Improvements

* ⌨️ Keyboard shortcuts (Enter to save, Escape to cancel)
* 📊 Task statistics dashboard
* 🌙 Dark mode toggle
* 📅 Due dates & reminders
* ☁️ Backend integration (MongoDB / Firebase)

---

## 💡 Learning Outcome

This project helped in understanding:

* How real apps manage **state + UI together**
* Importance of **render functions**
* Building **scalable frontend logic without frameworks**
* Creating **production-level UI from scratch**

---

## 🙌 Author

**Chetan**
Learning DSA + MERN Stack 🚀

---

## ⭐ If you like this project

Give it a ⭐ on GitHub and share feedback!
