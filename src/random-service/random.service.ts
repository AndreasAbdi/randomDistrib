import { Injectable } from '@angular/core';
import { Probability } from '../data-type/probability';

const add = (first: Probability, second: Probability) =>
    new Probability(
        second.name,
        first.probability + second.probability);

function toCumulativeDistribution(
    distribution: Probability[]): Probability[] {
    return distribution
        .map((value, id, array) => array.slice(0, id + 1))
        .map(value => value.reduce(add));
}

function getLocationOnDistribution(
    cumulativeDistribution: Probability[],
    target: number): Probability {

    return cumulativeDistribution
        .filter(
        (value, index, array) => {
            return value.probability >=
                array[array.length - 1]
                    .probability * target;
        })
    [0];
}

/**
 * Random number service to generate random numbers;
 */
@Injectable()
export class RandomService {

    constructor() { }

    /**
     * given a probability distribution, uniformly select a
     * single probability.
     */
    decide(distribution: Probability[]): Promise<Probability> {
        if (!distribution || distribution.length === 0) {
            return new Promise((resolve, reject) => reject());
        }
        let random = Math.random();
        let cumulativeDistribution = toCumulativeDistribution(distribution);

        let location = getLocationOnDistribution(
            cumulativeDistribution, random);

        let decision = distribution.find(
            value => value.name === location.name);
        return new Promise((resolve, reject) => resolve(decision));
    }

    /**
     * Generate a number between [0, limit].
     */
    generateNumber(limit: number): Promise<number> {
        let generatedStub = Math.floor((Math.random() * limit));
        return new Promise((resolve, reject) => resolve(generatedStub));
    }


}
