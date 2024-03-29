const express = require("express");
const router = express.Router();

//routers handlers
const userController = require("../controllers/Usercontroller");
const productController = require("../controllers/productController");
const cartController = require("../Controllers/cartController");
const orderController = require("../Controllers/orderController");
const mid = require("../middlewares/auth");

// User API's
router.post("/register", userController.registerUser);
router.post("/login", userController.login);
router.get("/user/:userId/profile", mid.Auth, userController.getUser);
router.put("/user/:userId/profile", mid.Auth, userController.updateUser);

// Product API's
router.post("/products", productController.CreateProduct);
router.get("/products", productController.GetProducts);
router.get("/products/:productId", productController.getProductById);
router.put("/products/:productId", productController.update);
router.delete("/products/:productId", productController.productDel);

// Cart API's

router.post("/users/:userId/cart", mid.Auth, cartController.createCart)
.put("/users/:userId/cart", mid.Auth, cartController.updateCart)
.get("/users/:userId/cart", mid.Auth, cartController.getCart)
.delete("/users/:userId/cart", mid.Auth, cartController.deleteCart)

// Order API's

router.post("/users/:userId/orders", mid.Auth, orderController.createOrder);
router.put("/users/:userId/orders", mid.Auth, orderController.updateOrder);

module.exports = router;
