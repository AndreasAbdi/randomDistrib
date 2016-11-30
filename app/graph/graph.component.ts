import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { DistributionService } from '../distribution-service/distribution.service';
import { Probability } from '../data-type/probability';

@Component({
    moduleId: module.id,
    selector: 'graph-view',
    templateUrl: 'graph.component.html',
    styleUrls: ['graph.component.css']
})

/**
 * Display the random distribution as a graph.
 */
export class GraphComponent implements OnInit, AfterViewInit {
    distribution: Probability[];

    // Doughnut
    public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
    public doughnutChartData: number[] = [350, 450, 100];
    public doughnutChartType: string = 'doughnut';
    public options = {
        responsive: true,
        maintainAspectRatio: false
    };

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
            .then(distribution => this.distribution = distribution);
    }


    ngAfterViewInit() {
    }

    ngOnInit() {
        this.getDistribution();
    }
}