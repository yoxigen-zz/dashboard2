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
var DashboardsService_1 = require("../dashboard/services/DashboardsService");
var DashboardComponent_1 = require("../dashboard/components/DashboardComponent");
var common_1 = require("angular2/common");
var router_1 = require("angular2/router");
'use strict';
var DashboardPageComponent = (function () {
    function DashboardPageComponent(dashboardsService, params) {
        var _this = this;
        var app = this;
        dashboardsService.getDashboards().then(function (dashboards) {
            app.allDashboards = dashboards;
        });
        this.dashboardId = params.get('dashboardId');
        dashboardsService.getDashboardById(this.dashboardId).then(function (dashboard) {
            _this.currentDashboard = dashboard;
        });
    }
    DashboardPageComponent.prototype.setDashboard = function (dashboard) {
        this.currentDashboard = dashboard;
    };
    DashboardPageComponent.prototype.ngOnChanges = function (changes) {
        console.log("changes: ", changes);
    };
    DashboardPageComponent = __decorate([
        core_1.Component({
            selector: "dashboard-page",
            directives: [DashboardComponent_1.DashboardComponent, common_1.NgIf],
            template: "\n\t\t<dashboard [dashboard]=\"currentDashboard\" *ng-if=\"currentDashboard\"></dashboard>\n\t"
        }), 
        __metadata('design:paramtypes', [DashboardsService_1.DashboardsService, router_1.RouteParams])
    ], DashboardPageComponent);
    return DashboardPageComponent;
})();
exports.DashboardPageComponent = DashboardPageComponent;
//# sourceMappingURL=DashboardPageComponent.js.map