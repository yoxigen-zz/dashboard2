///<reference path="../../node_modules/angular2/http.d.ts"/>
'use strict';
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
var router_1 = require('angular2/router');
var http_1 = require('angular2/http');
var DashboardPageComponent_1 = require("./components/DashboardPageComponent");
var all_widgets_1 = require("./dashboard/widgets/all_widgets");
var dashboard_1 = require("./dashboard/dashboard");
var AppComponent = (function () {
    function AppComponent(dashboardsService) {
        var app = this;
        dashboardsService.getDashboards().then(function (dashboards) {
            app.allDashboards = dashboards;
        });
    }
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            directives: [angular2_1.NgFor, router_1.ROUTER_DIRECTIVES],
            template: "\n    \t<nav class=\"main-nav\">\n\t\t\t<a *ng-for=\"#dashboard of allDashboards\"\n\t\t\t[router-link]=\"['DashboardPage',{ dashboardId: dashboard.id }]\">{{dashboard.title}}</a>\n    \t</nav>\n        <router-outlet></router-outlet>\n    "
        }),
        router_1.RouteConfig([
            { path: '/', redirectTo: ["DashboardPage", { dashboardId: "main" }] },
            { path: '/d/:dashboardId', component: DashboardPageComponent_1.DashboardPageComponent, name: "DashboardPage" }
        ]), 
        __metadata('design:paramtypes', [dashboard_1.DashboardsService])
    ], AppComponent);
    return AppComponent;
})();
angular2_1.bootstrap(AppComponent, [
    http_1.HTTP_PROVIDERS,
    dashboard_1.DashboardsService,
    dashboard_1.DashboardFactory,
    dashboard_1.WidgetFactory,
    dashboard_1.WidgetsService,
    router_1.ROUTER_PROVIDERS,
    all_widgets_1.UsersWidget, all_widgets_1.UserTypesWidget,
    angular2_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })
]);
//# sourceMappingURL=app.js.map