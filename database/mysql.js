var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '971014',
  database: 'mydb'
});

module.exports = connection
