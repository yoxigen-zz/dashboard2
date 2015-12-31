import {Component} from "angular2/core";
import {WidgetComponent} from "../../dashboard/components/WidgetComponent";
import {WidgetSettingsComponent} from "./WidgetSettingsComponent";
import {Input} from "angular2/core";
import {WidgetModel} from "../../dashboard/models/WidgetModel";
import {WidgetFactory} from "../../dashboard/services/WidgetFactory";
import {DataSources} from "../../dashboard/services/DataSources";
import {WidgetModelConfig} from "../../dashboard/models/WidgetModel";

@Component({
	selector: "widget-builder",
	directives: [WidgetComponent, WidgetSettingsComponent],
	template: `
		<div class="widget-builder">
			<widget-settings [widget]="widgetConfig" (update)="updateWidget($event)"></widget-settings>
			<div class="widget-builder-canvas dashboard">
				<widget [widget]="widget"></widget>
			</div>
		</div>
	`
})
export class WidgetBuilderComponent{
	widget:WidgetModel;
	widgetConfig:WidgetModelConfig;

	constructor(private widgetFactory:WidgetFactory, dataSources:DataSources){
		this.widgetConfig = {
			id: "newWidgetID",
			title: "New Widget",
			dataSource: dataSources.allDataSources[0].id,
			views: []
		};

		this.widget = this.widgetFactory.createWidget(this.widgetConfig);
		this.widget.loadData();
	}

	updateWidget($event){
		if ($event.view){
			// Add
			// Remove
			// Change
		}
		else{
			this.widget = this.widgetFactory.createWidget($event.widget);
			this.widget.loadData();
		}
	}
}