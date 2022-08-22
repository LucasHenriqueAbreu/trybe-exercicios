export enum Mes {
    JANEIRO,
    FEVEREIRO,
    MARCO,
    ABRIL,
    MAIO,
    JUNHO,
    JULHO,
    AGOSTO,
    SETEMBRO,
    OUTUBRO,
    NOVEMBRO,
    DEZEMBRO
}

export class Data {
    private _dia!: number;
    private _mes!: Mes;
    private _ano!: number;

    constructor(dia: number, mes: Mes, ano: number) {
        try {
            this._dia = dia;
            this._mes = mes;
            this._ano = ano;
        } catch (error) {
            this._dia = 1;
            this._mes = Mes.JANEIRO;
            this._ano = 1900;
        }
    }

    get dia() { return this._dia };
    get mes() { return this._mes };
    get ano() { return this._ano };

    set dia(newValue: number) {
        if (newValue > 31) {
            throw new Error('Um mês possui no máximo 31 dias');
        }
        this._dia = newValue;
    }

    set mes(newValue: Mes) {
        if (newValue > 11) {
            throw new Error('Um ano possui no máximo 12 meses');
        }
        this._mes = newValue;
    }

    set ano(newValue: number) {
        this._ano = newValue;
    }

    public getMonthName(): string {
        if (this._mes === Mes.JANEIRO) {
            return 'Janeiro';
        }
        if (this._mes === Mes.FEVEREIRO) {
            return 'Fevereiro';
        }
        if (this._mes === Mes.MARCO) {
            return 'Marco';
        }
        if (this._mes === Mes.ABRIL) {
            return 'Abril';
        }
        if (this._mes === Mes.MAIO) {
            return 'Maio';
        }
        if (this._mes === Mes.JUNHO) {
            return 'Junho';
        }
        if (this._mes === Mes.JULHO) {
            return 'Julho';
        }
        if (this._mes === Mes.AGOSTO) {
            return 'Agosto';
        }
        if (this._mes === Mes.SETEMBRO) {
            return 'Setembro';
        }
        if (this._mes === Mes.OUTUBRO) {
            return 'Outubro';
        }
        if (this._mes === Mes.NOVEMBRO) {
            return 'Novembro';
        }
        return 'Dezembro';
    }

    public isLeapYear(): boolean {
        return this._ano % 4 === 0;
    }

    public compare(data: Data): number {
        if (this._dia === data.dia && this._mes === data.mes && this._ano === data.ano) {
            return 0;
        }

        if ((this._dia > data.dia && this._mes >= data.mes && this._ano >= data.ano) ||
            (this._mes > data.mes && this._ano >= data.ano) ||
            (this._ano > data.ano)) {
            return -1;
        }

        return 1;
    }
}

