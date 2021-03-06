import { Component, OnInit, AfterViewInit, AfterViewChecked, ElementRef } from '@angular/core';
import { SocketService } from '../../socket-service/socket.service';
import Probability from '../../data-type/probability';

@Component({
  selector: 'app-graph-view',
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

  public doughnutChartType = 'doughnut';

  public options = {
    responsive: true,
    maintainAspectRatio: false
  };

  public colors = [{ backgroundColor: [] }];

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
    this.setColors();
    this.getDistribution();
    if (this.socketService.activated()) {
      this.socketService.list();
    }
  }

  private setColors(): void {
    const randomColors = ['#96858F',
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
      '#FFDE6E'];
    const backgroundColors = Array(100)
      .fill(1)
      .map((x, i) => randomColors[Math.floor(Math.random() * randomColors.length)]);

    this.colors = [{
      backgroundColor: backgroundColors
    }];
  }

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
