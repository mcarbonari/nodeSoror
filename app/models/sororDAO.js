    
function sororDAO(connection){
  this._connection = connection;
}
sororDAO.prototype.salvarUsuario = function(usuario, callback){
  this._connection.query('insert into usuario set ? ', usuario, callback);
}

module.exports = function(){
  return sororDAO;
} 