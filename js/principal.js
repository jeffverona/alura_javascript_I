
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
var imc = tdImc.textContent;

//Exibindo Resultado
console.log(nome);
console.log(peso);
console.log(altura);
console.log(gordura);
console.log(imc);