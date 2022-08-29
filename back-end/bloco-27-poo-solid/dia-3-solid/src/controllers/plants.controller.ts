/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { Request, Response } from 'express';
import Plant from '../models/Plants';
import PlantService from '../services/plant.service';

class PlantsController {
    private service: PlantService;

    constructor(service: PlantService) {
        this.service = service;
    }

    public async create(req: Request, res: Response): Promise<Response> {
        console.log('Chegou aqui', req.body);
        const { breed, needsSun, origin, size } = req.body;
        const plant: Plant = new Plant(breed, needsSun, origin, size);
        const newPlant = await this.service.create(plant);
        return res.json(newPlant);
    }
}

export default PlantsController;