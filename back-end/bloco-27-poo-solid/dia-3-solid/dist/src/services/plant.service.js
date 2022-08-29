"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlantService {
    constructor(datasource) {
        this.datasource = datasource;
    }
    create(plant) {
        return this.datasource.create(plant);
    }
}
exports.default = PlantService;
