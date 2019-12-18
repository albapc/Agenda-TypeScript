export class Mail {
    tipo: string;
    direccion: string;

    constructor(tipo: string, direccion: string) {
        this.tipo = tipo;
        this.direccion = direccion;
    }

    setTipo(tipo: string) {
        this.tipo = tipo;
    }

    getTipo(): string {
        return this.tipo;
    }

    setDireccion(direccion: string) {
        this.direccion = direccion;
    }

    getDireccion(): string {
        return this.direccion;
    }
}