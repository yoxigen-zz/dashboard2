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
var WidgetModel_1 = require('../models/WidgetModel');
var WidgetViewComponent_1 = require("./WidgetViewComponent");
var WidgetComponent = (function () {
    function WidgetComponent() {
    }
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', WidgetModel_1.WidgetModel)
    ], WidgetComponent.prototype, "widget", void 0);
    WidgetComponent = __decorate([
        angular2_1.Component({
            selector: "widget",
            directives: [angular2_1.NgFor, WidgetViewComponent_1.WidgetViewComponent],
            template: "\n        <div class=\"widget\">\n        \t<div class=\"widget-contents\">\n        \t\t<header class=\"widget-contents-header\">\n\t\t\t\t\t<h2>{{widget.title}}</h2>\n\t\t\t\t\t<small>Last updated: {{widget.lastUpdateTime | date:'medium'}}</small>\n        \t\t</header>\n        \t\t<div class=\"widget-contents-body\">\n        \t\t\t<widget-view *ng-for=\"#view of widget.views\" [view]=\"view\" [data]=\"widget.data\"></widget-view>\n        \t\t</div>\n\t\t\t</div>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], WidgetComponent);
    return WidgetComponent;
})();
exports.WidgetComponent = WidgetComponent;
//# sourceMappingURL=WidgetComponent.js.map