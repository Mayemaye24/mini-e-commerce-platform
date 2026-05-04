# 🛒 Mini E-Commerce Platform

## 🚀 Live Demo

🔗 **Frontend:**  
https://mini-e-commerce-platform-two.vercel.app

🔗 **Backend API:**  
https://mini-e-commerce-platform-backend.onrender.com/api/v1 

---

## 📖 Overview

The **Mini E-Commerce Platform** is a full-stack web application that enables users to browse products, manage a shopping cart, and place orders seamlessly.

It also includes a powerful **Admin Dashboard** for managing products, categories, and order workflows.

---

## ✨ Key Features

### 👤 User Experience
- 🔐 Secure authentication (JWT)
- 🔍 Product search, filtering & pagination
- 🛒 Cart management with real-time updates
- 📦 Order placement & tracking
- 📜 Order history view

### 🛠️ Admin Panel
- 📦 Product management (CRUD)
- 🗂️ Category management
- 🖼️ Image uploads (Supabase Storage)
- 📊 Order monitoring
- 🔄 Order status updates

### ⚙️ Backend Capabilities
- Role-based access control (Admin/User)
- Input validation with Zod
- Global error handling
- RESTful API design
- Swagger API documentation

---

## 🛠️ Tech Stack

### Frontend
- Angular (Standalone Components)
- Tailwind CSS
- RxJS

### Backend
- Node.js
- Express.js
- TypeScript
- JWT Authentication
- Zod Validation
- Swagger (OpenAPI)

### Database
- Supabase (PostgreSQL)
- Supabase Storage (Image Uploads)

---

## ⚙️ Getting Started

### 🔹 Run Frontend

```bash
cd client
npm install
ng serve
```

Open: http://localhost:4200  

---

### 🔹 Run Backend

```bash
cd server
npm install
npm run dev
```

Create `.env` file:

```env
PORT=5000
SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
JWT_SECRET=your_secret
JWT_EXPIRES_IN=7d
CLIENT_URL=http://localhost:4200
```

---

### 🔹 Connect Frontend to Backend

```ts
apiUrl: 'https://mini-e-commerce-platform-backend.onrender.com/api/v1'
```

---

## 🔗 API Endpoints

### 🔐 Auth
- POST /auth/register  
- POST /auth/login  
- GET /auth/me  

### 📦 Products
- GET /products  
- GET /products/:id  
- POST /products (admin)  
- PATCH /products/:id (admin)  
- DELETE /products/:id (admin)  
- POST /products/:id/image  

### 🗂️ Categories
- GET /categories  
- POST /categories (admin)  
- PATCH /categories/:id (admin)  
- DELETE /categories/:id (admin)  

### 🛒 Cart
- GET /cart  
- POST /cart/items  
- PATCH /cart/items/:id  
- DELETE /cart/items/:id  
- DELETE /cart/clear  

### 📦 Orders
- POST /orders/checkout  
- GET /orders/my-orders  
- GET /orders/my-orders/:id  

### 🛠️ Admin
- GET /orders  
- PATCH /orders/:id/status  

---

## 🎨 UI/UX Highlights

- 📱 Fully responsive design (mobile + desktop)
- ⚡ Fast and dynamic UI updates
- 🎯 Clean and modern interface
- 🔄 Loading & error states
- 🔐 Role-based navigation

---

## 📊 System Status

| Component  | Status |
|-----------|--------|
| Frontend  | ✅ Deployed (Vercel) |
| Backend   | ✅ Deployed (Render) |
| Database  | ✅ Supabase |
| API       | ✅ Fully Functional |

---

## 📌 Future Improvements

- 💳 Payment integration (Stripe)
- ⭐ Product reviews & ratings
- 📧 Email notifications
- 🧠 Recommendation system
