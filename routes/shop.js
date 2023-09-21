const express = require("express");
const fs = require("fs");
const path = require('path')

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("This is another middleware");
  res.sendFile(path.join(__dirname,'../', 'views', 'shop.html'))
});

module.exports = router;
