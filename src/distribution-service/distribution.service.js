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
//# sourceMappingURL=distribution.service.js.map