"use strict";
exports.__esModule = true;
var Mail = /** @class */ (function () {
    function Mail(tipo, direccion) {
        this.tipo = tipo;
        this.direccion = direccion;
    }
    Mail.prototype.setTipo = function (tipo) {
        this.tipo = tipo;
    };
    Mail.prototype.getTipo = function () {
        return this.tipo;
    };
    Mail.prototype.setDireccion = function (direccion) {
        this.direccion = direccion;
    };
    Mail.prototype.getDireccion = function () {
        return this.direccion;
    };
    return Mail;
}());
exports.Mail = Mail;
