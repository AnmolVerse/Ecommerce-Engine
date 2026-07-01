const express = require("express");

const router = express.Router();

// Signup
router.post("/signup", (req, res) => {
    res.json({
        message: "Signup API Working"
    });
});

// Login
router.post("/login", (req, res) => {
    res.json({
        message: "Login API Working"
    });
});

module.exports = router;