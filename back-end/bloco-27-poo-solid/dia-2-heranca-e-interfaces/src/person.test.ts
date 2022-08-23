import { Person } from "./person";

describe('Testes para classe Person', () => {
    it('Deve retornar um erro ao tentar criar uma instância de pessoa com o nome menor que 3 caracteres', () => {
        expect(() => new Person('Ab', new Date())).toThrow('O nome deve ter no mínimo três caracteres');
    });

    it('Deve retornar uma instância de pessoa ao passar um nome válido', () => {
        const newPerson = new Person('Lucas Henrique de Abreu', new Date(1992, 8, 14));
        expect(newPerson).toBeInstanceOf(Person);
    });

    it('Deve retornar um erro ao tentar uma instância de pessoa com a data de nascimento futura', () => {
        const date = new Date();
        date.setFullYear(date.getFullYear() + 1);
        expect(() => new Person('Lucas Henrique de Abreu', date)).toThrow('A data de nascimento não pode ser uma data no futuro');
    });

    it('Deve retornar um erro ao tentar uma instância de pessoa que a idade seja maior que 120 anos.', () => {
        const birthDate = new Date();
        birthDate.setFullYear(birthDate.getFullYear() - 122);
        expect(() => new Person('Lucas Henrique de Abreu', birthDate)).toThrow('A pessoa não pode possuir mais de 120 anos');
    });

    it('Deve retornar uma instância de pessoa ao passar uma data de nacimento válida', () => {
        const newPerson = new Person('Lucas Henrique de Abreu', new Date(1992, 8, 14));
        expect(newPerson).toBeInstanceOf(Person);
    });
});