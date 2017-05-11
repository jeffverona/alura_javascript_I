
var trPaciente = document.querySelector("#primeiro-paciente");

//Capturando Componente
var tdNome = trPaciente.querySelector(".info-nome");
var tdPeso = trPaciente.querySelector(".info-peso");
var tdAltura = trPaciente.querySelector(".info-altura");
var tdGordura = trPaciente.querySelector(".info-gordura");
var tdImc = trPaciente.querySelector(".info-imc");

//Capturando Texto
var nome = tdNome.textContent;
var altura = tdAltura.textContent;
var peso = tdPeso.textContent;
var gordura = tdGordura.textContent;
var imc = peso / (altura * altura);

//Tratando imc

var alturaValida = true;
var pesoValido = true;

if (altura <= 0 || altura >= 3.0) {
	tdImc.textContent = "Altura Inválida";
	alturaValida = false;
}

if(peso <= 0 || peso >= 1000){
	tdImc.textContent = "Peso Inválido";
	pesoValido = false;
}

if(alturaValida == false && pesoValido == false){
	tdImc.textContent = "Altura e peso são inválidos!"
}

if(alturaValida && pesoValido){
	tdImc.textContent = imc;
}

//Exibindo Resultado
console.log(nome);
console.log(peso);
console.log(altura);
console.log(gordura);
console.log(imc);