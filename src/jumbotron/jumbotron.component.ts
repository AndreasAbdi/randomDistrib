import { Component, OnInit, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { SocketService } from '../socket-service/socket.service';
import Probability from '../data-type/probability';

@Component({
  selector: 'jumbotron-view',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css'],
  animations: [
    trigger('coinState', [
      state('active', style({
      })),
      state('inactive', style({
        transform: 'rotateX(360deg)'
      })),
      transition('active <=> inactive', animate(2000, keyframes([
        style({ opacity: 1, transform: 'rotateX(180deg)', offset: 0 }),
        style({ transform: 'rotateX(0deg)', offset: 0.2 }),
        style({ transform: 'rotateX(180deg)', offset: 0.3 }),
        style({ transform: 'rotateX(0deg)', offset: 0.35 }),
        style({ transform: 'rotateX(180deg)', offset: 0.4 }),
        style({ transform: 'rotateX(0deg)', offset: 0.45 }),
        style({ transform: 'rotateX(180deg)', offset: 0.5 }),
        style({ transform: 'rotateX(0deg)', offset: 0.6 })
      ]))),
    ])
  ]
})
export class JumbotronComponent implements OnInit {
  isFlipped: String = 'active';
  resultExists = false;
  result: Probability;
  constructor(private socketService: SocketService) { }

  ngOnInit() {
    this.socketService.distributionResultObservable.subscribe(
      (probability) => {
        this.result = probability;
        this.resultExists = true;
        this.toggle();
      }
    );
  }
  decide(): void {
    this.socketService.decide();
  }
  toggle() {
    this.toggleStates();
  };

  private toggleObject(state: String): String {
    return state === 'active' ? 'inactive' : 'active';
  }

  private toggleStates() {
    this.isFlipped = this.toggleObject(this.isFlipped);
  }
}
