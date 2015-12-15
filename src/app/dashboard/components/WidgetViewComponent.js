var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var WidgetViewTypeModel_1 = require("../models/WidgetViewTypeModel");
var views_1 = require("./views/views");
var WidgetViewComponent = (function () {
    function WidgetViewComponent() {
    }
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', WidgetViewTypeModel_1.WidgetViewTypeModel)
    ], WidgetViewComponent.prototype, "view", void 0);
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', Object)
    ], WidgetViewComponent.prototype, "data", void 0);
    WidgetViewComponent = __decorate([
        angular2_1.Component({
            selector: "widget-view",
            inputs: ["data"],
            directives: [angular2_1.NgSwitch, angular2_1.NgSwitchWhen, views_1.PieChartComponent, views_1.TableViewComponent],
            template: "\n        <div class=\"widget-view\" [ng-switch]=\"view.type.id\">\n        \t<table-view *ngSwitchWhen=\"'table'\" [settings]=\"view.settings\" [data]=\"data\">Loading...</table-view>\n        \t<pie-chart *ngSwitchWhen=\"'pie'\" [settings]=\"view.settings\" [data]=\"data\">Loading pie...</pie-chart>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], WidgetViewComponent);
    return WidgetViewComponent;
})();
exports.WidgetViewComponent = WidgetViewComponent;
//# sourceMappingURL=WidgetViewComponent.js.map