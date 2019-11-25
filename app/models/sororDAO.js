function sororDAO(connection){
  this._connection = connection;
}

sororDAO.prototype.salvarUsuario = function(usuario, callback){
  this._connection.query('insert into usuario set ? ', usuario, callback);
}

sororDAO.prototype.loginUsuario = function(emaillog, senhalog, callback) {
	this._connection.query('select * from usuario where email = ? AND senha = ?', [emaillog,senhalog], callback);
}

sororDAO.prototype.getUsuario = function(id_usuario, callback){
	this._connection.query('select * from usuario where id_usuario = ' + id_usuario.id_usuario, callback);
    }


sororDAO.prototype.salvarServico = function(servico, callback){
	this._connection.query('insert into servico set ? ', servico, callback);
}

sororDAO.prototype.salvarRelato = function(relato, callback){
	this._connection.query('insert into relato set ? ', relato, callback);
}

module.exports = function(){
  return sororDAO;
} 