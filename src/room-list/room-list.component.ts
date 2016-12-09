import { Component, OnInit } from '@angular/core';
import { SocketService } from '../socket-service/socket.service';

@Component({
    selector: 'room-list',
    templateUrl: './room-list.component.html'
})

export class RoomListComponent implements OnInit {
    roomList: string[] = [];
    currentRoom: string;

    constructor(private socketService: SocketService) { }

    ngOnInit() {
        this.subscribeToRoomListObservable();
        this.subscribeToCurrentRoomObservable();
    }

    joinOrCreate(roomName: string): void {
        if (!roomName || roomName.length <= 0) {
            return;
        }
        this.socketService.joinRoom(roomName);
        this.socketService.listRooms();
    }

    private subscribeToRoomListObservable(): void {
        this.socketService.roomListObservable.subscribe(
            (roomList) => { this.roomList = roomList; }
        );
    }

    private subscribeToCurrentRoomObservable(): void {
        this.socketService.currentRoomObservable.subscribe(
            (currentRoomName) => {
                this.currentRoom = currentRoomName;
            }
        );
    }

}