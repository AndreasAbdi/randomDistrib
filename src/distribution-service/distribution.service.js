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
var Probability_1 = require('../data-type/Probability');
var Subject_1 = require('rxjs/Subject');
var data = [
    { name: "first", probability: 50 },
    { name: "second", probability: 20 }
];
/**
 * compose the distribution for the random generator service.
 */
var DistributionService = (function () {
    function DistributionService() {
        this.dataChangeSource = new Subject_1.Subject();
        this.dataChangedObservable = this.dataChangeSource.asObservable();
    }
    DistributionService.prototype.getDistribution = function () {
        return new Promise(function (resolve, reject) { return resolve(data); });
    };
    DistributionService.prototype.getTotalWeight = function () {
        return new Promise(function (resolve) { return data.reduce(function (a, b) {
            return new Probability_1.Probability('', a.probability + b.probability);
        })
            .probability; });
    };
    DistributionService.prototype.addProbability = function (probability) {
        data.push(probability);
        this.dataChangeSource.next(probability);
        return new Promise(function (resolve, reject) { return resolve(probability); });
    };
    DistributionService.prototype.deleteProbability = function (probability) {
        var probabilityIndex = data.findIndex(function (value) { return value.name === probability.name; });
        if (probabilityIndex !== undefined) {
            data.splice(probabilityIndex, 1);
        }
        this.dataChangeSource.next(new Probability_1.Probability('', 0));
        return new Promise(function (resolve, reject) { });
    };
    DistributionService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], DistributionService);
    return DistributionService;
}());
exports.DistributionService = DistributionService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzdHJpYnV0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaXN0cmlidXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLDRCQUE0QiwwQkFBMEIsQ0FBQyxDQUFBO0FBQ3ZELHdCQUF3QixjQUFjLENBQUMsQ0FBQTtBQUV2QyxJQUFJLElBQUksR0FBa0I7SUFDdEIsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUU7SUFDbEMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUU7Q0FDdEMsQ0FBQztBQUVGOztHQUVHO0FBRUg7SUFFSTtRQURRLHFCQUFnQixHQUFHLElBQUksaUJBQU8sRUFBZSxDQUFDO1FBR3RELDBCQUFxQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUY3QyxDQUFDO0lBSWpCLDZDQUFlLEdBQWY7UUFDSSxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTSxJQUFLLE9BQUEsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFiLENBQWEsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCw0Q0FBYyxHQUFkO1FBQ0ksTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDO1lBQzNDLE9BQUEsSUFBSSx5QkFBVyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUM7UUFBbEQsQ0FBa0QsQ0FBQzthQUNsRCxXQUFXLEVBRmMsQ0FFZCxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVELDRDQUFjLEdBQWQsVUFBZSxXQUF3QjtRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDeEMsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU0sSUFBSyxPQUFBLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRCwrQ0FBaUIsR0FBakIsVUFBa0IsV0FBd0I7UUFDdEMsSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUNqQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxJQUFJLEtBQUssV0FBVyxDQUFDLElBQUksRUFBL0IsQ0FBK0IsQ0FBQyxDQUFDO1FBQzlDLEVBQUUsQ0FBQyxDQUFDLGdCQUFnQixLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyQyxDQUFDO1FBQ0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLHlCQUFXLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkQsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU0sSUFBTyxDQUFDLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBL0JMO1FBQUMsaUJBQVUsRUFBRTs7MkJBQUE7SUFnQ2IsMEJBQUM7QUFBRCxDQUFDLEFBL0JELElBK0JDO0FBL0JZLDJCQUFtQixzQkErQi9CLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFByb2JhYmlsaXR5IH0gZnJvbSAnLi4vZGF0YS10eXBlL1Byb2JhYmlsaXR5JztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMvU3ViamVjdCc7XHJcblxyXG5sZXQgZGF0YTogUHJvYmFiaWxpdHlbXSA9IFtcclxuICAgIHsgbmFtZTogYGZpcnN0YCwgcHJvYmFiaWxpdHk6IDUwIH0sXHJcbiAgICB7IG5hbWU6IGBzZWNvbmRgLCBwcm9iYWJpbGl0eTogMjAgfVxyXG5dO1xyXG5cclxuLyoqXHJcbiAqIGNvbXBvc2UgdGhlIGRpc3RyaWJ1dGlvbiBmb3IgdGhlIHJhbmRvbSBnZW5lcmF0b3Igc2VydmljZS5cclxuICovXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERpc3RyaWJ1dGlvblNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBkYXRhQ2hhbmdlU291cmNlID0gbmV3IFN1YmplY3Q8UHJvYmFiaWxpdHk+KCk7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIGRhdGFDaGFuZ2VkT2JzZXJ2YWJsZSA9IHRoaXMuZGF0YUNoYW5nZVNvdXJjZS5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgICBnZXREaXN0cmlidXRpb24oKTogUHJvbWlzZTxQcm9iYWJpbGl0eVtdPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHJlc29sdmUoZGF0YSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRvdGFsV2VpZ2h0KCk6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gZGF0YS5yZWR1Y2UoKGEsIGIpID0+XHJcbiAgICAgICAgICAgIG5ldyBQcm9iYWJpbGl0eSgnJywgYS5wcm9iYWJpbGl0eSArIGIucHJvYmFiaWxpdHkpKVxyXG4gICAgICAgICAgICAucHJvYmFiaWxpdHkpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFByb2JhYmlsaXR5KHByb2JhYmlsaXR5OiBQcm9iYWJpbGl0eSk6IFByb21pc2U8UHJvYmFiaWxpdHk+IHtcclxuICAgICAgICBkYXRhLnB1c2gocHJvYmFiaWxpdHkpO1xyXG4gICAgICAgIHRoaXMuZGF0YUNoYW5nZVNvdXJjZS5uZXh0KHByb2JhYmlsaXR5KTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gcmVzb2x2ZShwcm9iYWJpbGl0eSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVByb2JhYmlsaXR5KHByb2JhYmlsaXR5OiBQcm9iYWJpbGl0eSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGxldCBwcm9iYWJpbGl0eUluZGV4ID0gZGF0YS5maW5kSW5kZXgoXHJcbiAgICAgICAgICAgIHZhbHVlID0+IHZhbHVlLm5hbWUgPT09IHByb2JhYmlsaXR5Lm5hbWUpO1xyXG4gICAgICAgIGlmIChwcm9iYWJpbGl0eUluZGV4ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgZGF0YS5zcGxpY2UocHJvYmFiaWxpdHlJbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZGF0YUNoYW5nZVNvdXJjZS5uZXh0KG5ldyBQcm9iYWJpbGl0eSgnJywgMCkpO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7IH0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==