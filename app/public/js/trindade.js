var cad = document.querySelector('#cad');
var login = document.querySelector('#login');

// function verificar(){
// 	document.getElementById('perfilimg').style.display = "block";
// 	// document.getElementById('teste').style.display = "none";

// 	alert(" ma oeee");
// }

function startTrindade(){
	cad.style.display = 'none';
	login.style.display = 'block';
	// if(req.session.loggedin)
	// {
	// 	verificar();	
	// }
}

function trocaTrindade(){
	if(cad.style.display == 'none'){
		cad.style.display = 'block';
		login.style.display = 'none';
	}
	else{
		startTrindade();
	}
}

document.body.onload = startTrindade();