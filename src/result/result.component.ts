import { Component, OnInit } from '@angular/core';
import { SocketService } from '../socket-service/socket.service';
import Probability from '../data-type/probability';

@Component({
    selector: 'results-view',
    templateUrl: './result.component.html'
})
export class ResultComponent implements OnInit {
    results: Probability[] = [];
    isCollapsed = true;

    constructor(private socketService: SocketService) { }

    ngOnInit() {
        this.subscribeToDecisionObservable();
     }

    decide(): void {
        this.socketService.decide();
    }

    private subscribeToDecisionObservable(): void {
        this.socketService.distributionResultObservable.subscribe(
            (probability) => {
                this.results.push(probability);
            }
        );
    }

}