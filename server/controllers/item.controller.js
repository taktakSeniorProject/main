
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

const addItem=(req,res)=>{
  try {
    const {title,description,price,gategorie,img}=req.body
    const{id}=req.params
    console.log(req.params)
    const quer=`INSERT INTO items (title, description, price, gategorie, img, user_user_id)
    SELECT '${title}', '${description}', '${price}', '${gategorie}', '${img}', ${id}
    FROM user
    WHERE EXISTS (SELECT 1 FROM user WHERE user_id = ${id});
    `
    db.promise().query(quer)
    res.json("addedItem")
  } catch (error) {
    
  }
}
const addToWishList =  function(req,res){
  
  try {
    const {userId, itemId} =req.params
    const query = `INSERT INTO wishlists (user_user_id,item_id) VALUES ("${userId}", "${itemId}")`;
    db.promise().query(query);
    res.send('added');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error adding item to wishlist');
  }
  
  }

  // const addItems =(req,res)=>{
  //   try {
  //     const {title,description,quantity,price,gategorie}=req.body;
  //     const{user_user_id,bacet_bacet_id,wishlists_wishlist_id}=req.params
  //     const AddItems = `INSERT INTO items values(title,description,quantity,price,gategorie,user_user_id,bacet_bacet_id,wishlists_wishlist_id
  //       values (${title}), ${description},${quantity} ,${price}, ${gategorie} ,${user_user_id} , ${bacet_bacet_id}, ${wishlists_wishlist_id} )
  //       `
  //     db.promise().query(AddItems)
  //     res.json("addedItem")
  //   } catch (error) {
  //   console.error(error)    
  //   }
  // }  
  module.exports = {addToWishList ,GetItemsToBuy,addItem};