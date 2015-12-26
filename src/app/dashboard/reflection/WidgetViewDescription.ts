import {DataSourceModel} from "../models/DataSourceModel";
export interface WidgetViewDescription{
	id:string;
	name:string;
	selector:string;
	getSettings: (dataSource:DataSourceModel) => Object;
}