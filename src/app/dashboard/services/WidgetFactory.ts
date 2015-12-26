import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import {WidgetModel, WidgetModelConfig} from "../models/WidgetModel";
import {DataSources} from "./DataSources";

@Injectable()
export class WidgetFactory{
	constructor(private http:Http, private dataSources:DataSources){
	}

	public createWidget(widgetConfig?:WidgetModelConfig):WidgetModel{
		return new WidgetModel(this.http, this.dataSources, widgetConfig);
	}
}