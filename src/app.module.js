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
var distribution_service_1 = require('./distribution-service/distribution.service');
var random_service_1 = require('./random-service/random.service');
var app_component_1 = require('./app/app.component');
var raw_component_1 = require('./raw/raw.component');
var list_component_1 = require('./list/list.component');
var graph_component_1 = require('./graph/graph.component');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6QyxpQ0FBOEIsMkJBQTJCLENBQUMsQ0FBQTtBQUMxRCwyQkFBNkIsdUJBQXVCLENBQUMsQ0FBQTtBQUVyRCxxQ0FBb0MsNkNBQTZDLENBQUMsQ0FBQTtBQUNsRiwrQkFBOEIsaUNBQWlDLENBQUMsQ0FBQTtBQUVoRSw4QkFBNkIscUJBQXFCLENBQUMsQ0FBQTtBQUNuRCw4QkFBNkIscUJBQXFCLENBQUMsQ0FBQTtBQUNuRCwrQkFBOEIsdUJBQXVCLENBQUMsQ0FBQTtBQUN0RCxnQ0FBK0IseUJBQXlCLENBQUMsQ0FBQTtBQXFCekQ7SUFBQTtJQUF5QixDQUFDO0lBbEIxQjtRQUFDLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxnQ0FBYTtnQkFDYix5QkFBWTthQUNYO1lBQ0gsWUFBWSxFQUFFO2dCQUNaLDRCQUFZO2dCQUNaLDRCQUFZO2dCQUNaLDhCQUFhO2dCQUNiLGdDQUFjO2FBQ2Y7WUFDRCxTQUFTLEVBQUU7Z0JBQ1QsMENBQW1CO2dCQUNuQiw4QkFBYTthQUNkO1lBQ0QsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztTQUMxQixDQUFDOztpQkFBQTtJQUV1QixnQkFBQztBQUFELENBQUMsQUFBMUIsSUFBMEI7QUFBYixpQkFBUyxZQUFJLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IENoYXJ0c01vZHVsZSB9IGZyb20gJ25nMi1jaGFydHMvbmcyLWNoYXJ0cyc7XHJcblxyXG5pbXBvcnQgeyBEaXN0cmlidXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9kaXN0cmlidXRpb24tc2VydmljZS9kaXN0cmlidXRpb24uc2VydmljZSc7IFxyXG5pbXBvcnQgeyBSYW5kb21TZXJ2aWNlIH0gZnJvbSAnLi9yYW5kb20tc2VydmljZS9yYW5kb20uc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC9hcHAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUmF3Q29tcG9uZW50IH0gZnJvbSAnLi9yYXcvcmF3LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExpc3RDb21wb25lbnQgfSBmcm9tICcuL2xpc3QvbGlzdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBHcmFwaENvbXBvbmVudCB9IGZyb20gJy4vZ3JhcGgvZ3JhcGguY29tcG9uZW50JztcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIEJyb3dzZXJNb2R1bGUsXHJcbiAgICBDaGFydHNNb2R1bGVcclxuICAgIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBBcHBDb21wb25lbnQsXHJcbiAgICBSYXdDb21wb25lbnQsXHJcbiAgICBMaXN0Q29tcG9uZW50LFxyXG4gICAgR3JhcGhDb21wb25lbnQsXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIERpc3RyaWJ1dGlvblNlcnZpY2UsXHJcbiAgICBSYW5kb21TZXJ2aWNlXHJcbiAgXSxcclxuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxyXG4iXX0=