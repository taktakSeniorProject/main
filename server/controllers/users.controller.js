// DELETE THIS LINE
const connection=require("../database-mysql/index")
const jwt=require("jsonwebtoken");
const dot=require('dotenv')
dot.config()
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
const db = require("../database-mysql");
db.connect((err) => {
    if (err) console.log(err);
    else console.log("db is working");
  });

  const getOne= (req,res)=>{
    try {
      
      const {email}=req.params
      const quer=`SELECT * from user WHERE email="${email}"`
      db.promise().query(quer).then((result)=>res.json(result[0]))
    } catch (error) {
      console.log(error);
    }
  }
const addOne= (req,res)=>{
    try {
        console.log(process.env.ACCESS_TOKEN_SECRET)
        const {username , email , password , phoneN }=req.body;
        const user={
          username:username,
          email:email,
          password:password,
          phoneN:phoneN,
        }
        console.log(user);
       const accessToken= jwt.sign({email:user.email,password:user.password},process.env.ACCESS_TOKEN_SECRET)
      const quer=`INSERT INTO user(username,email,password,phoneN) VALUES ("${username}","${email}","${password}","${phoneN}")`
       db.promise().query(quer)
       res.json({accessToken:accessToken})
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
const addImguser=(req,res)=>{
  try {
    console.log(req.body)
    const {id}=req.params
    const {profile}=req.body;
    const quer=`UPDATE user SET profile = "${profile}" where user_id= ${id}`
    db.promise().query(quer)
    res.send("added")
  } catch (error) {
    console.log(error);
  }
}
const modifyUser=(req,res)=>{
  try {
    console.log(req.body)
    const {id}=req.params
    const {username, email, phoneN }=req.body;
    const quer=`UPDATE user SET username="${username}",email="${email}",phoneN="${phoneN}" where user_id= ${id}`
    db.promise().query(quer)
    res.send("added")
  } catch (error) {
    console.log(error);
  }
}
module.exports = {getOne ,addOne,selectAll,addImguser,modifyUser};
