import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {DashboardModel} from './dashboard/models/DashboardModel';
import {DashboardPageComponent} from "./components/DashboardPageComponent";
import {DashboardsService} from "./dashboard/dashboard";

@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    template: `
    	<nav class="main-nav">
			<a *ngFor="#dashboard of allDashboards" [routerLink]="['DashboardPage',{ dashboardId: dashboard.id }]">{{dashboard.title}}</a>
    	</nav>
        <router-outlet></router-outlet>
    `
})
@RouteConfig([
	{ path: '/', redirectTo: ["DashboardPage", { dashboardId: "main" }] },
	{ path: '/d/:dashboardId', component: DashboardPageComponent, name: "DashboardPage" }
])
export class AppComponent{
	allDashboards:DashboardModel[];

	constructor(dashboardsService:DashboardsService){
		var app = this;

		dashboardsService.getDashboards().then(function(dashboards){
			app.allDashboards = dashboards;
		});
	}
}
