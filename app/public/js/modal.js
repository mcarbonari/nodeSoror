// Get the modal
var modal = document.getElementById("myModal");
 
// Get the image and insert it inside the modal - use its "alt" text as a caption
var aparecer = document.getElementById("myButton");
var modalTexto = document.getElementById("texto");
 aparecer.onclick = function(){
 	alert(" sahsuahsua")
  modal.style.display = "block";
  modalTexto.innerHTML = " aqui fica o texto completo sobre o assunto resumido da caixinha do carrossel; tem que falar bonito simples claro etc; tem que ver como vai ser pra abrir um texto em cada modal pq com esse código só funciona em um; sera que da pra colocar imagens? hmmm Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "; 
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}