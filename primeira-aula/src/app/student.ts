export class Student {

    private _name : string;
    private _email : string;
    private _cpf : string;

    get name() : string {
        return this._name;
    }

    set name(name : string) {
        this._name = name;
    }

    get email() : string {
        return this._email;
    }

    set email(email : string) {
        this._email = email;
    }

    get cpf() : string {
        return this._cpf;
    }

    set cpf(cpf : string) {
        this._cpf = cpf;
    }

}