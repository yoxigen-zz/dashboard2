import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import {WidgetModel, WidgetModelConfig} from "../models/WidgetModel";

@Injectable()
export class WidgetFactory{
	http:Http;

	constructor(http:Http){
		this.http = http;
	}

	public createWidget(widgetConfig:WidgetModelConfig){
		return new WidgetModel(widgetConfig, this.http);
	}
}