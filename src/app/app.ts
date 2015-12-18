import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {DashboardPageComponent} from "./components/DashboardPageComponent";
import {AppNavComponent} from "./components/AppNavComponent";

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
	{ path: '/d/:dashboardId', component: DashboardPageComponent, name: "DashboardPage" }
])
export class AppComponent{

}
