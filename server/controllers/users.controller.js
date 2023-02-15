// DELETE THIS LINE
const connection=require("../database-mysql/index")
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
const db = require("../database-mysql");
db.connect((err) => {
    if (err) console.log(err);
    else console.log("db is working");
  });

  const getOne= (req,res)=>{
    try {
      
      const {email,password}=req.params
      const quer=`SELECT * from user WHERE email="${email}" AND password= "${password}"`
      db.promise().query(quer).then((result)=>res.json(result[0]))
    } catch (error) {
      console.log(error);
    }
  }
const addOne= (req,res)=>{
    try {
        console.log(req.body)
        const {username , email , password , phoneN }=req.body;
      const quer=`INSERT INTO user(username,email,password,phoneN) VALUES ("${username}","${email}","${password}","${phoneN}")`
       db.promise().query(quer)
       res.send("added")
    } catch (error) {
      console.log(error);
    }
}
const selectAll=(req,res)=>{
  try {
    const quer=`SELECT * from user`
    let result=db.promise().query(quer)
    res.json(result)
  } catch (error) {
    console.log(error);
  }
}

module.exports = {getOne ,addOne,selectAll};
