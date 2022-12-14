// TODO: Corrigir lint
/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/extensions
import SpecialCare from './SpecialCare';

class Plant {
    private id?: number;
    breed: string;
    needsSun: boolean;
    origin: string;
    size: number;
    specialCare?: SpecialCare;

    // eslint-disable-next-line max-params
    constructor(
        breed: string,
        needsSun: boolean,
        origin: string,
        size: number,
    ) {
        this.breed = breed;
        this.needsSun = needsSun;
        this.origin = origin;
        this.size = size;
        this.buildSpecialCare();
    }

    private buildSpecialCare(): void {
        const waterFrequency = this.needsSun
            ? this.size * 0.77 + (this.origin === 'Brazil' ? 8 : 7)
            : (this.size / 2) * 1.33 + (this.origin === 'Brazil' ? 8 : 7);
        this.specialCare = new SpecialCare(waterFrequency);
    }

    public setId(newValue: number): void {
        this.id = newValue;
    }

    get getId(): number | undefined {
        return this.id;
    }
}

export default Plant;