const express = require("express");
const verifyToken = require("../middleware/auth");
const isAdmin = require("../middleware/admin");

const router = express.Router();

const {
    createProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct
} = require("../controllers/productController");

// Create Product
router.post("/", verifyToken, isAdmin, createProduct);

// Get All Products
router.get("/", getProducts);

// Get Single Product
router.get("/:id", getProduct);

// Update Product
router.put("/:id",verifyToken, isAdmin, updateProduct);

// Delete Product
router.delete("/:id",verifyToken, isAdmin, deleteProduct);

module.exports = router;