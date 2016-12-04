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
var random_service_1 = require('../random-service/random.service');
var RawComponent = (function () {
    function RawComponent(randomService) {
        this.randomService = randomService;
    }
    RawComponent.prototype.getRandom = function () {
        var _this = this;
        this.randomService
            .generateNumber(this.limit)
            .then(function (value) {
            _this.currentNumber = value;
            _this.showCurrentNumber = true;
        }, function (value) {
            _this.showCurrentNumber = false;
        })
            .catch(function (error) { return console.log('an error occured', error); });
    };
    RawComponent.prototype.ngOnInit = function () {
        // TODO: replace stub with valid limit. 
        this.limit = 10000;
    };
    RawComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'raw-view',
            templateUrl: 'raw.component.html'
        }), 
        __metadata('design:paramtypes', [random_service_1.RandomService])
    ], RawComponent);
    return RawComponent;
}());
exports.RawComponent = RawComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJhdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCwrQkFBOEIsa0NBQWtDLENBQUMsQ0FBQTtBQVdqRTtJQUtJLHNCQUNZLGFBQTRCO1FBQTVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBQ3BDLENBQUM7SUFFTCxnQ0FBUyxHQUFUO1FBQUEsaUJBWUM7UUFYRyxJQUFJLENBQUMsYUFBYTthQUNiLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2FBQzFCLElBQUksQ0FDTCxVQUFBLEtBQUs7WUFDRCxLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixLQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLENBQUMsRUFDRCxVQUFBLEtBQUs7WUFDRCxLQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQ25DLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLEVBQXRDLENBQXNDLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQsK0JBQVEsR0FBUjtRQUNJLHdDQUF3QztRQUN4QyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBbkNMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsb0JBQW9CO1NBQ3BDLENBQUM7O29CQUFBO0lBZ0NGLG1CQUFDO0FBQUQsQ0FBQyxBQTNCRCxJQTJCQztBQTNCWSxvQkFBWSxlQTJCeEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJhbmRvbVNlcnZpY2UgfSBmcm9tICcuLi9yYW5kb20tc2VydmljZS9yYW5kb20uc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ3Jhdy12aWV3JyxcclxuICAgIHRlbXBsYXRlVXJsOiAncmF3LmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5cclxuLyoqXHJcbiAqIERpc3BsYXlzIHRoZSByYXcgdmlldyBvZiB0aGUgcmFuZG9tIGRpc3RyaWJ1dGlvbi5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBSYXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHJpdmF0ZSBsaW1pdDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50TnVtYmVyOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHNob3dDdXJyZW50TnVtYmVyOiBib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcmFuZG9tU2VydmljZTogUmFuZG9tU2VydmljZVxyXG4gICAgKSB7IH1cclxuXHJcbiAgICBnZXRSYW5kb20oKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yYW5kb21TZXJ2aWNlXHJcbiAgICAgICAgICAgIC5nZW5lcmF0ZU51bWJlcih0aGlzLmxpbWl0KVxyXG4gICAgICAgICAgICAudGhlbihcclxuICAgICAgICAgICAgdmFsdWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TnVtYmVyID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dDdXJyZW50TnVtYmVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdmFsdWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Q3VycmVudE51bWJlciA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coJ2FuIGVycm9yIG9jY3VyZWQnLCBlcnJvcikpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIC8vIFRPRE86IHJlcGxhY2Ugc3R1YiB3aXRoIHZhbGlkIGxpbWl0LiBcclxuICAgICAgICB0aGlzLmxpbWl0ID0gMTAwMDA7XHJcbiAgICB9XHJcbn1cclxuIl19