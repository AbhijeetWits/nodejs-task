const express = require("express");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 3000;
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/user", userRoutes);

app.listen(port, () => {
  console.log("Example app listening at " + port);
});
