var mysql = require('mysql');

var connMySQL = function(){
  console.log('conexão com o banco estabelecida');
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'soror'
  });
}

module.exports = function(){
  console.log("o autoload carregou o módulo de conexão com o banco de dados");
  return connMySQL;
}