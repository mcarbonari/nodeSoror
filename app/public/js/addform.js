function addform() {
	var add = document.querySelector('.cad_servicos');
	add.innerHTML += "<form class='servico'><h3>Serviço</h3><div><p><input type='text' id='categoria' placeholder='Categoria'></p><p><input type='text' id='especifico' placeholder='Específico'></p><p><textarea id='descricao' class='desc' placeholder='Descrição'></textarea></p><p><input type='number' id='contato' placeholder='Contato'></p></div><div class='btnservico'><button class='btnadd' onclick='addform()'><img src='img/add.png'></button><button class='btnroxo'>Registrar</button></div></form>"
}