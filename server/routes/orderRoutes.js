const express = require("express");
const verifyToken = require("../middleware/auth");
const router = express.Router();

const {
    createOrder,
    getOrders,
    getOrder,
    updateOrder,
    deleteOrder
} = require("../controllers/orderController");

// Place Order
router.post("/", verifyToken, createOrder);

// Get All Orders
router.get("/", verifyToken, getOrders);

// Get Single Order
router.get("/:id", verifyToken, getOrder);

// Update Order
router.put("/:id", verifyToken, updateOrder);

// Delete Order
router.delete("/:id", verifyToken, deleteOrder);

module.exports = router;