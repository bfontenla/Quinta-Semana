function random() {
    var numero = Math.floor(Math.random() * (100 - 0) + 0)
    var numero_usu
    contador=0
    intentos=5
        while (contador != 6) {
    
           
                if (Number(numero_usuario) != numero ) {
                    if (numero < numero_usuario) {
                        alert("El numero es menor te quedan " + intentos + " intentos")

                        
                    }else{
                        alert("El numero es mayor te quedan " + intentos + " intentos")
                    }

                } else if (Number(numero_usuario) == numero) {
                
                    contador++
                    alert("Has acertado el número en el intento " + contador)
                    break;
                    
                }else if (contador == 5) {
                    alert("Te has quedado sin intentos")
                    var opcion = prompt("Quieres volver a jugar? /n-Si /n-No")
                    var opcion = opcion.toLowerCase()
                    if (opcion == "si") {
                        contador=0
                        intentos=5
                        
                    }else{
                        break;
                    }
                }
            }
            contador++ 
            intentos--        
            console.log("El numero es: " + numero)
            console.log("Contador "+contador)
        
}
