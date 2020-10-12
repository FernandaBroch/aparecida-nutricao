var botaoBuscarPacientes = document.querySelector("#buscar-pacientes")

botaoBuscarPacientes.addEventListener("click", function(){
    
  var xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
  
  xhr.addEventListener("load", function(){
    let erroAjax = document.querySelector("#erro-ajax")
    if (xhr.status == 200) {
      let getPacientes = xhr.responseText
      let pacientes = JSON.parse(getPacientes)
      pacientes.forEach(paciente => {
        adicionarPaciente(paciente)
      })
      erroAjax.classList.add("invisivel")
    }else{
      console.log(xhr.status);
      console.log(xhr.responseText);
      erroAjax.classList.remove("invisivel")
    }
  })
  xhr.send();
})