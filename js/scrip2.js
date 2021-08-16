function validacion(){ // es una estructura que admiten datos de entrada, trabaja con ellas y te devuelve datos de salida
var nombre, apellidos, edad, email, comentario; // nombre, apellidos, correo, usuario, clave, telefono, expresion var inicializa las variables
	nombre = document.getElementById("nombre").value;//dice que busque el elemento que tenga ese Id
	apellidos = document.getElementById("apellidos").value;
	edad = document.getElementById("edad").value;
	email = document.getElementById("email").value;
	comentario = document.getElementById("comentario").value;


//	usuario = document.getElementById("usuario").value;
//	clave = document.getElementById("pass").value;
//	telefono = document.getElementById("telefono").value;

expresion = /\w+@\w+\.+[a-z]/; // declaramos una expresion regular para validar el campo correo electrónico

if (nombre === "" || apellidos === "" || edad === "" || email === "" || comentario ==="" ){
	alert("Todos los campos son obligatorios");
	return false;
}
else if (nombre.length>30){
	alert("El nombre es muy largo");
	return false;
}
else if (apellidos.length>80){
alert("El apellidos son muy largos");
return false;
}
else if (isNaN(edad)){
alert("Ingrese solo numeros");
return false;
}
else if (email.length>100){
alert("El correo es muy largo");
return false;
}
else if (!expresion.test(email)){
alert("El correo no es válido");
return false;
}
//else if (usuario.length>20 || clave.length>20){
//alert("El usuario y la contraseña sólo deben tener 20 caracteres como máximo");
//return false;
//}
else if (comentario.length>150){
alert("Comentario muy largo. Maximo 150 caracteres");
return false;
}
// else if (isNaN(telefono)){ //no a number si no es un numero me da true verdadero y si es un numero me da false
// alert("El teléfono ingresado no es número");
//return false;
//}

var saludo = "Bienvenido " + nombre + " " + apellidos + "!!!. Gracias por registrarte.";
// var variable incializa saludo luego sumo strings palabra + nombre + apellido
alert(saludo);
}