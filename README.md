<<<<<<< HEAD
# 📦 Inventory Management System

A full-stack web application to manage products and inventory, built with **React**, **Node.js/Express**, and **MongoDB**.

![Tech Stack](https://img.shields.io/badge/Frontend-React-61DAFB?style=flat-square&logo=react)
![Tech Stack](https://img.shields.io/badge/Backend-Node.js-339933?style=flat-square&logo=node.js)
![Tech Stack](https://img.shields.io/badge/Database-MongoDB-47A248?style=flat-square&logo=mongodb)

---

## 🚀 Features

- **Full CRUD Operations** — Add, view, update, and delete products
- **Search** — Filter products by name in real-time
- **Category Filter** — Dropdown filter by product category
- **Low Stock Alerts** — Products with quantity ≤ minStock are highlighted in red with a warning badge
- **Stats Dashboard** — Quick overview of total products, categories, and low-stock count
- **Responsive Design** — Works across desktop, tablet, and mobile
- **Dark Premium UI** — Modern glassmorphism design with smooth animations
- **Toast Notifications** — Real-time feedback for all operations
- **Form Validation** — Client-side and server-side validation
- **Error Handling** — Global error handler with meaningful messages

---

## 🛠 Tech Stack

| Layer     | Technology                          |
|-----------|-------------------------------------|
| Frontend  | React 19, Vite, Axios              |
| Backend   | Node.js, Express.js                |
| Database  | MongoDB with Mongoose ODM          |
| Styling   | Vanilla CSS (Dark Theme)           |
| Icons     | React Icons (Feather Icons)        |
| Toasts    | React Toastify                     |

---

## 📁 Project Structure

```
inventory-management-system/
├── backend/
│   ├── config/
│   │   └── db.js                  # MongoDB connection
│   ├── controllers/
│   │   └── productController.js   # Business logic (CRUD + low-stock)
│   ├── middleware/
│   │   └── errorHandler.js        # Global error handling
│   ├── models/
│   │   └── Product.js             # Mongoose schema
│   ├── routes/
│   │   └── productRoutes.js       # API route definitions
│   ├── server.js                  # Express server entry point
│   ├── package.json
│   └── .env                       # Environment variables
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx         # Navigation bar + low-stock badge
│   │   │   ├── SearchBar.jsx      # Search input
│   │   │   ├── CategoryFilter.jsx # Category dropdown
│   │   │   ├── ProductList.jsx    # Product table
│   │   │   ├── ProductCard.jsx    # Table row (per product)
│   │   │   ├── ProductForm.jsx    # Add/Edit form
│   │   │   └── Modal.jsx          # Reusable modal
│   │   ├── services/
│   │   │   └── api.js             # Axios API client
│   │   ├── App.jsx                # Root component + state
│   │   ├── App.css                # All styles
│   │   └── main.jsx               # React entry point
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
└── README.md
```

---

## ⚙️ Setup Instructions

### Prerequisites

- **Node.js** (v18 or higher) — [Download](https://nodejs.org/)
- **MongoDB** (Community Edition) — [Download](https://www.mongodb.com/try/download/community)
- **Git** — [Download](https://git-scm.com/)

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/inventory-management-system.git
cd inventory-management-system
```

### 2. Start MongoDB

Make sure MongoDB is running locally:

```bash
# On Windows (if installed as a service, it should auto-start)
# Or start manually:
mongod
```

### 3. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory (already included):

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/inventory_db
NODE_ENV=development
```

Start the backend server:

```bash
npm run dev
```

The API will be running at: `http://localhost:5000`

### 4. Setup Frontend

Open a **new terminal**:

```bash
cd frontend
npm install
npm run dev
```

The app will be running at: `http://localhost:5173`

---

## 📡 API Endpoints

| Method | Endpoint                  | Description              |
|--------|---------------------------|--------------------------|
| POST   | `/api/products`           | Add a new product        |
| GET    | `/api/products`           | Get all products         |
| PUT    | `/api/products/:id`       | Update a product by ID   |
| DELETE | `/api/products/:id`       | Delete a product by ID   |
| GET    | `/api/products/low-stock` | Get all low-stock products |
| GET    | `/api/health`             | Health check             |

### Product Schema

```json
{
  "name": "Wireless Mouse",
  "category": "Electronics",
  "price": 599.99,
  "quantity": 5,
  "minStock": 10
}
```

| Field     | Type   | Required | Default | Description                        |
|-----------|--------|----------|---------|------------------------------------|
| name      | String | Yes      | —       | Product name (max 100 chars)       |
| category  | String | Yes      | —       | Product category (max 50 chars)    |
| price     | Number | Yes      | —       | Product price (≥ 0)                |
| quantity  | Number | Yes      | 0       | Current stock quantity (≥ 0)       |
| minStock  | Number | Yes      | 10      | Minimum stock threshold (≥ 0)     |
| createdAt | Date   | Auto     | —       | Auto-generated timestamp           |
| updatedAt | Date   | Auto     | —       | Auto-generated timestamp           |

---

## 🧠 Assumptions & Design Decisions

1. **Low Stock Logic**: A product is considered "low stock" when `quantity ≤ minStock`. This uses MongoDB's `$expr` operator for field-to-field comparison.

2. **No Authentication**: Since this is a simple inventory tool, authentication/authorization was not implemented to keep the scope focused on core CRUD functionality.

3. **Client-side Filtering**: Search and category filtering are done on the frontend for simplicity and faster UX. For larger datasets, this would be moved to server-side queries.

4. **Single Database**: All products are stored in a single `products` collection. No separate collections for categories — categories are derived from product data.

5. **Currency**: Prices are displayed in INR (₹) format. This can be easily changed in the `ProductCard.jsx` component.

6. **Route Ordering**: The `/low-stock` route is registered before the `/:id` route to prevent Express from treating "low-stock" as an ID parameter.

7. **Timestamps**: MongoDB's `timestamps` option auto-generates `createdAt` and `updatedAt` fields.

---

## 🔮 Future Improvements

- **Pagination** — Server-side pagination for large datasets
- **Authentication** — User login/signup with JWT tokens
- **Role-Based Access** — Admin vs. Viewer permissions
- **Bulk Operations** — Import/export products via CSV
- **Stock History** — Track quantity changes over time
- **Dashboard Charts** — Visual analytics with Chart.js or Recharts
- **Server-side Search** — Move filtering to API with query parameters
- **Image Uploads** — Product images with cloud storage (Cloudinary)
- **Unit Tests** — Jest + Supertest for API testing
- **Docker** — Containerized deployment setup
- **Dark/Light Toggle** — Theme switcher in the UI

---

## 📄 License

This project is for educational/assignment purposes.
=======
# Inventory_Management_System
>>>>>>> ac16a4bf3b8a129ccc63050d0d99474d7d171d83
