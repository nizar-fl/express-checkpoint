const express = require("express");
const router = express.Router();

// GET home page

router.get("/", (_, res) => {
  console.log("GET /");
  res.render("logIn", {
    title: "Express WS",
    message: "Hello World",
  });
});

module.exports = router;
