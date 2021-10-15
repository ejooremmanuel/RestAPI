const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Hello! Welcome to HomePage." });
});

module.exports = router;
