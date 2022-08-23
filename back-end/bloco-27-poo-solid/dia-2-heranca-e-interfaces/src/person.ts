// `Class`: Person
// `Attributes`:
//     - name: nome da pessoa
//     - birthDate: data de nascimento da pessoa
// `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro nome e data de nascimento
// `Validations`:
//     - O nome deve ter no mínimo três caracteres
//     - A data de nascimento não pode ser uma data no futuro
//     - A pessoa não pode possuir mais de 120 anos

export class Person {
    constructor(private _name: string, private _birthDate: Date) {
        this.name = _name;
        this.birthDate = _birthDate;
    }

    get name(): string {
        return this._name;
    }

    get birthDate(): Date {
        return this._birthDate;
    }

    set name(newValue: string) {
        if (newValue.length < 3) {
            throw new Error('O nome deve ter no mínimo três caracteres');

        }
        this._name = newValue;
    }

    set birthDate(newValue: Date) {
        if (newValue.getTime() > new Date().getTime()) {
            throw new Error('A data de nascimento não pode ser uma data no futuro');
        }
        if (this._differenceInYears(newValue, new Date()) > 120) {
            throw new Error('A pessoa não pode possuir mais de 120 anos');
        }
        this._birthDate = newValue;
    }

    private _differenceInYears(dateOne: Date, dateTwo: Date): number {
        const timeDiff = Math.abs(dateTwo.getTime() - dateOne.getTime());
        return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
    }

}