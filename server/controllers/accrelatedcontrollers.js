const connection=require("../database-mysql/index")



const db = require("../database-mysql");
db.connect((err) => {
    if (err) console.log(err);
    else console.log("db is working");
  });

  const itemofuser=(req,res)=>{
    const {user_id}=req.params
    try {
      const query1 = `SELECT * from items WHERE user_user_id=${user_id} `
      return db.promise().query(query1)
      .then((result)=>res.json(result))
    } catch (error) {
      console.log(error);
    }
   }

   const edititems=(req,res)=>{

   }



module.exports = {itemofuser,edititems}