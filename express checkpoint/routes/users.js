const express = require("express");
const router = express.Router();
const login = require("../controllers/userControllers");

router.post("/login", (req, res) => {
  const isValid = login(req.body.username, req.body.password);
    if (isValid) {
  res.render("homePage", {
    title: "Login",
    message: "Login",
  });
} else {
    res.render("logIn", {
        title: "Login",
        message: "Login",
    
});
}
});

module.exports = router;
