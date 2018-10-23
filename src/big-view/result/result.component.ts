import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../socket-service/socket.service';
import Probability from '../../data-type/probability';

@Component({
  selector: 'app-results-view',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  results: Probability[] = [];
  currentResult: Probability;
  isCollapsed = true;

  constructor(private socketService: SocketService) { }

  ngOnInit() {
    // if (this.socketService.activated()) {
    //   this.results = this.socketService.probabilityHistory.slice(0);
    // }
    // this.subscribeToDecisionObservable();
  }

  decide(): void {
    this.socketService.decide();
  }

  private subscribeToDecisionObservable(): void {
    this.socketService.distributionResultObservable.subscribe(
      (probability) => {
        this.results.push(probability);
        this.currentResult = probability;
      }
    );
  }

}
