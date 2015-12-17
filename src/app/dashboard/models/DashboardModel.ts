import {WidgetModel, WidgetModelConfig} from './WidgetModel';
import {WidgetFactory} from "../services/WidgetFactory";
import {DashboardWidgetConfig} from "./WidgetModel";
import {WidgetsService} from "../services/WidgetsService";

export class DashboardModel{
    public id:string;
    public title:string;
    public widgets:Array<WidgetModel>;
    public disabled:boolean = false;

	private loadingWidgetsPromise:Promise<Array<WidgetModel>>;

    constructor(dashboardConfig:DashboardModelConfig, widgetsService:WidgetsService){
        this.id = dashboardConfig.id;
        this.title = dashboardConfig.title;
		this.widgets = [];

		let self = this;

		let widgetLoadPromises:Array<Promise<WidgetModel>> = dashboardConfig.widgets.map((widgetConfig, index:number) => {

			return widgetsService.getWidgetById(widgetConfig.id).then((widget:WidgetModel) => {
				if (!widget)
					throw("Widget '" + widgetConfig.id + "' not found.");

				self.widgets.splice(index, 0, widget);
				return widget;
			});
		});

		this.loadingWidgetsPromise = Promise.all(widgetLoadPromises);
    }

    public refresh(){
        if (this.disabled)
            return;

        this.disabled = true;

        setTimeout(() => {
            this.disabled = false;
        }, 2000);

        this.loadWidgetsData();
    }

	private loadWidgetsData(){
		this.loadingWidgetsPromise.then((widgets:Array<WidgetModel>) => {
			widgets.forEach((widget:WidgetModel) => {
				widget.loadData();
			});
		});
	}
}

export interface DashboardModelConfig{
    id:string,
    title:string,
    widgets: Array<DashboardWidgetConfig>
}