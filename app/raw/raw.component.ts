import { Component, OnInit } from '@angular/core';
import { RandomService } from '../random-service/random.service';

@Component({
    moduleId: module.id,
    selector: 'raw-view',
    templateUrl: 'raw.component.html'
})

/**
 * Displays the raw view of the random distribution.
 */
export class RawComponent implements OnInit {
    private limit: number;
    private currentNumber: number;
    private showCurrentNumber: boolean;

    constructor(
        private randomService: RandomService
    ) { }

    getRandom(): void {
        this.randomService
            .generateNumber(this.limit)
            .then(
            value => {
                this.currentNumber = value;
                this.showCurrentNumber = true;
            },
            value => {
                this.showCurrentNumber = false;
            })
            .catch(error => console.log('an error occured', error));
    }

    ngOnInit() {
        // TODO: replace stub with valid limit. 
        this.limit = 10000;
    }
}
