function crear_perfil (valores){

var auxNombre = nombre
var auxApellidos = apellidos
var auxDireccion = direccion
var auxTelefono = telefono
var auxEmail = email
menu_perfil = ""
var modificar
var mensaje_dato

var Perfil = function(){

this.nombre = auxNombre
this.apellidos = auxApellidos
this.direccion = auxDireccion
this.telefono = auxTelefono
this.email = auxEmail

}

menu_perfil = "-nombre: " + this.nombre +
        "/n-apellidos: " + this.apellidos +
        "/n-direccion: " + this.direccion +
        "/n-telefono: " + this.telefono +
        "/n-email: " + this.email ;


while (modificar == "si") {

if (mensaje_dato = nombre){

this.nombre = prompt("Introduce un nuevo nombre")

}else if (mensaje_dato = apellidos){

this.apellidos = prompt("Introduce nuevos apellidos")

}else if (mensaje_dato = direccion){

this.direccion = prompt("Introduce una nueva direccion")

}else if (mensaje_dato = telefono){

this.telefono = prompt("Introduce un nuevo telefono")

}else if (mensaje_dato = email) {

this.email = prompt("Introduce un nuevo telefono")

}else {
    alert("No existe ese dato")
}

menu_perfil = "-nombre: " + this.nombre +
        "/n-apellidos: " + this.apellidos +
        "/n-direccion: " + this.direccion +
        "/n-telefono: " + this.telefono +
        "/n-email: " + this.email ;

}

return menu_perfil
}
