// TODO: resolver lint.
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import DatasourceInterface from '../../../src/data/datasource.interface';
import FilePlantsDatasource from '../../../src/data/plants/file-plants.datasource';
import Plant from '../../../src/models/Plants';

/* eslint-disable mocha/no-mocha-arrows */
describe('Teste para PlantsDatasource', () => {
    const datasource: DatasourceInterface = new FilePlantsDatasource(true);
    let plant: Plant;
    beforeAll(() => {
        plant = new Plant(
            'Bromelia',
            false,
            'Argentina',
            102,
        );
    });

    it('Deve criar uma nova planta em um arquivo json', async () => {
        const newPlant = await datasource.create(plant);
        expect(newPlant).toBeInstanceOf(Plant);
        expect(newPlant.id).toBeTruthy();
    });
});