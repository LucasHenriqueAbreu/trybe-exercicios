import { Data, Month } from './data';

describe('Testes para class Data', () => {

    it('Deve retornar o mês da data por extenso', () => {
        const data1 = new Data(1, Month.JANEIRO, 2022);
        expect(data1.getMonthName()).toEqual('Janeiro');
    });

    it('Deve retornar true pois o ano de 1992 é bissesto', () => {
        const data2 = new Data(14, Month.SETEMBRO, 1992);
        expect(data2.isLeapYear()).toBeTruthy();
    });

    describe('Testes para o método de comparação de datas', () => {
        const data3 = new Data(22, Month.AGOSTO, 2022);
        const data4 = new Data(22, Month.AGOSTO, 2022);
        const data5 = new Data(23, Month.AGOSTO, 2022);
        const data6 = new Data(21, Month.AGOSTO, 2022);
        const data7 = new Data(20, Month.DEZEMBRO, 2022);
        const data8 = new Data(1, Month.JANEIRO, 2023);
        const data9 = new Data(1, Month.JANEIRO, 2024);

        it('deve retornar zero pois data3 e data4 são iguais', () => {
            expect(data3.compare(data4)).toEqual(0);
        });

        it('deve retornar -1 pois a data5(parâmetro) é posterior a data3', () => {
            expect(data3.compare(data5)).toEqual(-1);
        });

        it('deve retornar 1 pois a data3 é posterior a data6(parâmemtro)', () => {
            expect(data3.compare(data6)).toEqual(1);
        });

        it('deve retornar -1 pois a data7(parâmetro) é posterior a data3', () => {
            expect(data3.compare(data7)).toEqual(-1);
        });

        it('deve retornar 1 pois a data7 é posterior a data3(parâmetro)', () => {
            expect(data7.compare(data3)).toEqual(1);
        });

        it('deve retornar -1 pois a data8(parâmetro) é posterior a data3', () => {
            expect(data3.compare(data8)).toEqual(-1);
        });

        it('deve retornar -1 pois a data9(parâmetro) é posterior a data8', () => {
            expect(data8.compare(data9)).toEqual(-1);
        });
    });

    describe('Teste para método format: recebe como parâmetro um formato de dia mês e ano e retorna a data formatada.', () => {
        const data1 = new Data(14, Month.SETEMBRO, 1992);
        const data2 = new Data(1, Month.DEZEMBRO, 1992);

        it('"dd/mm/aaaa" deve retornar "01/01/1900"', () => {
            expect(data1.format('dd/mm/aaaa')).toEqual('14/09/1992');
            expect(data2.format('dd/mm/aaaa')).toEqual('01/12/1992');
        });

        it('"aaaa-mm-dd" deve retornar "1900-01-01"', () => {
            expect(data1.format('aaaa-mm-dd')).toEqual('1992-09-14');
            expect(data2.format('aaaa-mm-dd')).toEqual('1992-12-01');
        });

        it('"dd de M de aa" deve retornar "01 de janeiro de 90"', () => {
            expect(data1.format('dd de M de aa')).toEqual('14 de Setembro de 92');
            expect(data2.format('dd de M de aa')).toEqual('01 de Dezembro de 92');
        });

        it('"dd, M de aaaa" deve retornar "01, janeiro de 1990"', () => {
            expect(data1.format('dd, M de aaaa')).toEqual('14, Setembro de 1992');
            expect(data2.format('dd, M de aaaa')).toEqual('01, Dezembro de 1992');
        });
    });
});