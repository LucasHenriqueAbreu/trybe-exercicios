// TODO: Corrigir lint
/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/extensions
import fs from 'fs/promises';
// eslint-disable-next-line import/extensions
import Plant from '../../models/Plants';
import DatasourceInterface from '../datasource.interface';

class FilePlantsDatasource implements DatasourceInterface {
    private readonly plantsFile = 'plantsData.json';
    private readonly plantsFileTest = 'plantsData-test.json';
    private onTest: boolean; // Procuar uma forma melhor

    constructor(onTest = false) {
        this.onTest = onTest;
    }

    private getPlantsFile(): string {
        return this.onTest ? this.plantsFileTest : this.plantsFile;
    }

    public async create(newPlant: Plant): Promise<Plant> {
        const plantsRaw = await fs.readFile(this.getPlantsFile(), { encoding: 'utf-8' });
        const plants: Plant[] = JSON.parse(plantsRaw);
        newPlant.setId(plants.length + 1);
        plants.push(newPlant);
        await fs.writeFile(this.plantsFile, JSON.stringify(plants));
        return newPlant;
    }
}

export default FilePlantsDatasource;