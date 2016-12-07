import { Component, OnInit } from '@angular/core';
import { SocketService } from '../socket-service/socket.service';

@Component({
    selector: 'websocket',
    templateUrl: './websocket.component.html'
})
export class WebsocketComponent implements OnInit {
    datablock: string = 'sdfsdf';
    constructor(private SocketService: SocketService) { }

    changeVal(): void {
        this.SocketService.getData().subscribe(
            data => this.datablock = data,
            error => { },
        );
    }
    ngOnInit() { }
}
