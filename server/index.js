const express = require("express");

const itemRoutes = require('./routes/item.routes');
const cartRoutes = require ('./routes/cart.routes')



const userRoutes = require('./routes/users.routes')
const cors = require ("cors")

 const db = require('./database-mysql');


const app = express();

const PORT = process.env.PORT || 3000


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));

app.use("/api/user", itemRoutes);
app.use("/api/backet/relation/:id",cartRoutes)

app.use(cors());
app.use("/api/user", userRoutes);

app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
