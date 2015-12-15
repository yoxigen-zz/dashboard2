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
var http_1 = require('angular2/http');
var DashboardFactory_1 = require("./DashboardFactory");
var utils_1 = require("../../services/utils");
var UsersWidget_1 = require("../widgets/UsersWidget");
var UserTypesWidget_1 = require("../widgets/UserTypesWidget");
var DashboardsService = (function () {
    function DashboardsService(http, dashboardFactory, usersWidget, userTypesWidget) {
        this.http = http;
        this.dashboardFactory = dashboardFactory;
    }
    /**
     * Gets an array of available dashboards
     */
    DashboardsService.prototype.getDashboards = function () {
        var _this = this;
        var deferred = new Promise(function (resolve, reject) {
            if (_this.allDashboards)
                resolve(_this.allDashboards);
            else {
                _this.http.get("mock_data/dashboards.json").subscribe(function (res) {
                    _this.allDashboards = res.json().map(function (dashboardConfig) {
                        return _this.dashboardFactory.createDashboard(dashboardConfig);
                    });
                    _this.dashboardsMap = utils_1.Utils.Arrays.toMap(_this.allDashboards);
                    resolve(_this.allDashboards);
                });
            }
        });
        return deferred;
    };
    DashboardsService.prototype.getDashboardById = function (dashboardId) {
        var _this = this;
        return this.getDashboards().then(function (_) {
            return _this.dashboardsMap.get(dashboardId);
        });
    };
    DashboardsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, DashboardFactory_1.DashboardFactory, UsersWidget_1.UsersWidget, UserTypesWidget_1.UserTypesWidget])
    ], DashboardsService);
    return DashboardsService;
})();
exports.DashboardsService = DashboardsService;
//# sourceMappingURL=DashboardsService.js.map