
const express = require("express");
const itemRoutes = require('./routes/item.routes')
const accRoutes=require("./routes/accrelatedroutes")

// TODO: Update this
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
 const db = require('./database-mysql');
// const db = require('./database-mongo');
const jwt=require("jsonwebtoken");
require('dotenv').config()
const app = express();

const PORT = process.env.PORT || 3000


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));

app.use("/api/user", itemRoutes);
app.use("/api/user",accRoutes)

app.listen(PORT, function () {
  console.log("listening on port 3000!");
});


