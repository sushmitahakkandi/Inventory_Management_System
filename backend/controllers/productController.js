const Product = require("../models/Product");

// @desc    Add a new product
// @route   POST /api/products
// @access  Public
const addProduct = async (req, res, next) => {
  try {
    const { name, category, price, quantity, minStock } = req.body;

    // Validate required fields
    if (!name || !category || price === undefined) {
      return res.status(400).json({
        success: false,
        message: "Please provide name, category, and price",
      });
    }

    const product = await Product.create({
      name,
      category,
      price,
      quantity: quantity || 0,
      minStock: minStock || 10,
    });

    res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all products
// @route   GET /api/products
// @access  Public
const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: products.length,
      data: products,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update a product by ID
// @route   PUT /api/products/:id
// @access  Public
const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const product = await Product.findByIdAndUpdate(id, updateData, {
      new: true, // Return the updated document
      runValidators: true, // Run schema validators on update
    });

    if (!product) {
      return res.status(404).json({
        success: false,
        message: `Product not found with id: ${id}`,
      });
    }

    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete a product by ID
// @route   DELETE /api/products/:id
// @access  Public
const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: `Product not found with id: ${id}`,
      });
    }

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get products with low stock (quantity <= minStock)
// @route   GET /api/products/low-stock
// @access  Public
const getLowStockProducts = async (req, res, next) => {
  try {
    // Find products where quantity is less than or equal to minStock
    const products = await Product.find({
      $expr: { $lte: ["$quantity", "$minStock"] },
    }).sort({ quantity: 1 });

    res.status(200).json({
      success: true,
      count: products.length,
      data: products,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  getLowStockProducts,
};
