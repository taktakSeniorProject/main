// DELETE THIS LINE
const selectAll = () => {};
const { error } = require("jquery");
const connection=require("..//database-mysql/index")
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
const db = require("../database-mysql");
db.connect((err) => {
    if (err) console.log(err);
    else console.log("db is working");
  });

  //get all Items
  const GetItemsToBuy =(req,res)=>{
    try{
const GetItemsToBuy="SELECT * FROM items"
return db.promise().query(GetItemsToBuy)
}
    catch(error){
console.log(error);
    }
  }
module.exports = { GetItemsToBuy,selectAll };

