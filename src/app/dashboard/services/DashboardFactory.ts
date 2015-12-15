import {Injectable} from "angular2/core";
import {DashboardModel, DashboardModelConfig} from "../models/DashboardModel";
import {WidgetsService} from "./WidgetsService";

@Injectable()
export class DashboardFactory{
	widgetsService:WidgetsService;

	constructor(widgetsService:WidgetsService){
		this.widgetsService = widgetsService;
	}

	public createDashboard(dashboardConfig:DashboardModelConfig){
		return new DashboardModel(dashboardConfig, this.widgetsService);
	}
}