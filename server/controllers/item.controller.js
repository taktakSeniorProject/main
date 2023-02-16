// DELETE THIS LINE
const selectAll = () => {};
const connection=require("..//database-mysql/index")
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
const db = require("../database-mysql");
db.connect((err) => {
    if (err) console.log(err);
    else console.log("db is working");
  });

  //get all Items
  const GetItemsToBuy =(req,res)=>{  
const GetItemsToBuy="SELECT * FROM items"
db.query(GetItemsToBuy,(error,result)=>{
  res.send(result)
})
  }


module.exports = { GetItemsToBuy,selectAll };

