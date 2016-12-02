"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var distribution_service_1 = require('../distribution-service/distribution.service');
var GraphComponent = (function () {
    function GraphComponent(distributionService, element) {
        this.distributionService = distributionService;
        this.element = element;
        // Doughnut
        this.doughnutChartLabels = [];
        this.doughnutChartData = [];
        this.doughnutChartType = 'doughnut';
        this.options = {
            responsive: true,
            maintainAspectRatio: false
        };
        this.colors = [{
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
    }
    // events
    GraphComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    GraphComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    /**
     * Call the distribution service to return current probability.
     */
    GraphComponent.prototype.getDistribution = function () {
        var _this = this;
        this.distributionService
            .getDistribution()
            .then(function (distribution) {
            _this.distribution = distribution;
            _this.doughnutChartLabels = distribution.map(function (value) { return value.name; });
            _this.doughnutChartData = distribution.map(function (value) { return value.probability; });
        });
    };
    GraphComponent.prototype.updateGraph = function (probability) {
        var chartClone = this.distribution.slice(0);
        this.doughnutChartLabels = chartClone.map(function (value) { return value.name; });
        this.doughnutChartData = chartClone.map(function (value) { return value.probability; });
    };
    GraphComponent.prototype.ngAfterViewInit = function () {
    };
    GraphComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.distributionService.dataChangedObservable.subscribe(function (probability) {
            _this.updateGraph(probability);
        });
        this.getDistribution();
    };
    GraphComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'graph-view',
            templateUrl: 'graph.component.html',
            styleUrls: ['graph.component.css']
        }), 
        __metadata('design:paramtypes', [distribution_service_1.DistributionService, core_1.ElementRef])
    ], GraphComponent);
    return GraphComponent;
}());
exports.GraphComponent = GraphComponent;
//# sourceMappingURL=graph.component.js.map