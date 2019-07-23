var cad = document.querySelector('#cad');
var login = document.querySelector('#login');


function startTrindade(){
	cad.style.display = 'none';
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

document.body.onload = startTrindade();