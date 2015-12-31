///<reference path="../../typings/c3.d.ts" />
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
var ViewSettingsDecorators_1 = require("../reflection/ViewSettingsDecorators");
var PropertyType_1 = require("../reflection/PropertyType");
var ViewSettingsDecorators_2 = require("../reflection/ViewSettingsDecorators");
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
        var nameProperty = this.settings.nameProperty || "name", valueProperty = this.settings.valueProperty || "value";
        return data.map(function (item) {
            return [item[nameProperty], item[valueProperty]];
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', PieChartComponentSettings)
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
var PieChartComponentSettings = (function () {
    function PieChartComponentSettings() {
    }
    __decorate([
        ViewSettingsDecorators_1.WidgetViewSetting({ name: "Name Property", type: PropertyType_1.PropertyType.String, fromDataSource: true }), 
        __metadata('design:type', String)
    ], PieChartComponentSettings.prototype, "nameProperty", void 0);
    __decorate([
        ViewSettingsDecorators_1.WidgetViewSetting({ name: "Value Property", type: PropertyType_1.PropertyType.String, fromDataSource: true }), 
        __metadata('design:type', String)
    ], PieChartComponentSettings.prototype, "valueProperty", void 0);
    PieChartComponentSettings = __decorate([
        ViewSettingsDecorators_2.WidgetViewSettings({
            name: "Pie Chart",
            selector: "pie-chart",
            id: "pie",
            getSettings: function (dataSource) {
                var name = dataSource.getFirstPropertyOfType(PropertyType_1.PropertyType.String), value = dataSource.getFirstPropertyOfType(PropertyType_1.PropertyType.Number);
                var settings = {
                    nameProperty: name && name.name,
                    valueProperty: value && value.name
                };
                return settings;
            }
        }), 
        __metadata('design:paramtypes', [])
    ], PieChartComponentSettings);
    return PieChartComponentSettings;
})();
//# sourceMappingURL=PieChartComponent.js.map