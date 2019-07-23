module.exports.sobrenos = function(app, req, res){
  res.render("sobre/sobrenos");
}

module.exports.soror_salvar = function(app, req, res){
  var usuario = req.body;
  console.log(usuario);
  var connection = app.config.dbConnection();
	var sororModel = new app.app.models.sororDAO(connection);

	sororModel.salvarUsuario(usuario, function(error, result){
	res.redirect('/#cad');
	});
}


