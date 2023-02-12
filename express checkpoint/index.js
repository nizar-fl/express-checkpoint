const express = require("express");
const path = require("path");
// require dotenv
require("dotenv").config();
// instantiate express
const app = express();
// port
const PORT = process.env.PORT || 3000;

// set view engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
// set static folder for css
app.use(express.static(path.join(__dirname, "public")));
// parse incoming data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));
//listen to port
app.listen(PORT, () => {
  console.log("Server is running on port " + process.env.PORT);
});
