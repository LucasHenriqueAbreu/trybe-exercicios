import { Person } from './person';

export class Student extends Person {
    private _enrollment!: string;
    private _examsGrades!: number[];
    private _worksGrades!: number[];

    constructor(name: string, birthDate: Date) {
        super(name, birthDate);
        this._enrollment = this._generateEnrollment();
        this._examsGrades = [];
        this._worksGrades = [];
    }

    set examsGrades(newValue: number[]) {
        if (newValue.length > 4) {
            throw new Error('A pessoa estudante deve possuir no máximo 4 notas de provas');
        }
        this._examsGrades = newValue;
    }

    set worksGrades(newValue: number[]) {
        if (newValue.length > 2) {
            throw new Error('A pessoa estudante deve possuir no máximo 2 notas de trabalhos');
        }
        this._worksGrades = newValue;
    }

    get examsGrades(): number[] {
        return this._examsGrades;
    }

    get worksGrades(): number[] {
        return this._worksGrades;
    }
    get enrollment(): string {
        return this._enrollment;
    }

    private get _allGrade(): number[] {
        return [...this.examsGrades, ...this.worksGrades]
    }

    public sumGrades(): number {
        return this._allGrade.reduce((previousValue: number, currentValue: number) => previousValue + currentValue, 0);
    }

    public sumAverageGrade(): number {
        return this.sumGrades() / this._allGrade.length;
    }

    private _generateEnrollment(): string {
        const chars = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890';
        const randomArray = Array.from(
            { length: 16 },
            () => chars[Math.floor(Math.random() * chars.length)]
        );

        return randomArray.join('');
    }
}