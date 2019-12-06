module.exports.sobrenos = function(app, req, res){
  res.render("sobre/sobrenos", {validacao: {}});
}

module.exports.logado = function(app, req, res){
  res.render("logado/logado", {validacao: {}});
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

module.exports.soror_salvarservico = function(app, req, res){
  var servico = req.body;
  console.log(servico);

	req.assert('categoria', 'é obrigatório').notEmpty();
	req.assert('especifico', 'é obrigatório').notEmpty();
	req.assert('descricao', 'é obrigatório').notEmpty();
	req.assert('contato', 'é obrigatório').len(14, 14);

	var erros = req.validationErrors();
	if (erros){
		console.log(erros);
		res.render("home/index", {validacao: erros});
		return;
	}

  var connection = app.config.dbConnection();
	var sororModel = new app.app.models.sororDAO(connection);

	sororModel.salvarServico(servico, function(error, result){
		res.redirect('/#cad');
	});
}

module.exports.soror_salvarrelato = function(app, req, res){
  var relato = req.body;
  console.log(relato);

	req.assert('nomerelato', 'é obrigatório. para anonimato escreva ANONIMO').notEmpty();
	req.assert('emailrelato', 'Email é obrigatório').isEmail();
	req.assert('assuntorelato', 'é obrigatório').notEmpty();
	req.assert('relatorelato', 'é obrigatório').notEmpty();

	var erros = req.validationErrors();
	if (erros){
		console.log(erros);
		res.render("home/index", {validacao: erros});
		return;
	}

  var connection = app.config.dbConnection();
	var sororModel = new app.app.models.sororDAO(connection);

	sororModel.salvarRelato(relato, function(error, result){
		res.redirect('/');
	});
}

module.exports.usuario = function(app, req, res){
  if (req.session.loggedin) {
  	var connection = app.config.dbConnection();
   	var sororModel = new app.app.models.sororDAO(connection);

		if (req.query.id_usuario){
			var id_usuario = req.query;
			console.log("aaaaaaaaaaaaaaaaaaaaaa"+id_usuario);
		} else{
				res.redirect('/logado');
		 	return;
		}

  sororModel.getUsuario(id_usuario,function(error, result){
    res.render('logado',{usuario:result});
	});

	} else {
	  res.redirect('/');
	}
  
}

module.exports.logout_usuario=function(app, req, res){
	req.session.destroy();
		res.redirect('/');
}