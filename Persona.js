"use strict";
exports.__esModule = true;
var Persona = /** @class */ (function () {
    function Persona(nombre, apellidos, edad, dni, cumpleanhos, colorFav, sexo, direcciones, mails, telefonos, notas) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.dni = dni;
        this.cumpleanhos = cumpleanhos;
        this.colorFav = colorFav;
        this.sexo = sexo;
        this.direcciones = direcciones;
        this.mails = mails;
        this.telefonos = telefonos;
        this.notas = notas;
    }
    return Persona;
}());
exports.Persona = Persona;
function imprimirPersonas(personas) {
    for (var i = 0; i < personas.length; i++) {
        console.log(personas[i]);
    }
}
exports.imprimirPersonas = imprimirPersonas;
