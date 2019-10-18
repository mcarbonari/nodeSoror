function sororDAO(connection){
  this._connection = connection;
}

sororDAO.prototype.salvarUsuario = function(usuario, callback){
  this._connection.query('insert into usuario set ? ', usuario, callback);
}

sororDAO.prototype.loginUsuario = function(callback) {
	this._connection.query('select * from usuario where email = ? AND senha = ?', [email,senha], callback);
}

module.exports = function(){
  return sororDAO;
} 