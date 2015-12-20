import {Injectable} from "angular2/core";
import {DashboardModel, DashboardModelConfig} from "../models/DashboardModel";
import {WidgetsService} from "./WidgetsService";

@Injectable()
export class DashboardFactory{

	constructor(private widgetsService:WidgetsService){
	}

	public createDashboard(dashboardConfig:DashboardModelConfig){
		return new DashboardModel(dashboardConfig, this.widgetsService);
	}
}