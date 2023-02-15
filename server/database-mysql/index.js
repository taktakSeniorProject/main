const mysql = require('mysql2');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'mrabet',
  password : 'clavier123',
  database : 'ecommerce'
});

module.exports = connection;