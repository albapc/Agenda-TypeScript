"use strict";
exports.__esModule = true;
var Telefono = /** @class */ (function () {
    function Telefono(tipo, numero) {
        this.tipo = tipo;
        this.numero = numero;
    }
    Telefono.prototype.setTipo = function (tipo) {
        this.tipo = tipo;
    };
    Telefono.prototype.getTipo = function () {
        return this.tipo;
    };
    Telefono.prototype.setNumero = function (numero) {
        this.numero = numero;
    };
    Telefono.prototype.getNumero = function () {
        return this.numero;
    };
    return Telefono;
}());
exports.Telefono = Telefono;
