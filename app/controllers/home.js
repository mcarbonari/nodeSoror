module.exports.index = function (app, req, res) {
	if (!req.session.loggedin) {
		res.render('home');
	} else {
		 res.redirect('logado');

		 sororModel.getUsuario(id_usuario, function(error, result){
			res.redirect('/usuario?id_usuario=' + id_usuario);					
		})

		// var connection = app.config.dbConnection();
		// var sororModel = new app.app.models.sororDAO(connection);
		
		// sororModel.getUsuario(id_usuario, function(error, result){
		// 	res.redirect('logado', {validacao:{}, usuario : result});
		// });
	}
}

module.exports.login_usuario = function (app, req, res) {
	var email = req.body.emaillog;
	var senha = req.body.senhalog;
	if (email && senha) {
		var connection = app.config.dbConnection();
		var usuario_Model = new app.app.models.sororDAO(connection);
		usuario_Model.loginUsuario(email, senha, function(error, result){
			if (result.length > 0) {
				req.session.loggedin = true;
				req.session.email = email;
				res.redirect('/logado'); 
			} else {
				res.send('usuario ou senha incorretos')
			}
			res.end();
		});
	} else {
	res.send('por favor entre com o usuario e a senha');
	res.end();
}
}