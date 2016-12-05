import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { DistributionService } from '../distribution-service/distribution.service';
import { Probability } from '../data-type/probability';

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
        private distributionService: DistributionService,
        private element: ElementRef) { }

    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }

    /**
     * Call the distribution service to return current probability.
     */
    getDistribution(): void {
        this.distributionService
            .getDistribution()
            .then(distribution => {
                this.distribution = distribution;
                this.doughnutChartLabels = distribution.map(value => value.name);
                this.doughnutChartData = distribution.map(value => value.probability);

            });
    }

    updateGraph(probability: Probability): void {
        const chartClone = this.distribution.slice(0);

        this.doughnutChartLabels = chartClone.map(value => value.name);
        this.doughnutChartData = chartClone.map(value => value.probability);
    }

    ngAfterViewInit() {
    }

    ngOnInit() {
        this.distributionService.dataChangedObservable.subscribe(
            probability => {
                this.updateGraph(probability);
            }
        );
        this.getDistribution();
    }
}
