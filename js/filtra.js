var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
  console.log(this.value)
  var pacientes = document.querySelectorAll(".paciente")
  if(this.value.length > 0){
    pacientes.forEach(paciente => {
      let tdNome = paciente.querySelector(".info-nome")
      let nome = tdNome.textContent
      let expressao = new RegExp(this.value, "i")

      if(!expressao.test(nome)){
        paciente.classList.add("invisivel")
      }else{
        paciente.classList.remove("invisivel")
      }
    });
  }else{
    pacientes.forEach(paciente => {
      paciente.classList.remove("invisivel")
    })
  }
})