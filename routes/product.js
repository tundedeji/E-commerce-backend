const express = require("express");
const {
  getAllProducts,
  createProduct,
  getProductById,
} = require("../controllers/productControllers");
const auth = require("../middleware/auth");

const router = express.Router();

// Public
router.get("/", getAllProducts);
router.post("/", auth, createProduct);

router.get("/:id", getProductById);

module.exports = router;
