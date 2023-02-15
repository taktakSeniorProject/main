const connection=require("../database-mysql/index")
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
const db = require("../database-mysql");
db.connect((err) => {
    if (err) console.log(err);
    else console.log("db is working");
  });
const PostReview=(req,res)=>{
    const {revRating,comments}=req.body
    const {idUser,idItem}=req.params
    db.query('INSERT INTO review (revRating,comments,items_id,user_user_id) VALUES(?,?,?,?) WHERE items_id=?  AND user_user_id=?',[revRating,comments,idItem,idUser]) 
    if(error){
      console.log(error);
    }
    }
  module.exports = { PostReview};
  