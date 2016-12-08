import { Component, OnInit } from '@angular/core';
import { SocketService } from '../socket-service/socket.service';
import Probability from '../data-type/probability';
@Component({
    selector: 'websocket',
    templateUrl: './websocket.component.html',
    styleUrls: ['./websocket.component.css']
})

export class WebsocketComponent implements OnInit {
    probabilities: Probability[];
    results: Probability[] = [];
    public isCollapsed = false;

    constructor(private socketService: SocketService) { }

    list(): void {
        this.socketService.list();
    }

    emit(): void {
        this.socketService.emitEvent();
    }

    decide(): void {
        this.socketService.decide(this.probabilities);
    }

    addSlice(name: string, weight: string): void {
        if (name && weight) {
            let intWeight = parseInt(weight, 10);
            if (intWeight > 0 && intWeight <= 100) {
                this.socketService.addSlice(new Probability(name, intWeight));
            }
        }
    }

    removeSlice(probability: Probability): void {
        this.socketService.removeSlice(probability);
    }

    ngOnInit() {
        this.subscribeToListObservable();
        this.subscribeToDecisionObservable();
    }

    private subscribeToDecisionObservable(): void {
        this.socketService.distributionResultObservable.subscribe(
            (probability) => {
                this.results.push(probability);
            }
        )
    }

    private subscribeToListObservable(): void {
        this.socketService.distributionListObservable.subscribe(
            (probabilities) => {
                this.probabilities = probabilities;
            }
        );

    }
}
