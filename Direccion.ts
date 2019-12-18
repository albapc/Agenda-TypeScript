export class Direccion {
    calle: string;
    numero: number;
    piso: number;
    letra: string;
    codigoP: string;
    poblacion: string;
    provincia: string;

    constructor(calle: string, numero: number, piso: number, letra: string, codigoP: string, poblacion: string, provincia: string) {
        this.calle = calle;
        this.numero = numero;
        this.piso = piso;
        this.letra = letra;
        this.codigoP = codigoP;
        this.poblacion = poblacion;
        this.provincia = provincia;
    }

    setCalle(calle: string) {
        this.calle = calle;
    }

    getcalle(): string {
        return this.calle;
    }

    setNumero(numero: number) {
        this.numero = numero;
    }

    getNumero(): number {
        return this.numero;
    }

    setPiso(piso: number) {
        this.piso = piso;
    }

    getPiso() {
        return this.piso;
    }

    setLetra(letra: string) {
        this.letra = letra;
    }

    getLetra() {
        return this.letra;
    }

    setCodigoP(codigoP: string) {
        this.codigoP = codigoP;
    }

    getCodigoP() {
        return this.codigoP;
    }

    setPoblacion(poblacion: string) {
        this.poblacion = poblacion;
    }

    getPoblacion() {
        return this.poblacion;
    }

    setProvincia(provincia: string) {
        this.provincia = provincia;
    }

    getProvincia() {
        return this.provincia;
    }
}

