const express = require("express");
const verifyToken = require("../middleware/auth");
const router = express.Router();

const {
    addToCart,
    getCart,
    updateCart,
    removeFromCart
} = require("../controllers/cartController");

// Add Product To Cart
router.post("/", verifyToken, addToCart);

// Get User Cart
router.get("/:userId",verifyToken, getCart);

// Update Cart Quantity
router.put("/:id",verifyToken, updateCart);

// Remove From Cart
router.delete("/:id",verifyToken, removeFromCart);

module.exports = router;