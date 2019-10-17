module.exports.sobrenos = function(app, req, res){
  res.render("sobre/sobrenos", {validacao: {}});
}

module.exports.soror_salvar = function(app, req, res){
  var usuario = req.body;
  console.log(usuario);

  req.assert('nome', 'Nome é obrigatório').notEmpty();
	req.assert('email', 'Email é obrigatório').isEmail();
	req.assert('senha', 'Senha é obrigatório').notEmpty();
	req.assert('confirmar_senha', 'Confirmar senha é obrigatório').notEmpty();
	req.assert('cpf', 'CPF inválido').len(14, 14);

	var erros = req.validationErrors();
	if (erros){
		console.log(erros);
		res.render("home/index", {validacao: erros});
		return;
	}

  var connection = app.config.dbConnection();
	var sororModel = new app.app.models.sororDAO(connection);

	sororModel.salvarUsuario(usuario, function(error, result){
		res.redirect('/#cad');
	});
}


