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
    @ViewChild('canvas')
    canvasReference: ElementRef;
    canvas: any;
    distribution: Probability[];

    constructor(
        private distributionService: DistributionService,
        private element: ElementRef) { }

    drawToCanvas(): void {
        if (this.canvas.getContext) {
            const context = this.canvas.getContext('2d');
            const w = this.canvas.width;
            const h = this.canvas.height;
            const xOffset = 5;
            const offset = 25;
            const yOffset = 5;

            const axisLength = 5;

            this.distributionService
                .getDistribution()
                .then(distribution =>
                    distribution.forEach((slice, index, array) => {
                        let position = w / array.length * (index);
                        let height = h * (slice.probability / 100);
                        let width = w / array.length;
                        context.fillRect(
                            position + xOffset + (offset * index),
                            h - height,
                            width,
                            height);

                    })
                );


        }
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
        this.canvas = this.canvasReference.nativeElement;
        this.drawToCanvas();
    }

    ngOnInit() {
        this.getDistribution();
    }
}