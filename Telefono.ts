export class Telefono {
    tipo: string;
    numero: string;

    constructor(tipo: string, numero: string) {
        this.tipo = tipo;
        this.numero = numero;
    }

    setTipo(tipo: string) {
        this.tipo = tipo;
    }

    getTipo(): string {
        return this.tipo;
    }

    setNumero(numero: string) {
        this.numero = numero;
    }

    getNumero(): string {
        return this.numero;
    }
}