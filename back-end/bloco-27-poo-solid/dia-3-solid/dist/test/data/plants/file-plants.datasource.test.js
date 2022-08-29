"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const file_plants_datasource_1 = __importDefault(require("../../../src/data/plants/file-plants.datasource"));
const Plants_1 = __importDefault(require("../../../src/models/Plants"));
/* eslint-disable mocha/no-mocha-arrows */
describe('Teste para PlantsDatasource', () => {
    const datasource = new file_plants_datasource_1.default(true);
    let plant;
    beforeAll(() => {
        plant = new Plants_1.default('Bromelia', false, 'Argentina', 102);
    });
    it('Deve criar uma nova planta em um arquivo json', () => __awaiter(void 0, void 0, void 0, function* () {
        const newPlant = yield datasource.create(plant);
        expect(newPlant).toBeInstanceOf(Plants_1.default);
        expect(newPlant.getId).toBeTruthy();
    }));
});
