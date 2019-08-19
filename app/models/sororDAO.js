function sororDAO(connection){
  this._connection = connection;
}

sororDAO.prototype.getUsuario = function(callback) {
	this._connection.query('select * from usuario', callback);
}

sororDAO.prototype.salvarUsuario = function(usuario, callback){
  this._connection.query('insert into usuario set ? ', usuario, callback);
}

module.exports = function(){
  return sororDAO;
} 