const express = require("express");
const {
  register,
  login,
  getProfile,
} = require("../controllers/authControllers");
const auth = require("../middleware/auth");
const router = express.Router();

// public
router.post("/register", register);
router.post("/login", login);

// Protected routes
router.get("/profile", auth, getProfile);

module.exports = router;
