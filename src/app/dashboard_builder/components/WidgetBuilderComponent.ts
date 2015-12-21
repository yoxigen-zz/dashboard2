import {Component} from "angular2/core";
import {WidgetComponent} from "../../dashboard/components/WidgetComponent";
import {WidgetSettingsComponent} from "./WidgetSettingsComponent";
import {Input} from "angular2/core";
import {WidgetModel} from "../../dashboard/models/WidgetModel";

@Component({
	selector: "widget-builder",
	directives: [WidgetComponent, WidgetSettingsComponent],
	template: `
		<widget-settings [widget]="widget" (update)="updateWidget($event)"></widget-settings>
	`
})
export class WidgetBuilderComponent{
	@Input() widget:WidgetModel;

	updateWidget($settings){
		console.log("settings", $settings);
	}
}