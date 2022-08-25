import { Student } from './student';

// `Class`: Student
// `Extends`: Person
// `Attributes`:
//     - enrollment: matrícula da pessoa estudante
//     - examsGrades: notas de provas
//     - worksGrades: notas de trabalhos
// `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro nome e data de nascimento e
//       preencher a matrícula automaticamente
//     - sumGrades: retorna a soma das notas da pessoa estudante
//     - sumAverageGrade: retorna a média das notas da pessoa estudante
//     - generateEnrollment: retorna uma string única gerada
//       como matrícula para a pessoa estudante
// `Validations`:
//     - A matrícula deve possuir no mínimo 16 caracteres
//     - A pessoa estudante deve possuir no máximo 4 notas de provas
//     - A pessoa estudante deve possuir no máximo 2 notas de trabalhos

describe('Testes para classe Student', () => {
    it('Deve criar uma instância de Student', () => {
        const student = new Student('Lucas H. de Abreu', new Date(1992, 9, 14));
        expect(student).toBeInstanceOf(Student);
    });

    it('Deve criar uma data de matrícula automáticamente', () => {
        const student = new Student('Lucas H. de Abreu', new Date(1992, 9, 14));
        expect(student.enrollment).toBeTruthy();
        expect(student.enrollment.length).toEqual(16);
    });

    it('Deve somar as notas de um estudante', () => {
        const student = new Student('Lucas H. de Abreu', new Date(1992, 9, 14));
        student.examsGrades = [10, 10, 10];
        student.worksGrades = [10, 10];
        expect(student.sumGrades()).toEqual(50);
    });

    it('Deve retornar a média das notas de um estudante', () => {
        const student = new Student('Lucas H. de Abreu', new Date(1992, 9, 14));
        student.examsGrades = [10, 10, 10];
        student.worksGrades = [10, 10];
        expect(student.sumAverageGrade()).toEqual(10);
    });

    it('Não deve ser possível cadastrar mais de 4 notas para provas', () => {
        const student = new Student('Lucas H. de Abreu', new Date(1992, 9, 14));
        expect(() => student.examsGrades = [10, 10, 10, 10, 10]).toThrow('A pessoa estudante deve possuir no máximo 4 notas de provas');
    });

    it('Não deve ser possível cadastrar mais de 2 notas para trabalhos', () => {
        const student = new Student('Lucas H. de Abreu', new Date(1992, 9, 14));
        expect(() => student.worksGrades = [10, 10, 10]).toThrow('A pessoa estudante deve possuir no máximo 2 notas de trabalhos');
    });
})