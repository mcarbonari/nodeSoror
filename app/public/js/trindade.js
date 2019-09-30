var cad = document.querySelector('#cad');
var login = document.querySelector('#login');
// var perfil = document.querySelector('#perfil');


function startTrindade(){
	cad.style.display = 'none';
	// perfil.style.display = 'none';
	login.style.display = 'block';
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

// function abreperfil() {
// 	if (login.style.display == 'none'){
// 		perfil.style.display == 'block';
// 	}
// }

document.body.onload = startTrindade();