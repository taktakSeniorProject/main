// DELETE THIS LINE
const selectAll = () => {};
const connection=require("..//database-mysql/index")
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
const db = require("../database-mysql");
db.connect((err) => {
    if (err) console.log(err);
    else console.log("db is working");
  });

 
  

  const getallpostsofoneUser=(items_id,user_id)=>{
    
    try {
      query1=`SELECT * FROM items WHERE "${user_id}"="${items_id}"`
      return db.promise().query(query1)
    } catch (error) {
      console.log(error);
    }
  }
  
  const deleteIteam=(id)=>{
    try{
      query2=`DELETE FROM items WHERE items="${id}"`
    } catch (error) {
      console.log(error);
    }
  }
  
  const addanitemtouser=()=>{
    try {
      query3=`INSERT INTO items (title,description,quantity,price,gategorie) 
      VALUES("${title}","${description}","${quantity},"${price}","${gategorie}")WHERE "${user_id}"="${items_id}"`
    }catch(error){
      console.log(error);
    }
  }
  
  



module.exports = { selectAll,getOne,getallpostsofoneUser,GetItemsToBuy,deleteIteam,addanitemtouser};
