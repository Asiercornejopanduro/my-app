import { Fruta } from './fruta';

export class LineaProducto {
    private _nombre: string;

    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }
    private _precio: number;

    public get precio(): number {
        return this._precio;
    }
    public set precio(value: number) {
        this._precio = value;
    }
    private _cantidad: number;

    public get cantidad(): number {
        return this._cantidad;
    }
    public set cantidad(value: number) {
        this._cantidad = value;
    }
    private _total: number;

    public get total(): number {
        return this._total;
    }
    public set total(value: number) {
        this._total = value;
    }
    private _fruta: Fruta;
    
    public get fruta(): Fruta {
        return this._fruta;
    }
    public set fruta(value: Fruta) {
        this._fruta = value;
    }
    
    constructor() {
        this._nombre = '';
        this._precio = 0;
        this._cantidad = 0;
        this._total = 0;
        this.fruta= new Fruta();
        

    }



}
