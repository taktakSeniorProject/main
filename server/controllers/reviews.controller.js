const connection=require("../database-mysql/index")
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
const db = require("../database-mysql");
db.connect((err) => {
    if (err) console.log(err);
    else console.log("db is working");
  });

    const POstReview=(req,res)=>{
      try{
      const {comment,revRating}=req.body
      const {idUser}=req.params
     const quer=(`INSERT INTO review (revRating,comment,user_user_id) VALUES ("${revRating}","${comment}",${idUser})`)
     db.promise().query(quer)
     res.send('comment added')
    }catch(err){
      console.log(err);
    }
    }
    const getComments =(req,res)=>{
      try{
const {iduser}=req.params
const quer=(`SELECT  comment FROM review WHERE  user_user_id=${iduser} `)
db.promise().query(quer)
res.send('comment getted')
}catch(err){
 console.log(err);
}
      }

  const getReview =(req,res)=>{
        try{
  const {iduser}=req.params
  const quer=(`SELECT  revRating FROM review WHERE  user_user_id=${iduser} `)
  db.promise().query(quer)
  res.send('Review getted')
  }catch(err){
   console.log(err);
  }
        }
  
 
  module.exports = {getReview,getComments,POstReview};