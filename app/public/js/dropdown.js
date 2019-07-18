function abrirServico(){
	let listaOculta = document.getElementById('listaOculta');

	if(listaOculta.style.display == 'none'){
		listaOculta.style.display = 'block';
	}
	else{
		listaOculta.style.display = 'none';
	};
};

function btnAbrir() {
	let dropdowninfo = document.getElementById('dropdowninfo');

	if(dropdowninfo.style.display == 'none'){
		dropdowninfo.style.display = 'block';
		geraX();
	}
	else{
		dropdowninfo.style.display = 'none';
		disableX();
	};
};

function dropdown(){
	abrirServico();
	btnAbrir();
}

window.onload = dropdown();
