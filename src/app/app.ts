///<reference path="../../node_modules/angular2/http.d.ts"/>

'use strict';

import {bootstrap, Component, NgIf, NgFor, provide} from 'angular2/angular2';
import {RouteConfig, ROUTER_PROVIDERS, ROUTER_DIRECTIVES, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

import {DashboardModel, DashboardModelConfig} from './dashboard/models/DashboardModel';

import {Utils} from './services/utils';
import {DashboardPageComponent} from "./components/DashboardPageComponent";
import {UsersWidget, UserTypesWidget} from "./dashboard/widgets/all_widgets";
import {DashboardsService, DashboardFactory, WidgetFactory, WidgetsService} from "./dashboard/dashboard";

@Component({
    selector: 'my-app',
    directives: [NgFor, ROUTER_DIRECTIVES],
    template: `
    	<nav class="main-nav">
			<a *ng-for="#dashboard of allDashboards"
			[router-link]="['DashboardPage',{ dashboardId: dashboard.id }]">{{dashboard.title}}</a>
    	</nav>
        <router-outlet></router-outlet>
    `
})
@RouteConfig([
	{ path: '/', redirectTo: ["DashboardPage", { dashboardId: "main" }] },
	{ path: '/d/:dashboardId', component: DashboardPageComponent, name: "DashboardPage" }
])
class AppComponent{
	allDashboards:DashboardModel[];

	constructor(dashboardsService:DashboardsService){
		var app = this;

		dashboardsService.getDashboards().then(function(dashboards){
			app.allDashboards = dashboards;
		});
	}
}
bootstrap(AppComponent, [
	HTTP_PROVIDERS,
	DashboardsService,
	DashboardFactory,
	WidgetFactory,
	WidgetsService,
	ROUTER_PROVIDERS,
	UsersWidget, UserTypesWidget,
	provide(LocationStrategy, { useClass: HashLocationStrategy })
]);