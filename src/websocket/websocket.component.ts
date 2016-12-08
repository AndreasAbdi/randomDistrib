import { Component, OnInit } from '@angular/core';
import { SocketService } from '../socket-service/socket.service';
import Probability from '../data-type/probability';
@Component({
    selector: 'websocket',
    templateUrl: './websocket.component.html'
})
export class WebsocketComponent implements OnInit {
    probabilities: Probability[];
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
        this.socketService.addSlice(new Probability(name, parseInt(weight, 10)));
    }

    removeSlice(probability: Probability): void {
        this.socketService.removeSlice(probability);
    }

    ngOnInit() {
        this.socketService.distributionListObservable.subscribe(
            (probabilities) => {
                this.probabilities = probabilities;
            }
        );
    }
}
