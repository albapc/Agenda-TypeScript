"use strict";
exports.__esModule = true;
//importaciones de las clases que vamos a usar
var Persona_1 = require("./Persona");
var Direccion_1 = require("./Direccion");
var Telefono_1 = require("./Telefono");
var Mail_1 = require("./Mail");
var Persona_2 = require("./Persona");
//objetos de tipo Direccion
var dir1 = new Direccion_1.Direccion("Lepanto", 210, 2, "A", "37482", "Vigo", "Pontevedra");
var dir2 = new Direccion_1.Direccion("Pizarro", 500, 7, "E", "39456", "Vizcaya", "País Vasco");
var dir3 = new Direccion_1.Direccion("Colombia", 608, 5, "C", "38456", "Cádiz", "Andalucía");
//objetos de tipo Telefono
var telf1 = new Telefono_1.Telefono("personal", "629456734");
var telf2 = new Telefono_1.Telefono("trabajo", "984526742");
var telf3 = new Telefono_1.Telefono("trabajo", "6472455356");
//objetos de tipo Mail
var mail1 = new Mail_1.Mail("personal", "pepe@hotmail.com");
var mail2 = new Mail_1.Mail("personal", "mariagp@yahoo.es");
var mail3 = new Mail_1.Mail("trabajo", "alejandroperez@gmail.com");
//objetos de tipo Persona
var p1 = new Persona_1.Persona("Pepe", "Rodríguez García", 45, "39567563P", "30-08-1974", "Azul", "Hombre", dir1, mail1, telf1, "empleado1");
var p2 = new Persona_1.Persona("María", "González Pardo", 26, "38426763M", "15-10-1993", "Rosa", "Mujer", dir2, mail2, telf2, "empleada2");
var p3 = new Persona_1.Persona("Alejandro", "Pérez Estévez", 38, "52567823A", "06-09-1981", "Negro", "Hombre", dir3, mail3, telf3, "empleado3");
//array de tipo Personas que contiene los objs de esa clase
var agenda = [p1, p2, p3];
Persona_2.imprimirPersonas(agenda);
/* funcion para buscar una persona concreta introduciendo su dni, a la vez que modificamos los parametros
 * de tipo Mail, Direccion y Telefono */
function buscarPersonas(dniBusqueda, tipoMFinal, direccionMFinal, calleFinal, numCalleFinal, letraCFinal, codigoPFinal, poblacionFinal, provinciaFinal, tipoTFinal, numeroTFinal) {
    //variable que almacena el indice del array que coincida con el dato que buscamos
    var objIndex = agenda.findIndex(function (obj) { return obj.dni == dniBusqueda; });
    //imprimimos el objeto antes de modificarlo
    console.log(agenda[objIndex]);
    console.log(" ");
    //setters de Mail
    agenda[objIndex].mails.setTipo(tipoMFinal);
    agenda[objIndex].mails.setDireccion(direccionMFinal);
    //setters de Direccion
    agenda[objIndex].direcciones.setCalle(calleFinal);
    agenda[objIndex].direcciones.setNumero(numCalleFinal);
    agenda[objIndex].direcciones.setLetra(letraCFinal);
    agenda[objIndex].direcciones.setCodigoP(codigoPFinal);
    agenda[objIndex].direcciones.setPoblacion(poblacionFinal);
    agenda[objIndex].direcciones.setProvincia(provinciaFinal);
    //setters de Telefono
    agenda[objIndex].telefonos.setTipo(tipoTFinal);
    agenda[objIndex].telefonos.setNumero(numeroTFinal);
    //imprimimos los getters de Direccion
    console.log("Direccion nueva: ", agenda[objIndex].direcciones.getcalle(), ", ", agenda[objIndex].direcciones.getNumero(), agenda[objIndex].direcciones.getLetra(), ", ", agenda[objIndex].direcciones.getCodigoP(), ", ", agenda[objIndex].direcciones.getPoblacion(), agenda[objIndex].direcciones.getProvincia());
    console.log(" ");
    //imprimimos los getters de Telefono
    console.log("Telefono nuevo: ", agenda[objIndex].telefonos.getTipo(), ", ", agenda[objIndex].telefonos.getNumero());
    console.log(" ");
    //imprimimos los getters de Mail
    console.log("Mail nuevo: ", agenda[objIndex].mails.getTipo(), ", ", agenda[objIndex].mails.getDireccion());
    console.log(" ");
}
//llamada a la funcion
buscarPersonas("39567563P", "trabajo", "pepe@outlook.com", "Teis", 10, "E", "36204", "Santiago de Compostela", "A Coruña", "trabajo", "1234567890");
//llamada a la funcion que muestra todos los resultados (y ver si se aplicó la modificación)
Persona_2.imprimirPersonas(agenda);
