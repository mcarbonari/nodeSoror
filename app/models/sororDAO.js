function sororDAO(connection){
  this._connection = connection;
}

sororDAO.prototype.getUsuario = function(callback) {
	 var n = this._connection.query('select * from usuario where email = \' '+ email.value +'\' and senha = \''+ senha.value +'\'', callback);
	 return n;
}

sororDAO.prototype.salvarUsuario = function(usuario, callback){
  this._connection.query('insert into usuario set ? ', usuario, callback);
}

module.exports = function(){
  return sororDAO;
} 