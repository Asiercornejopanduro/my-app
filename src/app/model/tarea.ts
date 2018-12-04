export class  Tarea {
    private _id:number;
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    private _titulo: string;
    public get titulo(): string {
        return this._titulo;
    }
    public set titulo(value: string) {
        this._titulo = value;
    }
    private _terminado: boolean;
    public get terminado(): boolean {
        return this._terminado;
    }
    public set terminado(value: boolean) {
        this._terminado = value;
    }

    constructor(){
        this._id=-1;
        this._titulo="No lo se";
        this._terminado=false;
    }

}