import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {DashboardModel, DashboardModelConfig} from '../models/DashboardModel';
import {DashboardFactory} from "./DashboardFactory";
import {Utils} from "./utils";

@Injectable()
export class DashboardsService{
    private http:Http;
	private dashboardFactory:DashboardFactory;
	private dashboardsMap:Map<string, DashboardModel>;
	private isGettingDashboards:boolean = false;
	private onDashboards:Array<(dashboards:DashboardModel[]) => void> = [];

	allDashboards:DashboardModel[];

	constructor(http:Http, dashboardFactory:DashboardFactory){
        this.http = http;
		this.dashboardFactory = dashboardFactory;
    }

	/**
	 * Gets an array of available dashboards
	 */
    public getDashboards():Promise<DashboardModel[]>{
		var deferred:Promise<DashboardModel[]> = new Promise((resolve, reject) => {
			if (this.allDashboards) // TODO: If currently fetching, add a function to resolve here
				resolve(this.allDashboards);
			else {
				if (this.isGettingDashboards){
					this.onDashboards.push((dashboards:DashboardModel[]):void => {
						resolve(dashboards);
					});
				}
				else {
					this.isGettingDashboards = true;

					this.http.get("mock_data/dashboards.json").subscribe((res:Response) => {
						this.allDashboards = (<{}[]>res.json()).map((dashboardConfig:DashboardModelConfig) => {
							return this.dashboardFactory.createDashboard(dashboardConfig);
						});

						this.dashboardsMap = Utils.Arrays.toMap(this.allDashboards);

						resolve(this.allDashboards);
						this.isGettingDashboards = false;
						this.onDashboards.forEach((onDashboards:(dashboards:DashboardModel[]) => void) => {
							onDashboards(this.allDashboards);
						});
					});
				}
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