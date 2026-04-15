const express = require("express");
const router = express.Router();
const {
  addProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  getLowStockProducts,
} = require("../controllers/productController");

// IMPORTANT: Place /low-stock BEFORE /:id to prevent route conflicts
router.get("/low-stock", getLowStockProducts);

router.route("/").get(getAllProducts).post(addProduct);

router.route("/:id").put(updateProduct).delete(deleteProduct);

module.exports = router;
