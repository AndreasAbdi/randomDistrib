import { Component, OnInit } from '@angular/core';
import { SocketService } from '../socket-service/socket.service';

import Probability from '../data-type/probability';

@Component({
    selector: 'list-view',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})

/**
 * lists the probabilities assigned to random generator. 
 */
export class ListComponent implements OnInit {
    private distribution: Probability[];

    constructor(
        private socketService: SocketService) { }

    getDistribution(): void {
        this.socketService.distributionListObservable.subscribe(
            (distribution) => { this.distribution = distribution; }
        );
    }

    ngOnInit(): void {
        this.getDistribution();
    }

    removeSlice(probability: Probability): void {
        this.socketService.removeSlice(probability);
    }
}
