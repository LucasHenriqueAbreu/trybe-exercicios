import { Person } from './person';

export class Student extends Person {
    private _enrollment!: Date;
    private _examsGrades: number[];
    private _worksGrades: number[];

    constructor(name: string, birthDate: Date) {
        super(name, birthDate);
        this._enrollment = new Date();
        this._examsGrades = [];
        this._worksGrades = [];
    }

    set examsGrades(newValue: number[]) {
        this._examsGrades = newValue;
    }

    set worksGrades(newValue: number[]) {
        this._worksGrades = newValue;
    }

    get examsGrades(): number[] {
        return this._examsGrades;
    }

    get worksGrades(): number[] {
        return this._worksGrades;
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

    public generateEnrollment(): Date {
        return this._enrollment;
    }
}