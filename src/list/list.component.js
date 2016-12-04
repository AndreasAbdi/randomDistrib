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
var random_service_1 = require('../random-service/random.service');
var probability_1 = require('../data-type/probability');
var ListComponent = (function () {
    function ListComponent(distributionService, randomService) {
        this.distributionService = distributionService;
        this.randomService = randomService;
    }
    /**
     * Call the distribution service to return current probability.
     */
    ListComponent.prototype.getDistribution = function () {
        var _this = this;
        this.distributionService
            .getDistribution()
            .then(function (distribution) { return _this.distribution = distribution; });
    };
    /**
     * Call the distribution service to add a new probability.
     */
    ListComponent.prototype.addProbability = function (name, value) {
        name = name.trim();
        if (!name) {
            return;
        }
        this.distributionService
            .addProbability(new probability_1.Probability(name, parseInt(value, 10)))
            .then(function (probability) {
        });
    };
    /**
     * Call the distribution service to remove an existing probability
     *
     */
    ListComponent.prototype.removeProbability = function (probability) {
        this.distributionService
            .deleteProbability(probability);
    };
    ListComponent.prototype.decide = function () {
        var _this = this;
        this.randomService
            .decide(this.distribution)
            .then(function (decision) { return _this.currentDecision = decision; });
    };
    ListComponent.prototype.ngOnInit = function () {
        this.getDistribution();
    };
    ListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'list-view',
            templateUrl: 'list.component.html',
            styleUrls: ['list.component.css']
        }), 
        __metadata('design:paramtypes', [distribution_service_1.DistributionService, random_service_1.RandomService])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELHFDQUFvQyw4Q0FBOEMsQ0FBQyxDQUFBO0FBQ25GLCtCQUE4QixrQ0FBa0MsQ0FBQyxDQUFBO0FBQ2pFLDRCQUE0QiwwQkFBMEIsQ0FBQyxDQUFBO0FBWXZEO0lBSUksdUJBQ1ksbUJBQXdDLEVBQ3hDLGFBQTRCO1FBRDVCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFBSSxDQUFDO0lBRTdDOztPQUVHO0lBQ0gsdUNBQWUsR0FBZjtRQUFBLGlCQUlDO1FBSEcsSUFBSSxDQUFDLG1CQUFtQjthQUNuQixlQUFlLEVBQUU7YUFDakIsSUFBSSxDQUFDLFVBQUEsWUFBWSxJQUFJLE9BQUEsS0FBSSxDQUFDLFlBQVksR0FBRyxZQUFZLEVBQWhDLENBQWdDLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQ7O09BRUc7SUFDSCxzQ0FBYyxHQUFkLFVBQWUsSUFBWSxFQUFFLEtBQWE7UUFDdEMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNuQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDUixNQUFNLENBQUM7UUFDWCxDQUFDO1FBRUQsSUFBSSxDQUFDLG1CQUFtQjthQUNuQixjQUFjLENBQUMsSUFBSSx5QkFBVyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDMUQsSUFBSSxDQUFDLFVBQUEsV0FBVztRQUNqQixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRDs7O09BR0c7SUFDSCx5Q0FBaUIsR0FBakIsVUFBa0IsV0FBd0I7UUFDdEMsSUFBSSxDQUFDLG1CQUFtQjthQUNuQixpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsOEJBQU0sR0FBTjtRQUFBLGlCQUlDO1FBSEcsSUFBSSxDQUFDLGFBQWE7YUFDYixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQzthQUN6QixJQUFJLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxLQUFJLENBQUMsZUFBZSxHQUFHLFFBQVEsRUFBL0IsQ0FBK0IsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUEzREw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSxxQkFBcUI7WUFDbEMsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7U0FDcEMsQ0FBQzs7cUJBQUE7SUF1REYsb0JBQUM7QUFBRCxDQUFDLEFBbERELElBa0RDO0FBbERZLHFCQUFhLGdCQWtEekIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERpc3RyaWJ1dGlvblNlcnZpY2UgfSBmcm9tICcuLi9kaXN0cmlidXRpb24tc2VydmljZS9kaXN0cmlidXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IFJhbmRvbVNlcnZpY2UgfSBmcm9tICcuLi9yYW5kb20tc2VydmljZS9yYW5kb20uc2VydmljZSc7XHJcbmltcG9ydCB7IFByb2JhYmlsaXR5IH0gZnJvbSAnLi4vZGF0YS10eXBlL3Byb2JhYmlsaXR5JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnbGlzdC12aWV3JyxcclxuICAgIHRlbXBsYXRlVXJsOiAnbGlzdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnbGlzdC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuXHJcbi8qKlxyXG4gKiBsaXN0cyB0aGUgcHJvYmFiaWxpdGllcyBhc3NpZ25lZCB0byByYW5kb20gZ2VuZXJhdG9yLiBcclxuICovXHJcbmV4cG9ydCBjbGFzcyBMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHByaXZhdGUgZGlzdHJpYnV0aW9uOiBQcm9iYWJpbGl0eVtdO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50RGVjaXNpb246IFByb2JhYmlsaXR5O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgZGlzdHJpYnV0aW9uU2VydmljZTogRGlzdHJpYnV0aW9uU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJhbmRvbVNlcnZpY2U6IFJhbmRvbVNlcnZpY2UpIHsgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbCB0aGUgZGlzdHJpYnV0aW9uIHNlcnZpY2UgdG8gcmV0dXJuIGN1cnJlbnQgcHJvYmFiaWxpdHkuXHJcbiAgICAgKi9cclxuICAgIGdldERpc3RyaWJ1dGlvbigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRpc3RyaWJ1dGlvblNlcnZpY2VcclxuICAgICAgICAgICAgLmdldERpc3RyaWJ1dGlvbigpXHJcbiAgICAgICAgICAgIC50aGVuKGRpc3RyaWJ1dGlvbiA9PiB0aGlzLmRpc3RyaWJ1dGlvbiA9IGRpc3RyaWJ1dGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsIHRoZSBkaXN0cmlidXRpb24gc2VydmljZSB0byBhZGQgYSBuZXcgcHJvYmFiaWxpdHkuIFxyXG4gICAgICovXHJcbiAgICBhZGRQcm9iYWJpbGl0eShuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBuYW1lID0gbmFtZS50cmltKCk7XHJcbiAgICAgICAgaWYgKCFuYW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGlzdHJpYnV0aW9uU2VydmljZVxyXG4gICAgICAgICAgICAuYWRkUHJvYmFiaWxpdHkobmV3IFByb2JhYmlsaXR5KG5hbWUsIHBhcnNlSW50KHZhbHVlLCAxMCkpKVxyXG4gICAgICAgICAgICAudGhlbihwcm9iYWJpbGl0eSA9PiB7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbCB0aGUgZGlzdHJpYnV0aW9uIHNlcnZpY2UgdG8gcmVtb3ZlIGFuIGV4aXN0aW5nIHByb2JhYmlsaXR5XHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgcmVtb3ZlUHJvYmFiaWxpdHkocHJvYmFiaWxpdHk6IFByb2JhYmlsaXR5KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kaXN0cmlidXRpb25TZXJ2aWNlXHJcbiAgICAgICAgICAgIC5kZWxldGVQcm9iYWJpbGl0eShwcm9iYWJpbGl0eSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVjaWRlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucmFuZG9tU2VydmljZVxyXG4gICAgICAgICAgICAuZGVjaWRlKHRoaXMuZGlzdHJpYnV0aW9uKVxyXG4gICAgICAgICAgICAudGhlbihkZWNpc2lvbiA9PiB0aGlzLmN1cnJlbnREZWNpc2lvbiA9IGRlY2lzaW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmdldERpc3RyaWJ1dGlvbigpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==