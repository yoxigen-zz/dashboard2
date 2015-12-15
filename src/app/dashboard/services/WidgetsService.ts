import {WidgetModel} from "../models/WidgetModel";
import {Injectable} from "angular2/core";
import {WidgetModelConfig} from "../models/WidgetModel";
import {WidgetFactory} from "./WidgetFactory";

@Injectable()
export class WidgetsService{
	widgets:Map<string, WidgetModel> = new Map<string, WidgetModel>();
	widgetFactory:WidgetFactory;

	constructor(widgetFactory:WidgetFactory){
		this.widgetFactory = widgetFactory;
	}

	public registerWidget(widgetConfig:WidgetModelConfig):WidgetModel{
		var model = this.widgetFactory.createWidget(widgetConfig);

		if (this.widgets.has(widgetConfig.id))
			throw new Error("Widget with ID '" + widgetConfig.id + "' already exists.");

		this.widgets.set(widgetConfig.id, model);

		return model;
	}

	public getWidgetById(widgetId:string):WidgetModel{
		return this.widgets.get(widgetId);
	}
}