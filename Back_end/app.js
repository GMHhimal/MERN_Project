//pass -78PJtnJlvo5mY509
//username - admin

const express = require("express");
const mongoose = require("mongoose");
const router = require("./Routes/UserRoutes");

const app = express();
const cors = require("cors");

//Middleware
app.use(express.json());
app.use(cors());
app.use("/users", router);

//MongoDB Connection
mongoose
  .connect("mongodb+srv://admin:78PJtnJlvo5mY509@cluster0.35epv.mongodb.net/")
  .then(() => console.log("Connected to MongoDB,Connection Successful.")) // this need be same line
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
//Register-----------
//call Register Model
require("./Model/Register");
const User = mongoose.model("Register");
app.post("/register", async (req, res) => {
  const { name, gmail, password } = req.body;
  try {
    await User.create({
      name,
      gmail,
      password,
    });
    res.send({ status: "ok" });
  } catch (err) {
    res.send({ status: "err" });
  }
});

//Login-----------
app.post("/login", async (req, res) => {
  const { gmail, password } = req.body;
  try {
    const user = await User.findOne({gmail});
    if (!user) {
      return res.json({ err: "User not found" });
    }
    if (user.password === password) {
      return res.json({ status: "ok" });
    } else {
      return res.json({ status: "Invalid Password" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: "Server Error" });
  }
});
