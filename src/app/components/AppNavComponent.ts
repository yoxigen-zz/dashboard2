import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {DashboardsService} from "../dashboard/services/DashboardsService";
import {DashboardModel} from "../dashboard/models/DashboardModel";
import {ResolvedInstruction} from "angular2/src/router/instruction";

@Component({
	selector: "app-nav",
	directives: [ROUTER_DIRECTIVES],
	template: `
		<nav class="main-nav">
			<a *ngFor="#dashboard of allDashboards" [routerLink]="['DashboardPage',{ dashboardId: dashboard.id }]">{{dashboard.title}}</a>
			<a [routerLink]="['WidgetBuilderPage']">Widget Builder</a>
    	</nav>
	`
})
export class AppNavComponent{
	allDashboards:DashboardModel[];

	constructor(dashboardsService:DashboardsService){
		var app = this;

		dashboardsService.getDashboards().then(function(dashboards){
			app.allDashboards = dashboards;
		});

	}
}