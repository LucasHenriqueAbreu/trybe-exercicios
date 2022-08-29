"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable import/no-unresolved */
const express_1 = __importDefault(require("express"));
const plants_controller_1 = __importDefault(require("./controllers/plants.controller"));
const file_plants_datasource_1 = __importDefault(require("./data/plants/file-plants.datasource"));
const plant_service_1 = __importDefault(require("./services/plant.service"));
const app = (0, express_1.default)();
const plantController = new plants_controller_1.default(new plant_service_1.default(new file_plants_datasource_1.default(false)));
app.get('/', (req, res) => {
    res.send('Test');
});
app.post('/plant', plantController.create);
app.listen(3000, () => {
    console.log('AAaaaaaaa');
    console.log(plantController);
    console.log('Server is running at http://localhost:3000');
});
