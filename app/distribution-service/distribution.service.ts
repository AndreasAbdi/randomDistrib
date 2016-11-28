import { Injectable } from '@angular/core';
import { Probability } from '../data-type/Probability';

let data: Probability[] = [
    { name: `first`, probability: 1 },
    { name: `second`, probability: 1 }
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

    addProbability(probability: Probability): Promise<Probability> {
        data.push(probability);
        return new Promise((resolve, reject) => resolve(probability));
    }
}
