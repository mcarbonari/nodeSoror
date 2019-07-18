var btn = document.querySelector('#btnabrir');

 function geraX(){
	btn.style.animationName = 'rotationButton';
	btn.style.animationDuration = '0.5s';
	btn.style.animationFillMode = 'forwards';
}

function disableX(){
	btn.style.animationName = 'rotationButtonDisable';

}