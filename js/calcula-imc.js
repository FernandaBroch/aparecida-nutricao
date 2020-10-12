let titulo = document.querySelector('.titulo')

titulo.textContent = 'Aparecida Nutrição'

let pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {

    let paciente = pacientes[i];

    let tdPeso = paciente.querySelector(".info-peso");
    let peso = tdPeso.textContent;

    let tdAltura = paciente.querySelector(".info-altura");
    let altura = tdAltura.textContent;

    let tdImc = paciente.querySelector(".info-imc");

    let alturaEhValida = validaAltura(altura);
    let pesoEhValido = validaPeso(peso);

    if (!pesoEhValido) {
        //console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValida) {
        //console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoEhValido && alturaEhValida) {
        let imc = calculaIMC(peso , altura);
        tdImc.textContent = imc
    }
}

function calculaIMC(peso, altura){
  let imc = 0;

  imc = peso / (altura * altura)

  return imc.toFixed(2)
}

function validaPeso(peso) {
  if (peso > 0 && peso < 1000) {
      return true;
  } else {
      return false;
  }
}
function validaAltura(altura) {
  if (altura > 0 && altura <= 3.00) {
      return true;
  } else {
      return false;
  }
}