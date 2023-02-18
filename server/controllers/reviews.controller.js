const connection=require("../database-mysql/index")
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
const db = require("../database-mysql").promise();;
db.connect((err) => {
    if (err) console.log(err);
    else console.log("db is working");
  });

    const POstReview=(req,res)=>{
      try{
      const {comment,revRating}=req.body
      const {idUser}=req.params
     const quer=(`INSERT INTO review (revRating,comments,user_user_id) VALUES ("${revRating}","${comment}","${idUser}")`)

     db.query(quer).then(()=>{
      res.json("comment added")
     })
    }catch(err){
      console.log(err);
    }
    }
    const getComments =(req,res)=>{
        const {iduser}=req.params

const quer=(`SELECT comments FROM review WHERE user_user_id = "${iduser}"`)
db.query(quer).then((result)=>{res.json(result[0])})

.catch((err)=>console.log(err));

      }

  const getReview =(req,res)=>{
        try{
  const {iduser}=req.params
  const quer=(`SELECT  revRating FROM review WHERE  user_user_id = "${iduser}" `)
  db.query(quer).then((response)=>res.json(response[0]))
  
  }catch(err){
   console.log(err);
  }
        }
  
 
  module.exports = {getReview,getComments,POstReview};