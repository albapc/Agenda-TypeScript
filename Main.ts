//importaciones de las clases que vamos a usar
import {Persona} from "./Persona";
import {Direccion} from "./Direccion";
import {Telefono} from "./Telefono";
import {Mail} from "./Mail";
import {imprimirPersonas} from "./Persona";

//objetos de tipo Direccion
let dir1 = new Direccion("Lepanto", 210, 2, "A", "37482", "Vigo", "Pontevedra");
let dir2 = new Direccion("Pizarro", 500, 7, "E", "39456", "Vizcaya", "País Vasco");
let dir3 = new Direccion("Colombia", 608, 5, "C", "38456", "Cádiz", "Andalucía");

//objetos de tipo Telefono
let telf1 = new Telefono("personal", "629456734");
let telf2 = new Telefono("trabajo", "984526742");
let telf3 = new Telefono("trabajo", "6472455356");

//objetos de tipo Mail
let mail1 = new Mail("personal", "pepe@hotmail.com");
let mail2 = new Mail("personal", "mariagp@yahoo.es");
let mail3 = new Mail("trabajo", "alejandroperez@gmail.com");

//objetos de tipo Persona
let p1 = new Persona("Pepe", "Rodríguez García", 45, "39567563P", "30-08-1974", "Azul", "Hombre", dir1, mail1, telf1, "empleado1");
let p2 = new Persona("María", "González Pardo", 26, "38426763M", "15-10-1993", "Rosa", "Mujer", dir2, mail2, telf2, "empleada2");
let p3 = new Persona("Alejandro", "Pérez Estévez", 38, "52567823A", "06-09-1981", "Negro", "Hombre", dir3, mail3, telf3, "empleado3");


//array de tipo Personas que contiene los objs de esa clase
let agenda: Array<Persona> = [p1, p2, p3];

imprimirPersonas(agenda);

/* funcion para buscar una persona concreta introduciendo su dni, a la vez que modificamos los parametros
 * de tipo Mail, Direccion y Telefono */
function buscarPersonas(dniBusqueda: string, tipoMFinal: string, direccionMFinal: string,
    calleFinal: string, numCalleFinal: number, letraCFinal: string, codigoPFinal: string,
    poblacionFinal: string, provinciaFinal: string, tipoTFinal: string, numeroTFinal: string) {

    //variable que almacena el indice del array que coincida con el dato que buscamos
    let objIndex = agenda.findIndex(obj => obj.dni == dniBusqueda);

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
    console.log("Direccion nueva: ", agenda[objIndex].direcciones.getcalle(), ", ", agenda[objIndex].direcciones.getNumero(),
        agenda[objIndex].direcciones.getLetra(), ", ", agenda[objIndex].direcciones.getCodigoP(), ", ",
        agenda[objIndex].direcciones.getPoblacion(), agenda[objIndex].direcciones.getProvincia());

    console.log(" ");
    //imprimimos los getters de Telefono
    console.log("Telefono nuevo: ", agenda[objIndex].telefonos.getTipo(), ", ", agenda[objIndex].telefonos.getNumero());

    console.log(" ");
    //imprimimos los getters de Mail
    console.log("Mail nuevo: ", agenda[objIndex].mails.getTipo(), ", ", agenda[objIndex].mails.getDireccion());
    console.log(" ");
}

//llamada a la funcion
buscarPersonas("39567563P", "trabajo", "pepe@outlook.com", "Teis", 10, "E", "36204",
    "Santiago de Compostela", "A Coruña", "trabajo", "1234567890");

//llamada a la funcion que muestra todos los resultados (y ver si se aplicó la modificación)
imprimirPersonas(agenda);

