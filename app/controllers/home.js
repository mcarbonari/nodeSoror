module.exports.index = function(app, req, res){
  res.render("home/index");
}

// module.exports.home = function (app, req, res) {
// 	if (!req.session.loggedin) {
// 		res.render('index');
// 	} else {
// 		res.redirect('/#perfil')
// 	}
// }

// module.exports.login_usuario = function (app, req, res) {
// 	var email = req.body.email;
// 	var senha = req.body.senha;
// 	if (email && senha) {
// 		var connection = app.config.dbConnection();
// 		var usuario_Model.loginUsuario(email, senha, function (error, result) {
// 			if (result.length > 0) {
// 				req.session.loggedin = true;
// 				req.session.email = email;
				// res.redirect('/#perfil'); ???????????
				// abreperfil(); ?????????????
// 			} else {
// 				res.send('usuario ou senha incorretos')
// 			}
// 			res.end();
// 		});
// 	} else {
	// res.send('por favor entre com o usuario e a senha');
	// res.end();
// }
// }