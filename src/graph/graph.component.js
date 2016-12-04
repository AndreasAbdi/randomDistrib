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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhcGguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ3JhcGguY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNkQsZUFBZSxDQUFDLENBQUE7QUFDN0UscUNBQW9DLDhDQUE4QyxDQUFDLENBQUE7QUFhbkY7SUErQkksd0JBQ1ksbUJBQXdDLEVBQ3hDLE9BQW1CO1FBRG5CLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQTlCL0IsV0FBVztRQUNKLHdCQUFtQixHQUFhLEVBQUUsQ0FBQztRQUNuQyxzQkFBaUIsR0FBYSxFQUFFLENBQUM7UUFFakMsc0JBQWlCLEdBQVcsVUFBVSxDQUFDO1FBRXZDLFlBQU8sR0FBRztZQUNiLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLG1CQUFtQixFQUFFLEtBQUs7U0FDN0IsQ0FBQztRQUVLLFdBQU0sR0FBRyxDQUFDO2dCQUNiLGVBQWUsRUFBRTtvQkFDYixTQUFTO29CQUNULFNBQVM7b0JBQ1QsU0FBUztvQkFDVCxTQUFTO29CQUNULFNBQVM7b0JBQ1QsU0FBUztvQkFDVCxTQUFTO29CQUNULFNBQVM7b0JBQ1QsU0FBUztvQkFDVCxTQUFTO29CQUNULFNBQVM7b0JBQ1QsU0FBUztpQkFDWjthQUNKLENBQUMsQ0FBQztJQUlnQyxDQUFDO0lBRXBDLFNBQVM7SUFDRixxQ0FBWSxHQUFuQixVQUFvQixDQUFNO1FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUVNLHFDQUFZLEdBQW5CLFVBQW9CLENBQU07UUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBRUQ7O09BRUc7SUFDSCx3Q0FBZSxHQUFmO1FBQUEsaUJBU0M7UUFSRyxJQUFJLENBQUMsbUJBQW1CO2FBQ25CLGVBQWUsRUFBRTthQUNqQixJQUFJLENBQUMsVUFBQSxZQUFZO1lBQ2QsS0FBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7WUFDakMsS0FBSSxDQUFDLG1CQUFtQixHQUFHLFlBQVksQ0FBQyxHQUFHLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsSUFBSSxFQUFWLENBQVUsQ0FBQyxDQUFDO1lBQ2pFLEtBQUksQ0FBQyxpQkFBaUIsR0FBRyxZQUFZLENBQUMsR0FBRyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLFdBQVcsRUFBakIsQ0FBaUIsQ0FBQyxDQUFDO1FBRTFFLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELG9DQUFXLEdBQVgsVUFBWSxXQUF3QjtRQUNoQyxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU5QyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxJQUFJLEVBQVYsQ0FBVSxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsV0FBVyxFQUFqQixDQUFpQixDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVELHdDQUFlLEdBQWY7SUFDQSxDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUFBLGlCQU9DO1FBTkcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLHFCQUFxQixDQUFDLFNBQVMsQ0FDcEQsVUFBQSxXQUFXO1lBQ1AsS0FBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQ0osQ0FBQztRQUNGLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBckZMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUsc0JBQXNCO1lBQ25DLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1NBQ3JDLENBQUM7O3NCQUFBO0lBaUZGLHFCQUFDO0FBQUQsQ0FBQyxBQTVFRCxJQTRFQztBQTVFWSxzQkFBYyxpQkE0RTFCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEaXN0cmlidXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vZGlzdHJpYnV0aW9uLXNlcnZpY2UvZGlzdHJpYnV0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQcm9iYWJpbGl0eSB9IGZyb20gJy4uL2RhdGEtdHlwZS9wcm9iYWJpbGl0eSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ2dyYXBoLXZpZXcnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdncmFwaC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnZ3JhcGguY29tcG9uZW50LmNzcyddXHJcbn0pXHJcblxyXG4vKipcclxuICogRGlzcGxheSB0aGUgcmFuZG9tIGRpc3RyaWJ1dGlvbiBhcyBhIGdyYXBoLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEdyYXBoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcclxuICAgIGRpc3RyaWJ1dGlvbjogUHJvYmFiaWxpdHlbXTtcclxuXHJcbiAgICAvLyBEb3VnaG51dFxyXG4gICAgcHVibGljIGRvdWdobnV0Q2hhcnRMYWJlbHM6IHN0cmluZ1tdID0gW107XHJcbiAgICBwdWJsaWMgZG91Z2hudXRDaGFydERhdGE6IG51bWJlcltdID0gW107XHJcblxyXG4gICAgcHVibGljIGRvdWdobnV0Q2hhcnRUeXBlOiBzdHJpbmcgPSAnZG91Z2hudXQnO1xyXG5cclxuICAgIHB1YmxpYyBvcHRpb25zID0ge1xyXG4gICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICAgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIGNvbG9ycyA9IFt7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXHJcbiAgICAgICAgICAgICcjOTY4NThGJyxcclxuICAgICAgICAgICAgJyM2RDc5OTMnLFxyXG4gICAgICAgICAgICAnIzkwOTlBMicsXHJcbiAgICAgICAgICAgICcjYTRhZGQzJyxcclxuICAgICAgICAgICAgJyNGMkZGMDAnLFxyXG4gICAgICAgICAgICAnIzg4MDBGRicsXHJcbiAgICAgICAgICAgICcjMkZGRjhBJyxcclxuICAgICAgICAgICAgJyNGRjQwMkYnLFxyXG4gICAgICAgICAgICAnIzQwQTJGRicsXHJcbiAgICAgICAgICAgICcjRkZCNzQwJyxcclxuICAgICAgICAgICAgJyM2RTgwRkYnLFxyXG4gICAgICAgICAgICAnI0ZGREU2RSdcclxuICAgICAgICBdXHJcbiAgICB9XTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGRpc3RyaWJ1dGlvblNlcnZpY2U6IERpc3RyaWJ1dGlvblNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmKSB7IH1cclxuXHJcbiAgICAvLyBldmVudHNcclxuICAgIHB1YmxpYyBjaGFydENsaWNrZWQoZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNoYXJ0SG92ZXJlZChlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGwgdGhlIGRpc3RyaWJ1dGlvbiBzZXJ2aWNlIHRvIHJldHVybiBjdXJyZW50IHByb2JhYmlsaXR5LlxyXG4gICAgICovXHJcbiAgICBnZXREaXN0cmlidXRpb24oKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kaXN0cmlidXRpb25TZXJ2aWNlXHJcbiAgICAgICAgICAgIC5nZXREaXN0cmlidXRpb24oKVxyXG4gICAgICAgICAgICAudGhlbihkaXN0cmlidXRpb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXN0cmlidXRpb24gPSBkaXN0cmlidXRpb247XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvdWdobnV0Q2hhcnRMYWJlbHMgPSBkaXN0cmlidXRpb24ubWFwKHZhbHVlID0+IHZhbHVlLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kb3VnaG51dENoYXJ0RGF0YSA9IGRpc3RyaWJ1dGlvbi5tYXAodmFsdWUgPT4gdmFsdWUucHJvYmFiaWxpdHkpO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlR3JhcGgocHJvYmFiaWxpdHk6IFByb2JhYmlsaXR5KTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgY2hhcnRDbG9uZSA9IHRoaXMuZGlzdHJpYnV0aW9uLnNsaWNlKDApO1xyXG5cclxuICAgICAgICB0aGlzLmRvdWdobnV0Q2hhcnRMYWJlbHMgPSBjaGFydENsb25lLm1hcCh2YWx1ZSA9PiB2YWx1ZS5uYW1lKTtcclxuICAgICAgICB0aGlzLmRvdWdobnV0Q2hhcnREYXRhID0gY2hhcnRDbG9uZS5tYXAodmFsdWUgPT4gdmFsdWUucHJvYmFiaWxpdHkpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmRpc3RyaWJ1dGlvblNlcnZpY2UuZGF0YUNoYW5nZWRPYnNlcnZhYmxlLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcHJvYmFiaWxpdHkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVHcmFwaChwcm9iYWJpbGl0eSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuZ2V0RGlzdHJpYnV0aW9uKCk7XHJcbiAgICB9XHJcbn1cclxuIl19