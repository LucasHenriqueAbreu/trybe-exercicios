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
const Plants_1 = __importDefault(require("../models/Plants"));
class PlantsController {
    constructor(service) {
        this.service = service;
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Chegou aqui', req.body);
            const { breed, needsSun, origin, size } = req.body;
            const plant = new Plants_1.default(breed, needsSun, origin, size);
            const newPlant = yield this.service.create(plant);
            return res.json(newPlant);
        });
    }
}
exports.default = PlantsController;
