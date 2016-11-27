import { Injectable } from '@angular/core';

//TODO
/**
 * Random number service to generate random numbers;
 */
@Injectable()
export class RandomService {

    constructor() { }

    /**
     * Generate a number between [0, limit].
     * //TODO: does this need to be all values. 
     */
    generateNumber(limit: number): Promise<number> {
        let generatedStub = Math.floor((Math.random() * limit));
        return new Promise((resolve, reject) => resolve(generatedStub));
    }
}
