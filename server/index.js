
const express = require("express");
const userRoutes = require('./routes/users.routes')
const wishListRoute = require('./routes/wishList.routes')
const reviewsRoute = require('./routes/review.routes')
const accountRoute = require('./routes/accrelatedroutes')
const itemsRoute = require('./routes/item.routes')
const cors = require ("cors")

 const db = require('./database-mysql');


const app = express();

const PORT = process.env.PORT || 3000


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));
app.use(cors());

app.use("/api/user", userRoutes);
app.use("/api/wishList",wishListRoute);
app.use('/api/reviews',reviewsRoute)
app.use('/api/accounts',accountRoute)
app.use('/api/item',itemsRoute)

app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
