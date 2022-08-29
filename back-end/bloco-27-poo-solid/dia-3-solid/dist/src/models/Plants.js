"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// TODO: Corrigir lint
/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/extensions
const SpecialCare_1 = __importDefault(require("./SpecialCare"));
class Plant {
    // eslint-disable-next-line max-params
    constructor(breed, needsSun, origin, size) {
        this.breed = breed;
        this.needsSun = needsSun;
        this.origin = origin;
        this.size = size;
        this.buildSpecialCare();
    }
    buildSpecialCare() {
        const waterFrequency = this.needsSun
            ? this.size * 0.77 + (this.origin === 'Brazil' ? 8 : 7)
            : (this.size / 2) * 1.33 + (this.origin === 'Brazil' ? 8 : 7);
        this.specialCare = new SpecialCare_1.default(waterFrequency);
    }
    setId(newValue) {
        this.id = newValue;
    }
    get getId() {
        return this.id;
    }
}
exports.default = Plant;
