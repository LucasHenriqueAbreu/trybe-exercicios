// TODO: resolver problemas de lint.
/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/extensions
import Plant from '../models/Plants';

interface DatasourceInterface {
    // list(): Plant[];
    // findById(): Plant;
    // delete(): void;
    // update(id: string): Plant;
    create(plant: Plant): Promise<Plant>;
}

export default DatasourceInterface;