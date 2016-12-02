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
//# sourceMappingURL=random.service.js.map