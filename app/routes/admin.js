module.exports = function(app){
	app.get('/sobrenos', function(req, res){
		app.app.controllers.admin.sobrenos(app, req, res);
	});

	app.post('/soror/salvar', function(req, res){
		app.app.controllers.admin.soror_salvar(app, req, res);
	});

	app.get('/logado', function(req, res){
		app.app.controllers.admin.logado(app, req, res);
	});

	app.get('/logado', function(req, res){
		app.app.controllers.admin.usuario(app, req, res);
	});

	app.post('/usuario/sair', function(req,res){
		app.app.controllers.admin.logout_usuario(app, req, res);
	});

	app.post('/soror/salvarservico', function(req, res){
		app.app.controllers.admin.soror_salvarservico(app, req, res);
	});

	app.post('/soror/salvarrelato', function(req, res){
		app.app.controllers.admin.soror_salvarrelato(app, req, res);
	});
}