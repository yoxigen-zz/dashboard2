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
var PieChartComponent = (function () {
    function PieChartComponent(elementRef) {
        this.elementRef = elementRef;
    }
    PieChartComponent.prototype.ngOnChanges = function (changes) {
        if (changes.data) {
            if (this.chart) {
                this.chart.load({
                    columns: this.getChartColumns(this.data)
                });
            }
            else
                this.renderChart();
        }
    };
    PieChartComponent.prototype.renderChart = function () {
        if (this.data) {
            var chartOptions = {
                data: {
                    columns: this.getChartColumns(this.data),
                    type: "donut"
                },
                bindto: this.elementRef.nativeElement.querySelector(".chart"),
                size: {
                    height: 300
                }
            };
            this.chart = c3.generate(chartOptions);
        }
    };
    PieChartComponent.prototype.getChartColumns = function (data) {
        return data.map(function (item) {
            return [item.name, item.value];
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PieChartComponent.prototype, "settings", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PieChartComponent.prototype, "data", void 0);
    PieChartComponent = __decorate([
        core_1.Component({
            selector: "pie-chart",
            template: "\n\t\t<div class=\"chart\"></div>\n\t"
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], PieChartComponent);
    return PieChartComponent;
})();
exports.PieChartComponent = PieChartComponent;
//# sourceMappingURL=PieChartComponent.js.map