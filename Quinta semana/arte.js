var Arte = function() {}
Arte.prototype.nombre = ""
Arte.prototype.alabarObra = function() {
console.log(this.nombre + " es impresionante")
}
var Cine = function(duracion, genero) {
this.duracion = duracion
this.genero = genero
}
Cine.prototype.mostrarCine = function() {
console.log("Dura " + this.duracion + " y pertenece al género " +this.genero)
}
for (id in Arte.prototype) { 
Cine.prototype[id] = Arte.prototype[id]
}
var Escultura = function(material, epoca) {
this.material = material
this.epoca = epoca
}
Escultura.prototype.mostrarEscultura = function() {
console.log("Está hecha de " + this.material + " y pertenece a la época" +this.epoca)
}
for (id in Arte.prototype) {
Escultura.prototype[id] = Arte.prototype[id]
}
var Pintura = function(autor, estilo) {
this.autor = autor
this.estilo = estilo
}
Pintura.prototype.mostrarPintura = function() {
console.log("El autor es " + this.autor + " y pertenece al estilo " +this.estilo)
}
for (id in Arte.prototype) { 
Pintura.prototype[id] = Arte.prototype[id]
}
var Teatro = function(t_duracion, t_epoca) {
this.t_duracion = t_duracion
this.t_epoca = t_epoca
}
Teatro.prototype.mostrarTeatro = function() {
console.log("Dura " + this.t_duracion + " y pertenece a la época " +this.t_epoca)
}
for (id in Arte.prototype) { 
Teatro.prototype[id] = Arte.prototype[id]
}
var peli = new Cine(156, "drama")
var escul = new Escultura("marmol", "renacimiento")
var pint = new Pintura("Sandro Botticelli" , "renacentista")
var teat = new Teatro("135" , "1593")
peli.nombre = "The Revenant"
escul.nombre = "David"
pint.nombre = "El nacimiento de Venus"
teat.nombre = "Romeo y julieta"
peli.mostrarCine()
escul.mostrarEscultura()
pint.mostrarPintura()
teat.mostrarTeatro()