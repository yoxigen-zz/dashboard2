import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {DashboardPageComponent} from "./components/DashboardPageComponent";
import {AppNavComponent} from "./components/AppNavComponent";
import {WidgetBuilderPage} from "./components/WidgetBuilderPage";

@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES, AppNavComponent],
    template: `
    	<app-nav></app-nav>
        <router-outlet></router-outlet>
    `
})
@RouteConfig([
	{ path: '/', redirectTo: ["DashboardPage", { dashboardId: "main" }] },
	{ path: '/d/:dashboardId', component: DashboardPageComponent, name: "DashboardPage" },
	{ path: '/builder', component: WidgetBuilderPage, name: "WidgetBuilderPage" }
])
export class AppComponent{

}
