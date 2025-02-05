<div align="center">
  <h1>🎮 Chill Gamer</h1>
  <p>A gaming review platform with interactive features, sorting, filtering, and authentication.</p>
  <a href="https://chill-gamer-application.web.app/"><img src="https://github.com/ssmahim01/chill-gamer-platform-server/blob/main/public/chill-gamer-banner.png" width="100%" alt="Chill Gamer Banner"></a>
  <br>
  <a href="https://chill-gamer-application.web.app/"><b>🔗 Live Demo</b></a> |
  <a href="https://github.com/ssmahim01/chill-gamer-platform-server"><b>📂 Backend Repository</b></a>
</div>

---

## 🛠️ Used Technologies

| Category        | Technologies |
|----------------|-------------|
| **Frontend**   | React, Tailwind CSS, Daisy UI |
| **Backend**    | Node.js, Express.js |
| **Database**   | MongoDB |
| **Authentication** | Firebase Authentication |
| **Routing**    | React Router |
| **Animation**  | Lottie React |
| **Hosting**    | Firebase (Frontend), Vercel (Backend) |

---

## 🚀 Core Features

✔ **Interactive UI** – Clean, user-friendly interface for easy navigation.  
✔ **Data Fetching** – Fetches reviews dynamically using API requests.  
✔ **Authentication** – Secure login/register via Firebase (Google, GitHub, email/password).  
✔ **Sorting & Filtering** – Sort reviews by **rating** or **publish year**, and filter by genre.  
✔ **Dynamic Routes** – Pages for **Home, All Reviews, Review Details, My Reviews**, and **Watchlist**.  

---

## 📦 Used Dependencies
```json
"dependencies": {
  "@emailjs/browser": "^4.4.1",
  "firebase": "^11.0.2",
  "localforage": "^1.10.0",
  "lottie-react": "^2.4.0",
  "match-sorter": "^8.0.0",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-fast-marquee": "^1.6.5",
  "react-icons": "^5.4.0",
  "react-rating-stars-component": "^2.2.0",
  "react-router-dom": "^7.0.2",
  "react-simple-typewriter": "^5.0.1",
  "react-toastify": "^10.0.6",
  "react-tooltip": "^5.28.0",
  "sort-by": "^1.2.0",
  "sweetalert2": "^11.14.5",
  "swiper": "^11.1.15"
}
```
---

## 📥 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/ssmahim01/chill-gamer-platform.git
cd chill-gamer-platform
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env.local` file in the root directory and add the keys with URLs

---

## 🏃 Project Run Locally

To run the project locally, use the following command:

```sh
npm run dev
```

🔹 This will start the development server, and you can access it at:  
📌 **`http://localhost:5173/`**  

For backend setup, refer to the **[Backend Repository](https://github.com/ssmahim01/chill-gamer-platform-server)**.

---

## 📌 Usage Guide

### ✅ Logging In
- Users can register/login with:
  - **Google Authentication**
  - **GitHub Authentication**
  - **Email & Password Authentication**

### ✅ Sorting & Filtering Reviews
- Sort reviews by **rating** or **publish year**.
- Filter by **game genre** to find personalized reviews.

### ✅ Adding to Watchlist
- Users can **save games** to their watchlist for later.

---

# 🔧 Vite + React Setup

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
