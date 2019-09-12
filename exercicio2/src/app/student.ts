export class Student {

    private _id: number;
    private _name: string;
    private _email: string;
    private _cellPhone: number;
    
    constructor(id?: number, name?: string, email?: string, cellPhone?: number) {
        this._id = id;
        this._name = name;
        this._email = email;
        this._cellPhone = cellPhone;
    }

    public get id(): number {
        return this._id;
    }
    public set id(id: number) {
        this._id = id;
    }    
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }    
    public get cellPhone(): number {
        return this._cellPhone;
    }
    public set cellPhone(value: number) {
        this._cellPhone = value;
    }
}