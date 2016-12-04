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
var probability_1 = require('../data-type/probability');
var add = function (first, second) {
    return new probability_1.Probability(second.name, first.probability + second.probability);
};
function toCumulativeDistribution(distribution) {
    return distribution
        .map(function (value, id, array) { return array.slice(0, id + 1); })
        .map(function (value) { return value.reduce(add); });
}
function getLocationOnDistribution(cumulativeDistribution, target) {
    return cumulativeDistribution
        .filter(function (value, index, array) {
        return value.probability >=
            array[array.length - 1]
                .probability * target;
    })[0];
}
/**
 * Random number service to generate random numbers;
 */
var RandomService = (function () {
    function RandomService() {
    }
    /**
     * given a probability distribution, uniformly select a
     * single probability.
     */
    RandomService.prototype.decide = function (distribution) {
        if (!distribution || distribution.length === 0) {
            return new Promise(function (resolve, reject) { return reject(); });
        }
        var random = Math.random();
        var cumulativeDistribution = toCumulativeDistribution(distribution);
        var location = getLocationOnDistribution(cumulativeDistribution, random);
        var decision = distribution.find(function (value) { return value.name === location.name; });
        return new Promise(function (resolve, reject) { return resolve(decision); });
    };
    /**
     * Generate a number between [0, limit].
     * //TODO: does this need to be all values.
     */
    RandomService.prototype.generateNumber = function (limit) {
        var generatedStub = Math.floor((Math.random() * limit));
        return new Promise(function (resolve, reject) { return resolve(generatedStub); });
    };
    RandomService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], RandomService);
    return RandomService;
}());
exports.RandomService = RandomService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZG9tLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyYW5kb20uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLDRCQUE0QiwwQkFBMEIsQ0FBQyxDQUFBO0FBRXZELElBQU0sR0FBRyxHQUFHLFVBQUMsS0FBa0IsRUFBRSxNQUFtQjtJQUNoRCxPQUFBLElBQUkseUJBQVcsQ0FDWCxNQUFNLENBQUMsSUFBSSxFQUNYLEtBQUssQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztBQUYzQyxDQUUyQyxDQUFDO0FBRWhELGtDQUNJLFlBQTJCO0lBQzNCLE1BQU0sQ0FBQyxZQUFZO1NBQ2QsR0FBRyxDQUFDLFVBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLElBQUssT0FBQSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQXRCLENBQXNCLENBQUM7U0FDakQsR0FBRyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBakIsQ0FBaUIsQ0FBQyxDQUFDO0FBQ3pDLENBQUM7QUFFRCxtQ0FDSSxzQkFBcUMsRUFDckMsTUFBYztJQUVkLE1BQU0sQ0FBQyxzQkFBc0I7U0FDeEIsTUFBTSxDQUNQLFVBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLO1FBQ2hCLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVztZQUNwQixLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7aUJBQ2xCLFdBQVcsR0FBRyxNQUFNLENBQUM7SUFDbEMsQ0FBQyxDQUFDLENBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDUixDQUFDO0FBRUQ7O0dBRUc7QUFFSDtJQUVJO0lBQWdCLENBQUM7SUFFakI7OztPQUdHO0lBQ0gsOEJBQU0sR0FBTixVQUFPLFlBQTJCO1FBQzlCLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxJQUFJLFlBQVksQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTSxJQUFLLE9BQUEsTUFBTSxFQUFFLEVBQVIsQ0FBUSxDQUFDLENBQUM7UUFDdEQsQ0FBQztRQUNELElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMzQixJQUFJLHNCQUFzQixHQUFHLHdCQUF3QixDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRXBFLElBQUksUUFBUSxHQUFHLHlCQUF5QixDQUNwQyxzQkFBc0IsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUVwQyxJQUFJLFFBQVEsR0FBRyxZQUFZLENBQUMsSUFBSSxDQUM1QixVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUFDLElBQUksRUFBNUIsQ0FBNEIsQ0FBQyxDQUFDO1FBQzNDLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNLElBQUssT0FBQSxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsc0NBQWMsR0FBZCxVQUFlLEtBQWE7UUFDeEIsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3hELE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNLElBQUssT0FBQSxPQUFPLENBQUMsYUFBYSxDQUFDLEVBQXRCLENBQXNCLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBL0JMO1FBQUMsaUJBQVUsRUFBRTs7cUJBQUE7SUFrQ2Isb0JBQUM7QUFBRCxDQUFDLEFBakNELElBaUNDO0FBakNZLHFCQUFhLGdCQWlDekIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUHJvYmFiaWxpdHkgfSBmcm9tICcuLi9kYXRhLXR5cGUvcHJvYmFiaWxpdHknO1xyXG5cclxuY29uc3QgYWRkID0gKGZpcnN0OiBQcm9iYWJpbGl0eSwgc2Vjb25kOiBQcm9iYWJpbGl0eSkgPT5cclxuICAgIG5ldyBQcm9iYWJpbGl0eShcclxuICAgICAgICBzZWNvbmQubmFtZSxcclxuICAgICAgICBmaXJzdC5wcm9iYWJpbGl0eSArIHNlY29uZC5wcm9iYWJpbGl0eSk7XHJcblxyXG5mdW5jdGlvbiB0b0N1bXVsYXRpdmVEaXN0cmlidXRpb24oXHJcbiAgICBkaXN0cmlidXRpb246IFByb2JhYmlsaXR5W10pOiBQcm9iYWJpbGl0eVtdIHtcclxuICAgIHJldHVybiBkaXN0cmlidXRpb25cclxuICAgICAgICAubWFwKCh2YWx1ZSwgaWQsIGFycmF5KSA9PiBhcnJheS5zbGljZSgwLCBpZCArIDEpKVxyXG4gICAgICAgIC5tYXAodmFsdWUgPT4gdmFsdWUucmVkdWNlKGFkZCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRMb2NhdGlvbk9uRGlzdHJpYnV0aW9uKFxyXG4gICAgY3VtdWxhdGl2ZURpc3RyaWJ1dGlvbjogUHJvYmFiaWxpdHlbXSxcclxuICAgIHRhcmdldDogbnVtYmVyKTogUHJvYmFiaWxpdHkge1xyXG5cclxuICAgIHJldHVybiBjdW11bGF0aXZlRGlzdHJpYnV0aW9uXHJcbiAgICAgICAgLmZpbHRlcihcclxuICAgICAgICAodmFsdWUsIGluZGV4LCBhcnJheSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUucHJvYmFiaWxpdHkgPj1cclxuICAgICAgICAgICAgICAgIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdXHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2JhYmlsaXR5ICogdGFyZ2V0O1xyXG4gICAgICAgIH0pXHJcbiAgICBbMF07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSYW5kb20gbnVtYmVyIHNlcnZpY2UgdG8gZ2VuZXJhdGUgcmFuZG9tIG51bWJlcnM7XHJcbiAqL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBSYW5kb21TZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZ2l2ZW4gYSBwcm9iYWJpbGl0eSBkaXN0cmlidXRpb24sIHVuaWZvcm1seSBzZWxlY3QgYVxyXG4gICAgICogc2luZ2xlIHByb2JhYmlsaXR5LlxyXG4gICAgICovXHJcbiAgICBkZWNpZGUoZGlzdHJpYnV0aW9uOiBQcm9iYWJpbGl0eVtdKTogUHJvbWlzZTxQcm9iYWJpbGl0eT4ge1xyXG4gICAgICAgIGlmICghZGlzdHJpYnV0aW9uIHx8IGRpc3RyaWJ1dGlvbi5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHJlamVjdCgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJhbmRvbSA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgbGV0IGN1bXVsYXRpdmVEaXN0cmlidXRpb24gPSB0b0N1bXVsYXRpdmVEaXN0cmlidXRpb24oZGlzdHJpYnV0aW9uKTtcclxuXHJcbiAgICAgICAgbGV0IGxvY2F0aW9uID0gZ2V0TG9jYXRpb25PbkRpc3RyaWJ1dGlvbihcclxuICAgICAgICAgICAgY3VtdWxhdGl2ZURpc3RyaWJ1dGlvbiwgcmFuZG9tKTtcclxuXHJcbiAgICAgICAgbGV0IGRlY2lzaW9uID0gZGlzdHJpYnV0aW9uLmZpbmQoXHJcbiAgICAgICAgICAgIHZhbHVlID0+IHZhbHVlLm5hbWUgPT09IGxvY2F0aW9uLm5hbWUpO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiByZXNvbHZlKGRlY2lzaW9uKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZW5lcmF0ZSBhIG51bWJlciBiZXR3ZWVuIFswLCBsaW1pdF0uXHJcbiAgICAgKiAvL1RPRE86IGRvZXMgdGhpcyBuZWVkIHRvIGJlIGFsbCB2YWx1ZXMuIFxyXG4gICAgICovXHJcbiAgICBnZW5lcmF0ZU51bWJlcihsaW1pdDogbnVtYmVyKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgICAgICBsZXQgZ2VuZXJhdGVkU3R1YiA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiBsaW1pdCkpO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiByZXNvbHZlKGdlbmVyYXRlZFN0dWIpKTtcclxuICAgIH1cclxuXHJcblxyXG59XHJcbiJdfQ==