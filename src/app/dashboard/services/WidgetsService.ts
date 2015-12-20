import {WidgetModel} from "../models/WidgetModel";
import {Injectable} from "angular2/core";
import {WidgetModelConfig} from "../models/WidgetModel";
import {WidgetFactory} from "./WidgetFactory";
import {Http} from "angular2/http";
import {Response} from "angular2/http";

@Injectable()
export class WidgetsService{
	widgets:Map<string, WidgetModel> = new Map<string, WidgetModel>();

	constructor(private widgetFactory:WidgetFactory, private http:Http){
	}

	public registerWidget(widgetConfig:WidgetModelConfig):WidgetModel{
		var model = this.widgetFactory.createWidget(widgetConfig);

		if (this.widgets.has(widgetConfig.id))
			throw new Error("Widget with ID '" + widgetConfig.id + "' already exists.");

		this.widgets.set(widgetConfig.id, model);

		return model;
	}

	public getWidgetById(widgetId:string):Promise<WidgetModel>{
		var widget = this.widgets.get(widgetId);
		if (widget)
			return Promise.resolve(widget);

		var deferred:Promise<WidgetModel> = new Promise((resolve, reject) => {
			this.http.get("mock_data/widgets/" + widgetId + ".json").subscribe((res:Response) => {
				var widgetConfig:WidgetModelConfig = <WidgetModelConfig>res.json();
				resolve(this.registerWidget(widgetConfig));
			});
		});

		return deferred;
	}
}