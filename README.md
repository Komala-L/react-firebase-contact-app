# React Firebase Contact App

A modern Contact Management application built with **React** and **Firebase Firestore**. This application allows users to create, view, update, delete, and search contacts with a clean and responsive user interface.

---

## 🚀 Features

* ➕ Add new contacts
* 📋 View all contacts
* ✏️ Update existing contacts
* 🗑️ Delete contacts
* 🔍 Search contacts by name
* ✅ Form validation using Formik and Yup
* 🔥 Real-time data synchronization with Firebase Firestore
* 🔔 Toast notifications for successful operations
* 📱 Responsive and user-friendly interface

---

## 🛠️ Tech Stack

* **Frontend:** React.js
* **Database:** Firebase Firestore
* **Build Tool:** Vite
* **Form Handling:** Formik
* **Validation:** Yup
* **Notifications:** React Toastify
* **Styling:** Tailwind CSS
* **Icons:** React Icons

---

## 📂 Project Structure

```text
react-firebase-contact-app/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── AddAndUpdateContact.jsx
│   │   ├── ContactCard.jsx
│   │   ├── Modal.jsx
│   │   ├── Navbar.jsx
│   │   └── NotFoundContact.jsx
│   │
│   ├── config/
│   │   └── firebase.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

---

## 📸 Demo

https://github.com/user-attachments/assets/836171a2-1c6d-44b3-8ed3-e1c00ac37d78

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/Komala-L/react-firebase-contact-app.git
```

### 2. Navigate to the project

```bash
cd react-firebase-contact-app
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create a Firebase project

* Go to the Firebase Console.
* Create a new project.
* Enable **Cloud Firestore**.
* Register a Web App.
* Copy your Firebase configuration.

### 5. Configure Firebase

Create a file named:

```text
src/config/firebase.js
```

and add your Firebase configuration.

Example:

```javascript
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
```

### 6. Start the development server

```bash
npm run dev
```

Open:

```
http://localhost:5173
```

---

## 📦 Dependencies

* React
* Firebase
* Formik
* Yup
* React Toastify
* React Icons
* Tailwind CSS
* Vite

---

## 📖 How It Works

1. User fills out the contact form.
2. Formik validates the input.
3. Contact data is stored in Firebase Firestore.
4. Firestore updates the UI in real time.
5. Users can edit or delete contacts instantly.
6. Search filters contacts by name.

---

## 🔮 Future Improvements

* Firebase Authentication
* User-specific contacts
* Profile pictures
* Contact favorites
* Pagination
* Dark mode
* Contact categories
* Export contacts
* Import contacts

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository.
2. Create a feature branch.

```bash
git checkout -b feature-name
```

3. Commit your changes.

```bash
git commit -m "Add new feature"
```

4. Push your branch.

```bash
git push origin feature-name
```

5. Open a Pull Request.

---

## 👨‍💻 Author

**Komala L**

If you like this project, feel free to ⭐ the repository!
