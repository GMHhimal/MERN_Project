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
app.use("/users",router);


//MongoDB Connection
mongoose.connect("mongodb+srv://admin:78PJtnJlvo5mY509@cluster0.35epv.mongodb.net/")
.then(()=> console.log("Connected to MongoDB,Connection Successful.")) // this need be same line
.then(()=>{
    app.listen(5000);
})
.catch((err)=> console.log(err));