module.exports = function(app){
	app.get('/sobrenos', function(req, res){
		app.app.controllers.admin.sobrenos(app, req, res);
	});

	app.post('/soror/salvar', function(req, res){
		app.app.controllers.admin.soror_salvar(app, req, res);
	});
}