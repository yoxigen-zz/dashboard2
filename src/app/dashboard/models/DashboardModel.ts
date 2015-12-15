import {WidgetModel, WidgetModelConfig} from './WidgetModel';
import {WidgetFactory} from "../services/WidgetFactory";
import {DashboardWidgetConfig} from "./WidgetModel";
import {WidgetsService} from "../services/WidgetsService";

export class DashboardModel{
    public id:string;
    public title:string;
    public widgets:Array<WidgetModel>;
    public disabled:boolean = false;

    constructor(dashboardConfig:DashboardModelConfig, widgetsService:WidgetsService){
        this.id = dashboardConfig.id;
        this.title = dashboardConfig.title;
        this.widgets = dashboardConfig.widgets ? dashboardConfig.widgets.map((widgetConfig) => {
            var widget = widgetsService.getWidgetById(widgetConfig.id);
			if (!widget)
				throw("Widget '" + widgetConfig.id + "' not found.");

			return widget;
        }) : [];
    }

    public refresh(){
        if (this.disabled)
            return;

        this.disabled = true;

        setTimeout(() => {
            this.disabled = false;
        }, 2000);

        this.widgets.forEach((widget:WidgetModel) => {
            widget.loadData();
        });
    }
}

export interface DashboardModelConfig{
    id:string,
    title:string,
    widgets: Array<DashboardWidgetConfig>
}