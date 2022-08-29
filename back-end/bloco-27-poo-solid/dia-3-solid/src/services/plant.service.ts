/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import DatasourceInterface from '../data/datasource.interface';
import Plant from '../models/Plants';

class PlantService {
    private datasource: DatasourceInterface;

    constructor(datasource: DatasourceInterface) {
        this.datasource = datasource;
    }

    public create(plant: Plant): Promise<Plant> {
        return this.datasource.create(plant);
    }
}

export default PlantService;
