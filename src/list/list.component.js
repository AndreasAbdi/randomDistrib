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
//# sourceMappingURL=list.component.js.map