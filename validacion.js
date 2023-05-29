let codigos = {
    ROSATELLI: "0xkjdhsfjk",
    MAGALLAN: "",
    SOTO: "0xklsjdfu",
    MARCOLINI: "",
    LANARO: "",
    GAUNA: "",
    CASTILLO: "0xuehrfsdf"
  };

  let nombreMayus = "";

  function enviarForm(event) {
    event.preventDefault();
    let formulario = document.getElementById('formulario');
    let nombre = formulario.elements.nombre.value;
    nombreMayus = nombre.toUpperCase();
    
    let result = document.getElementById('result');

    if (nombreMayus in codigos) {
      result.innerHTML = codigos[nombreMayus];
    } else {
      alert("No existe registro para ese nombre.");
    }
  }
    
  function validarForm(event) {
    event.preventDefault();
    let valid = document.getElementById('validacion');
    let firma = valid.elements.validar.value;
    let validado = document.getElementById('validado');

       
    if (firma === codigos[nombreMayus]) {
        let nombreEncontrado = Object.keys(codigos).find(nombre => codigos[nombre] === firma);
        // let texto = "FIRMA VALIDA.";
        if (nombreEncontrado) {
            let texto = `La firma pertenece a: ${nombreEncontrado}`;
            validado.innerHTML = texto;
                   
        }
        
        // validado.innerHTML = texto;
    } else {
        let texto = `No se encuentra la firma.`;
        validado.innerHTML = texto;
    }
  }
  
  

