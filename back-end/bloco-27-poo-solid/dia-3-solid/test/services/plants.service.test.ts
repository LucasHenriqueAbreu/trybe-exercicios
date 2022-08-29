/* eslint-disable max-lines-per-function */
/* eslint-disable mocha/no-mocha-arrows */
// TODO: resolver lint.
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */

import DatasourceInterface from '../../src/data/datasource.interface';
import Plant from '../../src/models/Plants';
import PlantService from '../../src/services/plant.service';

describe('Teste para PlantsService', () => {
    let plantMock: Plant;
    beforeAll(() => {
        plantMock = new Plant(
            'Bromelia',
            false,
            'Argentina',
            102,
        );
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const datasource: DatasourceInterface = {
        // eslint-disable-next-line mocha/no-setup-in-describe, arrow-body-style
        create: jest.fn((plant: Plant) => {
            return Promise.resolve(plant);
        }),
    };

    const service = new PlantService(datasource);

    it('Deve executar a função do datasource', async () => {
        await service.create(plantMock);
        expect(datasource.create).toHaveBeenCalledTimes(1);
        expect(datasource.create).toHaveBeenCalledWith(plantMock);
    });
});