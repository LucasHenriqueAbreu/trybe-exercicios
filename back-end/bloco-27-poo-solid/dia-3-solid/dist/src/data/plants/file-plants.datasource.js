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
// TODO: Corrigir lint
/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/extensions
const promises_1 = __importDefault(require("fs/promises"));
class FilePlantsDatasource {
    constructor(onTest = false) {
        this.plantsFile = 'plantsData.json';
        this.plantsFileTest = 'plantsData-test.json';
        this.onTest = onTest;
    }
    getPlantsFile() {
        return this.onTest ? this.plantsFileTest : this.plantsFile;
    }
    create(newPlant) {
        return __awaiter(this, void 0, void 0, function* () {
            const plantsRaw = yield promises_1.default.readFile(this.getPlantsFile(), { encoding: 'utf-8' });
            const plants = JSON.parse(plantsRaw);
            newPlant.setId(plants.length + 1);
            plants.push(newPlant);
            yield promises_1.default.writeFile(this.plantsFile, JSON.stringify(plants));
            return newPlant;
        });
    }
}
exports.default = FilePlantsDatasource;
