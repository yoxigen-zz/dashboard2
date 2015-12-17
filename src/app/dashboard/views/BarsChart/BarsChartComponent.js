///<reference path="../../../typings/c3.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("angular2/core");
var BarComponent_1 = require("./BarComponent");
var BarsChartService_1 = require("./BarsChartService");
var BarsChartComponent = (function () {
    function BarsChartComponent(elementRef, barsChartService) {
        this.OUTTER_VALUE_CLASS = "outter-value";
        this.minValue = 0;
        this.elementRef = elementRef;
        this.options = barsChartService.parseOptions(this.settings);
        this.barsChartService = barsChartService;
    }
    BarsChartComponent.prototype.ngOnChanges = function (changes) {
        if (changes.settings)
            this.options = this.barsChartService.parseOptions(this.settings);
        if (this.data) {
            Object.assign(this, this.barsChartService.parseBarsData(this.data, this.options));
        }
    };
    BarsChartComponent.prototype.renderChart = function () {
        var barsListEl = this.elementRef.nativeElement.querySelector("ul"), elementWidth = barsListEl.clientWidth;
        var largestSize = this.maxValue - this.minValue;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], BarsChartComponent.prototype, "settings", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], BarsChartComponent.prototype, "data", void 0);
    BarsChartComponent = __decorate([
        core_1.Component({
            selector: "bars-chart",
            directives: [BarComponent_1.BarComponent],
            template: "\n\t\t<div class=\"bars-chart\">\n\t\t\t<ul>\n\t\t\t\t<li *ngFor=\"#item of data\">\n\t\t\t\t\t<bar [data]=\"item\"></bar>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t\t<ul class=\"bars-chart-legend\" *ngIf=\"settings.legend\">\n\t\t\t\t<li *ngFor=\"#legendItem of settings.legend\">\n\t\t\t\t\t<i class=\"material-icons\" [style]=\"{color: legendItem.color }\">stop</i> {{legendItem.name}}\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, BarsChartService_1.BarsChartService])
    ], BarsChartComponent);
    return BarsChartComponent;
})();
exports.BarsChartComponent = BarsChartComponent;
//# sourceMappingURL=BarsChartComponent.js.map