import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../socket-service/socket.service';

@Component({
  selector: 'user-view',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
  currentUsername: string = '';
  usernames: string[] = [];
  constructor(private socketService: SocketService) { }

  setName(name: string) {
    this.socketService.setName(name);
    this.socketService.getName();
    this.socketService.getNames();
  }

  ngOnInit() {
    this.socketService.userNameObservable.subscribe(
      (username) => {
        this.currentUsername = username;
      }
    );
    this.socketService.userNamesObservable.subscribe(
      (usernames) => {
        this.usernames = usernames;
      }
    );
  }

}
