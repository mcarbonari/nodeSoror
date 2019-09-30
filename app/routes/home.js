module.exports = function(app){
  app.get('/', function(req, res){
    app.app.controllers.home.index(app, req, res);
  });

  app.post('usuario/login', function(req, res){
  	app.app.controllers.index.login_usuario(app, req, res);
  });
}