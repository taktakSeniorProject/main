// DELETE THIS LINE
const { error } = require("jquery");
const connection=require("..//database-mysql/index")
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
const db = require("../database-mysql");
db.connect((err) => {
    if (err) console.log(err);
    else console.log("db is working");
  });

  const GetItemsToBuy =(req,res)=>{
    try{
const GetItemsToBuy="SELECT * FROM items"
return db.promise().query(GetItemsToBuy)
}
    catch(error){
console.log(error);
    }
  }

const addItems =(req,res)=>{
  try {
    const {title,description,quantity,price,gategorie}=req.body;
    const{user_user_id,bacet_bacet_id,wishlists_wishlist_id}=req.params
    const AddItems = `INSERT INTO items values(title,description,quantity,price,gategorie,user_user_id,bacet_bacet_id,wishlists_wishlist_id
      values (${title}), ${description},${quantity} ,${price}, ${gategorie} ,${user_user_id} , ${bacet_bacet_id}, ${wishlists_wishlist_id} )
      `
    db.promise().query(AddItems)
    res.json("addedItem")
  } catch (error) {
  console.error(error)    
  }
}  
module.exports = { GetItemsToBuy, addItems};

