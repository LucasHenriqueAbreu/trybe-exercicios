/* eslint-disable import/no-unresolved */
import express, { Express, Request, Response } from 'express';
import PlantsController from './controllers/plants.controller';
import FilePlantsDatasource from './data/plants/file-plants.datasource';
import PlantService from './services/plant.service';

const app: Express = express();
const plantController = new PlantsController(new PlantService(new FilePlantsDatasource(false)));

app.get('/', (req: Request, res: Response) => {
    res.send('Test');
});

app.post('/plant', plantController.create);

app.listen(3000, () => {
    console.log('AAaaaaaaa');
    console.log(plantController);
    console.log('Server is running at http://localhost:3000');
});