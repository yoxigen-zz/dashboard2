import {Component} from "angular2/core";
import {WidgetComponent} from "../../dashboard/components/WidgetComponent";
import {WidgetSettingsComponent} from "./WidgetSettingsComponent";
import {Input} from "angular2/core";
import {WidgetModel} from "../../dashboard/models/WidgetModel";
import {WidgetFactory} from "../../dashboard/services/WidgetFactory";

@Component({
	selector: "widget-builder",
	directives: [WidgetComponent, WidgetSettingsComponent],
	template: `
		<widget-settings [widget]="widget" (update)="updateWidget($event)"></widget-settings>
		<div class="dashboard">
			<widget [widget]="widget"></widget>
		</div>
	`
})
export class WidgetBuilderComponent{
	@Input() widget:WidgetModel;

	constructor(private widgetFactory:WidgetFactory){
		if (!this.widget)
			this.widget = widgetFactory.createWidget();
	}

	updateWidget($event){
		this.widget = $event.widget;
		this.widget.loadData();
	}
}