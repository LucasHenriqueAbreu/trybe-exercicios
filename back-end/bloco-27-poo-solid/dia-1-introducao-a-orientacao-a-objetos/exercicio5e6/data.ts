export enum Month {
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
    private _day!: number;
    private _month!: Month;
    private _year!: number;

    constructor(day: number, month: Month, year: number) {
        try {
            this._day = day;
            this._month = month;
            this._year = year;
        } catch (error) {
            this._day = 1;
            this._month = Month.JANEIRO;
            this._year = 1900;
        }
    }

    get day() { return this._day };
    get month() { return this._month };
    get year() { return this._year };

    // TODO: sets tem a mesma regra, pdem ter o mesmo método.
    set day(newValue: number) {
        if (newValue > 31) {
            throw new Error('Um mês possui no máximo 31 days');
        }
        this._day = newValue;
    }

    set month(newValue: Month) {
        if (newValue > 11) {
            throw new Error('Um year possui no máximo 12 monthes');
        }
        this._month = newValue;
    }

    set year(newValue: number) {
        this._year = newValue;
    }

    public getMonthName(): string {
        if (this._month === Month.JANEIRO) {
            return 'Janeiro';
        }
        if (this._month === Month.FEVEREIRO) {
            return 'Fevereiro';
        }
        if (this._month === Month.MARCO) {
            return 'Marco';
        }
        if (this._month === Month.ABRIL) {
            return 'Abril';
        }
        if (this._month === Month.MAIO) {
            return 'Maio';
        }
        if (this._month === Month.JUNHO) {
            return 'Junho';
        }
        if (this._month === Month.JULHO) {
            return 'Julho';
        }
        if (this._month === Month.AGOSTO) {
            return 'Agosto';
        }
        if (this._month === Month.SETEMBRO) {
            return 'Setembro';
        }
        if (this._month === Month.OUTUBRO) {
            return 'Outubro';
        }
        if (this._month === Month.NOVEMBRO) {
            return 'Novembro';
        }
        return 'Dezembro';
    }

    public isLeapYear(): boolean {
        return this._year % 4 === 0;
    }

    public compare(data: Data): number {
        return this._isEquals(data) ? 0 : (this._isMoreThen(data) ? -1 : 1);
    }

    private _isEquals(data: Data): boolean {
        return this._day === data.day && this._month === data.month && this._year === data.year;
    }

    private _isMoreThen(data: Data): boolean {
        return (this._day < data.day && this._month <= data.month && this._year <= data.year) ||
            (this._month < data.month && this._year <= data.year) ||
            (this._year < data.year);
    }

    public format(format: string): string {
        if (format === 'aa') {
            const year = this._year.toString();
            return year.slice(year.length -2, year.length);
        }
        if (format === 'mm') {
            const realIndexMonth = this._month +1;
            return realIndexMonth < 10 ? `0${realIndexMonth}`: realIndexMonth.toString(); 
        }
        if (format === 'M') {
            return this.getMonthName();
        }
        if (format === 'dd') {
            return this._day < 10 ? `0${this._day}`: this._day.toString(); 
        }
        return this._year.toString();
    }
}

