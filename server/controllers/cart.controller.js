const db = require("../database-mysql");

const selectAll = function (req, res) {
  db.query("SELECT * FROM bacet")
  .then((result)=>{res.send(result[0])
  })    
  .catch((err)=>console.log(err))};

  const selectOne = (req, res) => {
    const id = req.params.id;
    db.query("SELECT * FROM bacet WHERE bacet_id = ? ", [id])
      .then((result) => res.send(result[0]))
      .catch((err) => console.log(err));
  };
const selectAllWithRelation = function (req, res) {
  const {id} = req.params
  db.query("SELECT bacet.bacet_id, items.id, items.price FROM users LEFT JOIN bacet ON users.user_id = bacet.user_id LEFT JOIN items ON bacet.bacet_id = items.id WHERE user.user_id = ?;",[id])
  .then((result)=>res.send(result))    
  .catch((err)=>console.log(err))};


const updateCart = (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;
  db.query("UPDATE items SET quantity = ? WHERE bacet_id = user.bacet_bacet_id AND bacet_id=items.bacet_bacet_id AND items.id=?", [gategorie, id])
    .then((result) => res.send(result))
    .catch((error)=>console.log(error))
}
const deleteItem = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM bacet WHERE item.id = ? AND " , [id])
  .then((result)=>res.send(result))
  .catch((error)=>console.log(error))
}


  
  module.exports = { 
  selectAll,
  selectOne,
  updateCart,
  deleteItem,
  selectAllWithRelation
 };
