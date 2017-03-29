function formLoad(e){
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var correo= document.getElementById("correo").value;
  var contrasenia= document.getElementById("contrasenia").value;
  var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var rellenar = document.getElementById("rellenar");
  var rellenarNombre = document.getElementById("rellenar-nombre")
  var rellenarApellido = document.getElementById("rellenar-apellido")
  var rellenarCorreo = document.getElementById("rellenar-correo")

  


if(!expr.test(correo)){
  rellenarCorreo.innerText = "Rellenar correctamente este campo";
}


  document.getElementById("formu").onsubmit = function(e){
    e.preventDefault();
  }
}
