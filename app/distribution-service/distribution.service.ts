import { Injectable } from '@angular/core';
import { Probability } from '../data-type/Probability';

let data: Probability[] = [
    { name: `first`, probability: 50 },
    { name: `second`, probability: 20 }
];

/**
 * compose the distribution for the random generator service.
 */
@Injectable()
export class DistributionService {
    constructor() { }

    getDistribution(): Promise<Probability[]> {
        return new Promise((resolve, reject) => resolve(data));
    }

    getTotalWeight(): Promise<number> {
        return new Promise(resolve => data.reduce((a, b) =>
            new Probability('', a.probability + b.probability))
            .probability);
    }

    addProbability(probability: Probability): Promise<Probability> {
        data.push(probability);
        return new Promise((resolve, reject) => resolve(probability));
    }
}
