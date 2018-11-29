export class Videojuego {

    private _titulo: string;
    private _imagen: string;
    private _descripcion: string;
    private _anyo: number;           // Año publicación
    private _precio: number;
    private _alquilado: boolean;

    constructor(){
        this.titulo = 'Sin título';
        this.imagen = 'assets/img/videogame_cover.png';
        this.descripcion = 'Lorem ipsum...';
        this.anyo = 0;
        this.precio = 0;
        this.alquilado = true;
    }

    public get titulo(): string {
        return this._titulo;
    }
    public set titulo(titulo: string) {
        console.debug('*** set titulo(titulo: string)');
        this._titulo = titulo;
    }

    public get imagen(): string {
        return this._imagen;
    }
    public set imagen(value: string) {
        this._imagen = value;
    }

    public get descripcion(): string {
        return this._descripcion;
    }
    public set descripcion(value: string) {
        this._descripcion = value;
    }

    public get anyo(): number {
        return this._anyo;
    }
    public set anyo(value: number) {
        this._anyo = value;
    }

    public get precio(): number {
        return this._precio;
    }
    public set precio(value: number) {
        this._precio = value;
    }

    public get alquilado(): boolean {
        return this._alquilado;
    }
    public set alquilado(value: boolean) {
        this._alquilado = value;
    }

}
