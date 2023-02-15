// DELETE THIS LINE


const connection=require("..//database-mysql/index")
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
const db = require("../database-mysql");
db.connect((err) => {
    if (err) console.log(err);
    else console.log("db is working");
  });

  const getOne= (email,password)=>{
    try {
      const quer=`SELECT * from user WHERE email="${email}" AND password= "${password}"`
      return  db.promise().query(quer)
    } catch (error) {
      console.log(error);
    }
  }
  const GetItemsToBuy =(req,res)=>{
    try{
const GetItemsToBuy="SELECT * FROM items"
return db.promise().query(GetItemsToBuy)
}
    catch(error){
console.log(error);
    }
  }

   

module.exports = { GetItemsToBuy,getOne};

