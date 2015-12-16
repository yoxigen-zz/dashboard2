var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var DashboardModel_1 = require('../models/DashboardModel');
var WidgetComponent_1 = require('./WidgetComponent');
var common_1 = require("angular2/common");
var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnChanges = function (changes) {
        if (changes.dashboard) {
            this.dashboard.refresh();
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', DashboardModel_1.DashboardModel)
    ], DashboardComponent.prototype, "dashboard", void 0);
    DashboardComponent = __decorate([
        core_1.Component({
            selector: "dashboard",
            template: "\n    \t<div class=\"dashboard\">\n\t\t\t<header class=\"dashboard-header\">\n\t\t\t\t<div class=\"pull-right\">\n\t\t\t\t\t<button (click)=\"dashboard.refresh()\" [disabled]=\"dashboard.disabled\">Refresh</button>\n\t\t\t\t</div>\n\t\t\t\t<h1 class=\"dashboard-title\">{{dashboard.title}}</h1>\n\t\t\t</header>\n\t\t\t<widget *ngFor=\"#widget of dashboard.widgets\" [widget]=\"widget\"></widget>\n        </div>\n    ",
            directives: [common_1.NgFor, WidgetComponent_1.WidgetComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardComponent);
    return DashboardComponent;
})();
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=DashboardComponent.js.map