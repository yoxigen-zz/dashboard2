import {Component, OnChanges} from "angular2/core";
import {DashboardModel} from "../dashboard/models/DashboardModel";
import {DashboardsService} from "../dashboard/services/DashboardsService";
import {DashboardComponent} from "../dashboard/components/DashboardComponent";
import {NgIf} from "angular2/common";
import {RouteParams} from "angular2/router";

'use strict';

@Component({
	selector: "dashboard-page",
	directives: [DashboardComponent, NgIf],
	template: `
		<dashboard [dashboard]="currentDashboard" *ng-if="currentDashboard"></dashboard>
	`
})
export class DashboardPageComponent implements OnChanges{
	currentDashboard:DashboardModel;
	allDashboards:DashboardModel[];
	dashboardId:string;

	constructor(dashboardsService:DashboardsService, params: RouteParams){
		var app = this;

		dashboardsService.getDashboards().then(function(dashboards){
			app.allDashboards = dashboards;
		});

		this.dashboardId = params.get('dashboardId');
		dashboardsService.getDashboardById(this.dashboardId).then(dashboard => {
			this.currentDashboard = dashboard;
		});
	}

	setDashboard(dashboard:DashboardModel){
		this.currentDashboard = dashboard;
	}

	ngOnChanges(changes){
		console.log("changes: ", changes);
	}
}