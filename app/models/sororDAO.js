function sororDAO(connection){
  this._connection = connection;
}

sororDAO.prototype.salvarUsuario = function(usuario, callback){
  this._connection.query('insert into usuario set ? ', usuario, callback);
}

sororDAO.prototype.loginUsuario = function(emaillog, senhalog, callback) {
	this._connection.query('select * from usuario where email = ? AND senha = ?', [emaillog,senhalog], callback);
}

module.exports = function(){
  return sororDAO;
} 