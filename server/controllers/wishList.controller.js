const db = require("../database-mysql");

const getWishList = function (req,res){
    const {id}=req.params
    db.query('SELECT items.* FROM ecommerce.wishlists JOIN ecommerce.items ON wishlists.item_id = items.id WHERE wishlists.user_user_id = ?;',[id])
    .then((result)=>res.send(result))
    .catch((err)=>(console.log(err)))
}
const deleteItemFWL = function (req,res){
    const {userId,itemId} = req.params
    db.query("DELETE FROM wishlists WHERE user_user_id = ? and item_id = ?;",[userId,itemId])
    .then((result)=>res.send(result))
    .catch((err)=>(console.log(err)))
}
const deletAllItemFWL = function(req,res){
    const {id} = req.params
    db.query("DELETE * FROM wishlists where user_user_id=?;",[id])
    .then((result)=>res.send(result))
    .catch((err)=>(console.log(err)))
}

const addToWishList = function(req,res){
    const {userId,itemId} = req.params
    db.query("INSERT INTO wishlists (user_user_id, item_id) VALUES (?, ?);",[userId,itemId])
}



module.exports = {getWishList,deleteItemFWL,deletAllItemFWL,addToWishList};
