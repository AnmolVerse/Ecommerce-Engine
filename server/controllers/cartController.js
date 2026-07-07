const Cart = require("../models/Cart");

//ADD TO CART
const addToCart = async (req, res) => {
    try {
        const { product, quantity } = req.body;
        const user = req.user.id;

        const existingItem = await Cart.findOne({ user, product });

        if (existingItem) {
            existingItem.quantity += quantity || 1;
            await existingItem.save();

            return res.status(200).json({
                success: true,
                message: "Cart Updated",
                cart: existingItem
            });
        }

        const cart = await Cart.create({
            user,
            product,
            quantity
        });

        res.status(201).json({
            success: true,
            message: "Product Added To Cart",
            cart
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

//  GET CART
const getCart = async (req, res) => {
    try {

        const cart = await Cart.find({ user: req.params.userId })
            .populate("product")
            .populate("user", "username email");

        res.status(200).json({
            success: true,
            count: cart.length,
            cart
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// UPDATE QUANTITY 
const updateCart = async (req, res) => {
    try {

        const cart = await Cart.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!cart) {
            return res.status(404).json({
                success: false,
                message: "Cart Item Not Found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Cart Updated Successfully",
            cart
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

//REMOVE FROM CART
const removeFromCart = async (req, res) => {
    try {

        const cart = await Cart.findByIdAndDelete(req.params.id);

        if (!cart) {
            return res.status(404).json({
                success: false,
                message: "Cart Item Not Found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Item Removed From Cart"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    addToCart,
    getCart,
    updateCart,
    removeFromCart
};