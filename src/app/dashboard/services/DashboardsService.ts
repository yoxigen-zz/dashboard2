import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {DashboardModel, DashboardModelConfig} from '../models/DashboardModel';
import {DashboardFactory} from "./DashboardFactory";
import {Utils} from "../../services/utils";
import {UsersWidget} from "../widgets/UsersWidget";
import {UserTypesWidget} from "../widgets/UserTypesWidget";

@Injectable()
export class DashboardsService{
    http:Http;
    allDashboards:DashboardModel[];
	dashboardFactory:DashboardFactory;
	dashboardsMap:Map<string, DashboardModel>;

    constructor(http:Http, dashboardFactory:DashboardFactory, usersWidget:UsersWidget, userTypesWidget:UserTypesWidget){
        this.http = http;
		this.dashboardFactory = dashboardFactory;
    }

	/**
	 * Gets an array of available dashboards
	 */
    public getDashboards():Promise<DashboardModel[]>{
		var deferred:Promise<DashboardModel[]> = new Promise((resolve, reject) => {
			if (this.allDashboards)
				resolve(this.allDashboards);
			else {
				this.http.get("mock_data/dashboards.json").subscribe((res:Response) => {
					this.allDashboards = (<{}[]>res.json()).map((dashboardConfig:DashboardModelConfig) => {
						return this.dashboardFactory.createDashboard(dashboardConfig);
					});

					this.dashboardsMap = Utils.Arrays.toMap(this.allDashboards);

					resolve(this.allDashboards);
				});
			}
		});

		return deferred;
    }

	public getDashboardById(dashboardId:string):Promise<DashboardModel>{
		return this.getDashboards().then(_ => {
			return this.dashboardsMap.get(dashboardId);
		});
	}
}