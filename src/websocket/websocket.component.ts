import { Component, OnInit } from '@angular/core';
import { SocketService } from '../socket-service/socket.service';
import { Probability } from '../data-type/probability';
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
    ngOnInit() {
        this.socketService.distributionListObservable.subscribe(
            (probabilities) => {
                this.probabilities = probabilities;
            }
        );
    }
}
