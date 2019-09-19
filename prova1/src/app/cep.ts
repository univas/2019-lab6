export class CEP {

    private _id: number;
    private _cep: number;
    private _city: string;
    private _state: string;

    constructor(id?: number, cep?: number, city?: string, state?: string) {
        this._id = id;
        this._cep = cep;
        this._city = city;
        this._state = state;
    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get cep(): number {
        return this._cep;
    }
    public set cep(value: number) {
        this._cep = value;
    }
    public get city(): string {
        return this._city;
    }
    public set city(value: string) {
        this._city = value;
    }
    public get state(): string {
        return this._state;
    }
    public set state(value: string) {
        this._state = value;
    }
}