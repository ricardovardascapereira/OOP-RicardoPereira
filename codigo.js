//Primeira função a ser executada
function Init() { 
	//BluePrint que irá ser usada pelos objectos
    function jogo(nome, consola, datadelancamento, regiao, pokemonlendario, avaliacaopessoal){
		this.nome = nome;
		this.consola  = consola;
		this.datadelancamento = datadelancamento;
		this.regiao = regiao;
		this.pokemonlendario = pokemonlendario;
		this.avaliacaopessoal= avaliacaopessoal;
		
		this.dados = function() {
			document.body.innerHTML += "Nome: " + this.nome + "<br>";
			document.body.innerHTML += "consola: " + this.consola + "<br>";
			document.body.innerHTML += "data de lançamento: " + this.datadelancamento + "<br>";
			document.body.innerHTML += "região:" + this.regiao + "<br>";
			document.body.innerHTML += "pokemon lendário:" + this.pokemonlendario + "<br>";
			document.body.innerHTML += "avaliação pessoal:" + this.avaliacaopessoal + "<br>";
			document.body.innerHTML += this.comentario ? "Comentário: Jogo inesquecivel, o melhor jogo de pokemon!<br><br>" : "Comentário: Jogo muito bom, mas podia ser melhor.<br><br>";
		}
	}
      
    //Objecto Pokemon crystal
    var pokemoncrystal = new jogo("Pokemon crystal","game boy", "30 de julho de 2001", " Johto", "suicubne", "9/10", false);
	pokemoncrystal.dados();
	
	//Objecto Pokemon Platinum
	var pokemonplatinum = new jogo("Pokemon Platinum", "nintendo ds", "13 de setembro de 2008", "sinoh", "giratina", "10/10", true);
	pokemonplatinum.dados();
	
	//Objecto Pokemon moon
	var pokemonmoon = new jogo("Pokemon moon", "nintendo 3ds", "18 de novembro de 2016", "Alola", "lunala", "8/10", false);
	pokemonmoon.dados();
}