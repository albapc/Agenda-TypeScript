"use strict";
exports.__esModule = true;
var Direccion = /** @class */ (function () {
    function Direccion(calle, numero, piso, letra, codigoP, poblacion, provincia) {
        this.calle = calle;
        this.numero = numero;
        this.piso = piso;
        this.letra = letra;
        this.codigoP = codigoP;
        this.poblacion = poblacion;
        this.provincia = provincia;
    }
    Direccion.prototype.setCalle = function (calle) {
        this.calle = calle;
    };
    Direccion.prototype.getcalle = function () {
        return this.calle;
    };
    Direccion.prototype.setNumero = function (numero) {
        this.numero = numero;
    };
    Direccion.prototype.getNumero = function () {
        return this.numero;
    };
    Direccion.prototype.setPiso = function (piso) {
        this.piso = piso;
    };
    Direccion.prototype.getPiso = function () {
        return this.piso;
    };
    Direccion.prototype.setLetra = function (letra) {
        this.letra = letra;
    };
    Direccion.prototype.getLetra = function () {
        return this.letra;
    };
    Direccion.prototype.setCodigoP = function (codigoP) {
        this.codigoP = codigoP;
    };
    Direccion.prototype.getCodigoP = function () {
        return this.codigoP;
    };
    Direccion.prototype.setPoblacion = function (poblacion) {
        this.poblacion = poblacion;
    };
    Direccion.prototype.getPoblacion = function () {
        return this.poblacion;
    };
    Direccion.prototype.setProvincia = function (provincia) {
        this.provincia = provincia;
    };
    Direccion.prototype.getProvincia = function () {
        return this.provincia;
    };
    return Direccion;
}());
exports.Direccion = Direccion;
