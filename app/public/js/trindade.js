var cad = document.querySelector('#cad');
var login = document.querySelector('#login');


function startTrindade(){
	cad.style.display = 'block';
	login.style.display = 'none';
}


function trocaTrindade(){
	if(cad.style.display == 'block'){
		cad.style.display = 'none';
		login.style.display = 'block';
	}
	else{
		startTrindade();
	}
}

document.body.onload = startTrindade();