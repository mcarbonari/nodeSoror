module.exports.index = function (app, req, res) {
	if (!req.session.loggedin) {
		res.render('home');
	} else {
		// abreperfil();

		// var cad = document.querySelector('#cad');
		// var login = document.querySelector('#login');
		// var perfil = document.querySelector('#perfil');

		// login.style.display == 'none'
		// perfil.style.display == 'block';
		// cad.style.display = 'none'

		// res.redirect('/#perfil');
			res.render('home');
			// var imgperfil = document.querySelector('#perfilimg');
			// imgperfil.style.display = 'block';
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
				res.redirect('/'); 
				// abreperfil(); 
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