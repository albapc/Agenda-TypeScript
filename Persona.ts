import {Direccion} from "./Direccion";
import {Telefono} from "./Telefono";
import {Mail} from "./Mail";

export class Persona {
    nombre: string;
    apellidos: string;
    edad: number;
    dni: string;
    cumpleanhos: string;
    colorFav: string;
    sexo: string;
    direcciones: Direccion;
    mails: Mail;
    telefonos: Telefono;
    notas: string;

    constructor(nombre: string, apellidos: string, edad: number, dni: string, cumpleanhos: string, colorFav: string, sexo: string, direcciones: Direccion, mails: Mail, telefonos: Telefono, notas: string) {
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
}

export function imprimirPersonas(personas: Array<Persona>) {
    for (let i = 0; i < personas.length; i++) {
        console.log(personas[i]);
    }
}



