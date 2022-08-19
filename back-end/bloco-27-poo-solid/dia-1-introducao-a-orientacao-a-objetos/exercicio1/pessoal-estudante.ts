class PessoaEstudante {
    public matricula: string;
    public nome: string;
    private _notasProva!: number[];
    private _notasTrabaho!: number[];

    constructor(
        matricula: string,
        nome: string,
        notasProva: number[],
        notasTrablho: number[],
    ) {
        this.matricula = matricula;
        this.nome = nome;
        this.notasProva = notasProva;
        this.notasTrablho = notasTrablho;
    }

    set notasProva(newValue: number[]) {
        if (newValue.length > 4) {
            throw new Error('Não é possível adicionar mais de 4 notas para provas');
        }
        this._notasProva = newValue;
    }

    set notasTrablho(newValue: number[]) {
        if (newValue.length > 2) {
            throw new Error('Não é possível adicionar mais de 2 notas para trabalhos');
        }
        this._notasTrabaho = newValue;
    }

    get notasProva(): number[] { return this._notasProva; }
    get notasTrabalho(): number[] { return this._notasTrabaho; }

    private get _todasNotas(): number[] {
        return [...this.notasProva, ...this.notasTrabalho]
    }

    public notaTotal(): number {
        return this._todasNotas.reduce((previousValue: number, currentValue: number) => previousValue + currentValue, 0);
    }

    public media(): number {
        return this.notaTotal() / this._todasNotas.length;
    }

    get descricao(): string {
        return `O Aluno ${this.matricula} - ${this.nome} tem um total de ${this.notaTotal()} em notas e média ${this.media()}`
    }
}

const pessoaEstudante = new PessoaEstudante('123', 'Lucas Teste', [10, 10, 10, 10], [10, 10]);
console.log(pessoaEstudante.descricao);

try {
    const pessoaEstudante2 = new PessoaEstudante('123', 'Lucas Teste', [10, 10, 10, 10, 10], [10, 10]);
    console.log(pessoaEstudante2.descricao);
} catch (error) {
    console.log(error);
}

try {
    const pessoaEstudante2 = new PessoaEstudante('123', 'Lucas Teste', [10, 10, 10, 10], [10, 10, 10]);
    console.log(pessoaEstudante2.descricao);
} catch (error) {
    console.log(error);
}