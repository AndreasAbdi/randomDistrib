import { Component, OnInit } from '@angular/core';
import { DistributionService } from '../distribution-service/distribution.service';
import { RandomService } from '../random-service/random.service';
import { Probability } from '../data-type/probability';

@Component({
    moduleId: module.id,
    selector: 'list-view',
    templateUrl: 'list.component.html'
})

/**
 * lists the probabilities assigned to random generator. 
 */
export class ListComponent implements OnInit {
    private distribution: Probability[];
    private currentDecision: Probability;

    constructor(
        private distributionService: DistributionService,
        private randomService: RandomService) { }

    /**
     * Call the distribution service to return current probability.
     */
    getDistribution(): void {
        this.distributionService
            .getDistribution()
            .then(distribution => this.distribution = distribution);
    }

    /**
     * Call the distribution service to add a new probability. 
     */
    addProbability(name: string, value: number): void {
        name = name.trim();
        if (!name) {
            return;
        }

        this.distributionService
            .addProbability(new Probability(name, value))
            .then(probability => {
                // this.distribution.push(probability);
            });
    }

    /**
     * Call the distribution service to remove an existing probability
     * 
     */
    removeProbability(probability: Probability): void {
        this.distributionService
            .deleteProbability(probability);
    }

    decide(): void {
        this.randomService
            .decide(this.distribution)
            .then(decision => this.currentDecision = decision);
    }

    ngOnInit(): void {
        this.getDistribution();
    }
}
