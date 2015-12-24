import {Component} from "angular2/core";
import {Input} from "angular2/core";
import {WidgetViewSettings} from "../../dashboard/reflection/WidgetViewSettings";
import {WidgetViewModelConfig} from "../../dashboard/models/WidgetViewModel";
import {WidgetViewModel} from "../../dashboard/models/WidgetViewModel";
import {OnChanges} from "angular2/core";
import {WidgetViewSettingComponent} from "./WidgetViewSettingComponent";
import {WidgetViewSettingsInterface} from "../../dashboard/reflection/WidgetViewSettingsInterface";

@Component({
	selector: "widget-view-settings",
	directives: [WidgetViewSettingComponent],
	template: `
		<ul>
			<li *ngFor="#setting of widgetViewSettings.settings">
				({{setting.name}}):
				<widget-view-setting [setting]="setting"></widget-view-setting>
			</li>
		</ul>
	`
})
export class WidgetViewSettingsComponent implements OnChanges{
	@Input() widgetViewSettings:WidgetViewSettingsInterface;

	widgetViewSettingsValues:Object;

	ngOnChanges(changes:Object){
		this.widgetViewSettingsValues = this.widgetViewSettings.getDefaultSettings();
	}
}