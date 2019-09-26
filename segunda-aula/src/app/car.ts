export class Car {

    private _id: number;
    private _brand: string;    
    private _model: string;
    private _year: number;

    constructor(id?: number, brand?: string, model?: string, year?: number) {
        this._id = id;
        this._brand = brand;
        this._model = model;
        this._year = year;
    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get brand(): string {
        return this._brand;
    }
    public set brand(value: string) {
        this._brand = value;
    }
    public get model(): string {
        return this._model;
    }
    public set model(value: string) {
        this._model = value;
    }
    public get year(): number {
        return this._year;
    }
    public set year(value: number) {
        this._year = value;
    }

}