import {Component} from "angular2/core";
import {Input} from "angular2/core";
import {WidgetViewSettings} from "../../dashboard/reflection/WidgetViewSettings";
import {WidgetViewModelConfig} from "../../dashboard/models/WidgetViewModel";
import {WidgetViewModel} from "../../dashboard/models/WidgetViewModel";
import {OnChanges} from "angular2/core";
import {WidgetViewSettingComponent} from "./WidgetViewSettingComponent";
import {WidgetViewSettingsInterface} from "../../dashboard/reflection/WidgetViewSettingsInterface";
import {DashboardReflection} from "../../dashboard/reflection/DashboardReflection";
import {EventEmitter} from "angular2/core";
import {WidgetViewSetting} from "../../dashboard/reflection/WidgetViewSetting";
import {Output} from "angular2/core";

@Component({
	selector: "widget-view-settings",
	directives: [WidgetViewSettingComponent],
	template: `
		<ul *ngIf="widgetViewSettings">
			<li *ngFor="#setting of widgetViewSettings.settings">
				({{setting.name}}):
				<widget-view-setting [setting]="setting" [settingData]="widgetViewOptions.settings[setting.id]" (update)="onSettingChange($event)"></widget-view-setting>
			</li>
		</ul>
	`
})
export class WidgetViewSettingsComponent implements OnChanges{
	@Input() widgetViewOptions:WidgetViewModelConfig;
	@Output() update:EventEmitter<WidgetViewModelConfig> = new EventEmitter();

	widgetViewSettings:WidgetViewSettings;
	widgetViewSettingsValues:WidgetViewModelConfig;

	ngOnChanges(changes:Object){
		this.widgetViewSettings = DashboardReflection.viewTypesMap.get(this.widgetViewOptions.type);
		this.widgetViewSettingsValues = this.widgetViewSettings.getDefaultSettings();
	}

	onSettingChange(changeData:{ setting:WidgetViewSetting, value:any }){
		this.widgetViewSettingsValues.settings[changeData.setting.id] = changeData.value;
		this.update.emit(this.widgetViewSettingsValues);
	}
}