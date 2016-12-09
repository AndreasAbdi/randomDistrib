import { Component, OnInit } from '@angular/core';
import { SocketService } from '../socket-service/socket.service';

@Component({
    selector: 'create-room',
    templateUrl: './create-room.component.html'
})
export class CreateRoomComponent implements OnInit {
    constructor(private socketService: SocketService) { }

    ngOnInit() { }


    joinOrCreate(roomName: string): void {
        if (!roomName || roomName.length <= 0) {
            return;
        }
        this.socketService.joinRoom(roomName);
        this.socketService.listRooms();
    }
}