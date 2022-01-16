function ejercicio1() {
    var cantidad = 0;
    var mensaje_continuar = "";
    var mensaje_billetes = "";
    var isRunning = false;

    do {
        cantidad_retirar = entrada_de_usuario("Introduce la cantidad a retirar:");
        mensaje_billetes = cajero(cantidad);
        consola_salida(mensaje_billetes);
        mensaje_continuar = entrada_de_usuario("Quieres retirar más dinero?\n1- Si\n2- No").toLowerCase();

        if (mensaje_continuar == "si") {
            isRunning = true;
        } else {
            isRunning = false;
        }
    } while (isRunning)
}

function ejercicio2(){

numero_usuario = entrada_de_usuario("Intenta adivinar el numero")

}

function ejercicio3(){

var nombre = ""
var apellidos = ""
var direccion = ""
var telefono = ""
var email = ""
var menu_perfil = ""
var modificar = ""
var titulo_menu=document.getElementById("titulo_menu")
titulo_menu.innerHTML = menu_perfil


nombre = entrada_de_usuario("Introduce un nombre")
apellidos = entrada_de_usuario("Introduce apellidos")
direccion = entrada_de_usuario("Introduce direccion")
telefono = entrada_de_usuario("Introduce telefono")
email = entrada_de_usuario ("Introduce email")

menu_perfil = perfil(valores)
consola_salida(menu_perfil)

do{

    modificar = entrada_de_usuario ("Quieres modificar algun dato?")
    mensaje_dato = entrada_de_usuario("Que dato quieres modificar?")

}while (modificar=="si")

}

function ejercicio4(){









}

ejercicio1()
ejercicio2()
ejercicio3()
ejercicio4()