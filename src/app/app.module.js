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
var platform_browser_1 = require('@angular/platform-browser');
var ng2_charts_1 = require('ng2-charts/ng2-charts');
var distribution_service_1 = require('../distribution-service/distribution.service');
var random_service_1 = require('../random-service/random.service');
var app_component_1 = require('../app/app.component');
var raw_component_1 = require('../raw/raw.component');
var list_component_1 = require('../list/list.component');
var graph_component_1 = require('../graph/graph.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                ng2_charts_1.ChartsModule
            ],
            declarations: [
                app_component_1.AppComponent,
                raw_component_1.RawComponent,
                list_component_1.ListComponent,
                graph_component_1.GraphComponent,
            ],
            providers: [
                distribution_service_1.DistributionService,
                random_service_1.RandomService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map