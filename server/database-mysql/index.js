const mysql = require('mysql2');

const connection = mysql.createConnection({
  host     : 'localhost',
<<<<<<< HEAD
  user     : 'root',
  password : 'root',
=======
  user     : 'mrabet',
  password : 'clavier123',
>>>>>>> 3ab537ad5c5dff17838de961ff961ed15bada824
  database : 'ecommerce'
});

module.exports = connection;