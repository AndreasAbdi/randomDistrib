import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'websocket',
    templateUrl: './websocket.component.html'
})
export class WebsocketComponent implements OnInit {
    datablock: string = 'sdfsdf';
    constructor() { }

    changeVal(): void {
        this.datablock = 'value has been changed';
    }
    ngOnInit() { }
}
