let botaoAdicionar = document.querySelector("#adicionar-paciente")

botaoAdicionar.addEventListener("click", function(event){
  event.preventDefault()
  let form = document.querySelector("#form-adiciona")
  let resultado = adicionarPaciente(obtemPacienteFormulario(form))
  if(!resultado) form.reset() 
})

function adicionarPaciente(obj){
  let paciente = obj
  let erros = validaPaciente(paciente);
  let resultado = true
  if (erros.length > 0) {
    exibeMensagensDeErro(erros)
    resultado = false
  }else{
    adicionaTrTabela(paciente)
    let mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
  }
}
function adicionaTrTabela(paciente){
  let pacienteTr = montaTR(paciente)
  let tabela = document.querySelector("#tabela-pacientes")
  tabela.appendChild(pacienteTr)
}

function obtemPacienteFormulario(obj){
  let paciente = {
    nome: obj.nome.value,
    peso: obj.peso.value,
    altura: obj.altura.value,
    gordura: obj.gordura.value,
    imc: calculaIMC(obj.peso.value, obj.altura.value)
  }
  return paciente
}

function montaTR(paciente){
  let pacienteTr = document.createElement("tr")
  pacienteTr.classList.add("paciente")

  // pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"))
  // pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"))
  // pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"))
  // pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"))
  // pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"))

  for(const [key, value] of Object.entries(paciente)){
    pacienteTr.appendChild(montaTd(value, "info-"+key))
  }

  return pacienteTr
}

function montaTd(textContent, className ){
  let td = document.createElement("td")
  td.textContent = textContent
  td.classList.add(className)
  return td
}

function validaPaciente(paciente) {

  let erros = [];

  // if (paciente.nome.length == 0) {
  //     erros.push("O nome não pode ser em branco");
  // }

  // if (paciente.gordura.length == 0) {
  //     erros.push("A gordura não pode ser em branco");
  // }

  // if (paciente.peso.length == 0) {
  //     erros.push("O peso não pode ser em branco");
  // }

  // if (paciente.altura.length == 0) {
  //     erros.push("A altura não pode ser em branco");
  // }

  // if (!validaPeso(paciente.peso)) {
  //     erros.push("Peso é inválido");
  // }

  // if (!validaAltura(paciente.altura)) {
  //     erros.push("Altura é inválida");
  // }


  // for (let key in paciente){
  //   console.log(key, paciente[key])
  //   if(paciente[key] == 0){
  //     erros.push(key+" não pode ser em branco")
  //   }
  // }


  for(const [key, value] of Object.entries(paciente)){
    if (value == 0) erros.push([key]+" não pode ser em branco")
  }
  return erros;
}

function exibeMensagensDeErro(erros) {
  let ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "";

  erros.forEach(function(erro) {
      let li = document.createElement("li");
      li.textContent = erro;
      ul.appendChild(li);
  });
}