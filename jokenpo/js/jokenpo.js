	//As escolhas sempre começam com 0.
	var JEscolha = 0;
	var SEscolha = 0;
	//O ganhador começa com  -1 pq 0 é empate;
	var Ganhador = -1;
	//Pontuação começa com 0
	var Pontos = 0;
	//Variável para a soma da pontuação de cada
	var JPontuaçao = 0;
	var SPontuaçao = 0;

    //PS: sempre fazer testes com o alert.
	function insert(escolha){
		JEscolha = escolha;

		SEscolha = Math.floor((Math.random() *(3 - 1 + 1 ))) + 1;//sorteia as escolhas do sistema. (no caso irá sortear entre 3 e 1) o Math.foor evita que dê numero quebrado.
	
	//Pedra	
	if ((JEscolha == 1) && (SEscolha == 1)) {
		Ganhador = 0;
	}
	 else if ((JEscolha == 1) && (SEscolha == 2)) {
		Ganhador = 2;
	}
	 else if ((JEscolha == 1) && (SEscolha == 3)) {
		Ganhador = 1;
	}

	//Papel
	if ((JEscolha == 2) && (SEscolha == 2)) {
		Ganhador = 0;
	}
	 else if ((JEscolha == 2) && (SEscolha == 1)) {
		Ganhador = 1;
	}
	 else if ((JEscolha == 2) && (SEscolha == 3)) {
		Ganhador = 2;
	}

	//Tesoura
	if ((JEscolha == 3) && (SEscolha == 3)) {
		Ganhador = 0;
	}
	 else if ((JEscolha == 3) && (SEscolha == 2)) {
		Ganhador = 1;
	}
	 else if ((JEscolha == 3) && (SEscolha == 1)) {
		Ganhador = 2;
	}




	//Pontuação/Mensagens

	if (Ganhador == 0) {

	document.getElementById('Resultado').innerHTML = "Empate!";

	}

	else if (Ganhador == 1) {

		document.getElementById('Resultado').innerHTML = "Livia ganhou!";
			JPontuaçao++;
	}

	else if(Ganhador == 2) {

		document.getElementById('Resultado').innerHTML = "Sistema  ganhou!";
		 SPontuaçao++;

	} 

	//Para informar que movimento o Sistema fez

	if (SEscolha == 1) {

		document.getElementById('Sistema-Escolhas').innerHTML = "Sistema escolheu pedra."
	}
	else if (SEscolha == 2) {

		document.getElementById('Sistema-Escolhas').innerHTML = "Sistema escolheu papel."
	}

	 else if (SEscolha == 3) {

		document.getElementById('Sistema-Escolhas').innerHTML = "Sistema escolheu tesoura."
	}

	//Soma dos pontos
	document.getElementById('JPontos').innerHTML = JPontuaçao;

	document.getElementById('SPontos').innerHTML = SPontuaçao;

}
document.get