# IdeaVault — Startup Idea Sharing Platform

**IdeaVault** is a full-stack startup idea sharing platform where users can create, explore, search, and discuss innovative startup ideas. The platform focuses on community-driven idea validation and collaboration.

## 🔗 Links

* **Live Website:** `YOUR_LIVE_URL`
* **Client Repository:** `YOUR_CLIENT_GITHUB_URL`
* **Server Repository:** `YOUR_SERVER_GITHUB_URL`

## ✨ Key Features

* **Authentication & Authorization** — Email/password and Google authentication with protected routes and JWT-based authorization.
* **Startup Idea Management** — Authenticated users can create, update, view, and delete their own startup ideas.
* **Search & Filter** — Search ideas by title using case-insensitive MongoDB regex and filter ideas by category.
* **Comment System** — Users can add, edit, and delete their own comments on startup ideas.
* **User Interactions** — My Ideas and My Interactions sections allow users to manage and view their activities.
* **Trending Ideas** — Displays selected startup ideas using MongoDB query limiting.
* **Profile Management** — Users can update their profile name and profile image.
* **Responsive UI** — Modern responsive interface with mobile, tablet, and desktop support.
* **Dark / Light Theme** — Global theme switching with a consistent project design system.
* **User Feedback** — Toast notifications for CRUD operations and user interactions.
* **Loading & Error Handling** — Custom loading states and 404 page for better user experience.

## 🛠️ Technologies

### Frontend

* Next.js
* React.js
* JavaScript (ES6)
* Tailwind CSS
* HeroUI
* Next Themes
* React Icons
* React Toastify
* Better Auth

### Backend

* Node.js
* Express.js
* MongoDB
* JWT

### Tools & Deployment

* Git & GitHub
* VS Code
* Vercel
* Render
* MongoDB Atlas

## 🏗️ Architecture

```text
Next.js Frontend
       ↓
Better Auth / JWT
       ↓
Express.js REST API
       ↓
MongoDB
```

Protected backend requests use:

```text
Authorization: Bearer <token>
```

## 🚀 Getting Started

### Prerequisites

* Node.js
* npm
* MongoDB / MongoDB Atlas

### Installation

Clone the client repository:

```bash
git clone YOUR_CLIENT_GITHUB_URL
cd ideavault-client
npm install
```

Create a `.env.local` file and configure the required environment variables:

```env
NEXT_PUBLIC_API_URL=YOUR_API_URL
BETTER_AUTH_SECRET=YOUR_SECRET
BETTER_AUTH_URL=YOUR_AUTH_URL
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## 📌 Core Pages

```text
/
├── Home
├── Ideas
├── Ideas/[id]
├── Add Idea
├── My Ideas
├── My Interactions
├── Profile
├── Login
└── Register
```

## 🎯 Project Highlights

* Full-stack **Next.js + Express.js + MongoDB** application
* REST API integration between frontend and backend
* JWT-based protected API requests
* Authentication and authorization
* Ownership-based CRUD operations
* MongoDB search and filtering
* Responsive and reusable UI components
* Production deployment with Vercel and Render

## 👨‍💻 Developer

**MD. ABU BAKKAR SIDDIK**

Frontend Developer | MERN Stack Developer
