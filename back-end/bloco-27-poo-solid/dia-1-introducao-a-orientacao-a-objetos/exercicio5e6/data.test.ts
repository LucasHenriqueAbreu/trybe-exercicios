import { Data, Mes } from "./data";

describe('Testes para class Data', () => {

    it('Deve retornar o mês da data por extenso', () => {
        const data1 = new Data(1, Mes.JANEIRO, 2022);
        expect(data1.getMonthName()).toEqual('Janeiro');
    });

    it('Deve retornar true pois o ano de 1992 é bissesto', () => {
        const data2 = new Data(14, Mes.SETEMBRO, 1992);
        expect(data2.isLeapYear()).toBeTruthy();
    });

    describe('Testes para o método de comparação de datas', () => {
        const data3 = new Data(22, Mes.AGOSTO, 2022);
        const data4 = new Data(22, Mes.AGOSTO, 2022);
        const data5 = new Data(23, Mes.AGOSTO, 2022);
        const data6 = new Data(21, Mes.AGOSTO, 2022);
        const data7 = new Data(20, Mes.DEZEMBRO, 2022);
        const data8 = new Data(1, Mes.JANEIRO, 2023);
        const data9 = new Data(1, Mes.JANEIRO, 2024);

        it('deve retornar zero pois data3 e data4 são iguais', () => {
            expect(data3.compare(data4)).toEqual(0);
        });

        it('deve retornar -1 pois a data5(parâmetro) é posterior a data3', () => {
            expect(data3.compare(data5)).toEqual(-1);
        });

        it('deve retornar -1 pois a data6(parâmetro) é posterior a data3', () => {
            expect(data3.compare(data6)).toEqual(-1);
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
});