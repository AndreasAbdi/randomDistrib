import { Injectable } from '@angular/core';
import { Probability } from '../data-type/Probability';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable'; 

let data: Probability[] = [
    { name: `first`, probability: 50 },
    { name: `second`, probability: 20 }
];

/**
 * compose the distribution for the random generator service.
 */
@Injectable()
export class DistributionService {
    private dataChangeSource = new Subject<Probability>();
    constructor() { }

    dataChangedObservable = this.dataChangeSource.asObservable();

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
        this.dataChangeSource.next(probability);
        return new Promise((resolve, reject) => resolve(probability));
    }

    deleteProbability(probability: Probability): Promise<void> {
        let probabilityIndex = data.findIndex(
            value => value.name === probability.name);
        if (probabilityIndex !== undefined) {
            data.splice(probabilityIndex, 1);
        }
        this.dataChangeSource.next(new Probability('', 0));
        return new Promise((resolve, reject) => { });
    }
}
