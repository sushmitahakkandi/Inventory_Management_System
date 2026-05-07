import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const API = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Get all products
export const getProducts = () => API.get("/products");

// Add a new product
export const addProduct = (productData) => API.post("/products", productData);

// Update a product
export const updateProduct = (id, productData) =>
  API.put(`/products/${id}`, productData);

// Delete a product
export const deleteProduct = (id) => API.delete(`/products/${id}`);

// Get low stock products
export const getLowStockProducts = () => API.get("/products/low-stock");

export default API;
