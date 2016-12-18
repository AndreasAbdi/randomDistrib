import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../socket-service/socket.service';

@Component({
  selector: 'user-view',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
  currentUsername: string = '';
  usernames: string[] = ['hi', 'there'];
  constructor(private socketService: SocketService) { }

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
