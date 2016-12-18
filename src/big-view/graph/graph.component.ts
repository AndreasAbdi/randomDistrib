import { Component, OnInit, AfterViewInit, AfterViewChecked, ElementRef } from '@angular/core';
import { SocketService } from '../../socket-service/socket.service';
import Probability from '../../data-type/probability';

@Component({
  selector: 'graph-view',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})

/**
 * Display the random distribution as a graph.
 */
export class GraphComponent implements OnInit, AfterViewInit {
  distribution: Probability[];

  // Doughnut
  public doughnutChartLabels: string[] = [];
  public doughnutChartData: number[] = [];

  public doughnutChartType: string = 'doughnut';

  public options = {
    responsive: true,
    maintainAspectRatio: false
  };

  public colors = [{
    backgroundColor: [
      '#96858F',
      '#6D7993',
      '#9099A2',
      '#a4add3',
      '#F2FF00',
      '#8800FF',
      '#2FFF8A',
      '#FF402F',
      '#40A2FF',
      '#FFB740',
      '#6E80FF',
      '#FFDE6E'
    ]
  }];

  constructor(
    private socketService: SocketService,
    private element: ElementRef) { }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  ngAfterViewInit() {
  }

  ngOnInit() {
    this.getDistribution();
    if (this.socketService.activated()) {
      this.socketService.list();
    }
  }

  /**
   * Call the distribution service to return current probability.
   */
  private getDistribution(): void {
    this.socketService
      .distributionListObservable
      .subscribe(
      (distribution) => {
        this.distribution = distribution;
        this.doughnutChartLabels = distribution.map(value => value.name);
        this.doughnutChartData = distribution.map(value => value.weight);
      });
  }

}
