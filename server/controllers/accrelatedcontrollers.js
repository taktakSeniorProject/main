const connection=require("../database-mysql/index")



const db = require("../database-mysql");
db.connect((err) => {
    if (err) console.log(err);
    else console.log("db is working");
  });

  const itemofuser=(req,res)=>{
    const {user_id}=req.params
    try {
      const query1 = `SELECT * from items WHERE user_user_id=${user_id}`
      return db.promise().query(query1)
      .then((result)=>res.json(result))
    } catch (error) {
      console.log(error);
    }
   }
   const additem=(req,res)=>{
    const {user_id}=req.params
    const {title,description,price,gategorie,img}=req.body
    
    try {
      const query2 = `INSERT INTO items (title,description,price,gategorie,img,user_user_id)
       VALUES ("${title}","${description}","${price}","${gategorie}","${img}","${user_id}")`
      
      return db.promise().query(query2)
      .then((result)=>res.json(result))
    }catch (error) {
      console.log(error)
    }
   }

  const deleteitem=(req,res)=>{
    const {id}=req.params
    try{ const query3=`DELETE FROM items WHERE id=${id}`
    return db.promise().query(query3)
      .then((result)=>res.json(result))
    }catch (error) {}
  }

  const edititems=(req,res)=>{
  const {id}=req.params 
  const {title,description,price,gategorie,img}=req.body
  try {
    const query4 = `UPDATE items SET title='${title}',description='${description}',
                    price='${price}',gategorie="${gategorie}",img='${img}' WHERE id=${id}`
    
    return db.promise().query(query4)
    .then((result)=>res.json(result))
  }catch (error) {
    console.log(error)
  }
 }

 const usersinfo=(req,res)=>{
  const {user_id}=req.params
  try {
    const query5 = `SELECT * from user WHERE user_id=${user_id}`
    return db.promise().query(query5)
    .then((result)=>res.json(result))
  } catch (error) {
    console.log(error);
  }
 }

  




module.exports = {itemofuser,additem,deleteitem,edititems,usersinfo}