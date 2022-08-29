"use strict";
/* eslint-disable max-lines-per-function */
/* eslint-disable mocha/no-mocha-arrows */
// TODO: resolver lint.
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
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
const Plants_1 = __importDefault(require("../../src/models/Plants"));
const plant_service_1 = __importDefault(require("../../src/services/plant.service"));
describe('Teste para PlantsService', () => {
    let plantMock;
    beforeAll(() => {
        plantMock = new Plants_1.default('Bromelia', false, 'Argentina', 102);
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const datasource = {
        // eslint-disable-next-line mocha/no-setup-in-describe, arrow-body-style
        create: jest.fn((plant) => {
            return Promise.resolve(plant);
        }),
    };
    const service = new plant_service_1.default(datasource);
    it('Deve executar a função do datasource', () => __awaiter(void 0, void 0, void 0, function* () {
        yield service.create(plantMock);
        expect(datasource.create).toHaveBeenCalledTimes(1);
        expect(datasource.create).toHaveBeenCalledWith(plantMock);
    }));
});
