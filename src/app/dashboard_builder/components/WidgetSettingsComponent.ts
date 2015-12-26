import {Component, Output, EventEmitter} from "angular2/core";
import {WidgetFactory} from "../../dashboard/services/WidgetFactory";
import {DataSources} from "../../dashboard/services/DataSources";
import {WidgetViewModel} from "../../dashboard/models/WidgetViewModel";
import {WidgetViewSettings} from "../../dashboard/reflection/WidgetViewSettings";
import {DashboardReflection} from "../../dashboard/reflection/DashboardReflection";
import {Utils} from "../../dashboard/services/utils";
import {WidgetViewModelConfig} from "../../dashboard/models/WidgetViewModel";
import {WidgetViewSettingsComponent} from "./WidgetViewSettingsComponent";
import {WidgetViewSetting} from "../../dashboard/reflection/WidgetViewSetting";
import addView = DashboardReflection.addView;
import {WidgetViewSettingDescription} from "../../dashboard/reflection/WidgetViewSettingDescription";
import {WidgetModel} from "../../dashboard/models/WidgetModel";

@Component({
	selector: "widget-settings",
	directives: [WidgetViewSettingsComponent],
	template: `
		<div class="widget-builder-settings">
			<h1>Settings</h1>
			<ul>
				<li *ngFor="#setting of widgetSettings" [ngSwitch]="setting.type">
					<label>{{setting.name}}
						<select *ngSwitchWhen="'select'"
							[(ngModel)]="widgetSettingValues[setting.id]"
							(ngModelChange)="onSettingChange(setting)">
							<option *ngFor="#option of setting.options" [value]="option.id">{{option.name}}</option>
						</select>
						<input type="text" *ngSwitchWhen="'string'" [(ngModel)]="widgetSettingValues[setting.id]" (ngModelChange)="onSettingChange({ setting: setting.id, value: widgetSettingValues[setting.id] })" />
					</label>
				</li>
			</ul>
			<div>
				<h3>Views</h3>
				Add View:
				<select [(ngModel)]="currentWidgetViewTypeId">
					<option *ngFor="#viewType of viewTypes" [value]="viewType.id">{{viewType.name}}</option>
				</select>
				<button (click)="addView()">Add View</button>
				<ul>
					<li *ngFor="#view of widgetSettingValues.views; #i=index">
						<h5>{{view.type}}</h5>
						<widget-view-settings [widgetViewOptions]="view" (update)="onViewChange($event, i)"></widget-view-settings>
					</li>
				</ul>
			</div>
		</div>
	`
})
export class WidgetSettingsComponent{
	@Output() update:EventEmitter<any> = new EventEmitter();

	widget:WidgetModel;

	viewTypes:Array<WidgetViewSettings>;
	viewTypesMap:Map<string, WidgetViewSettings>;

	currentWidgetViewTypeId:string;

	views:Array<WidgetViewModel> = Object.freeze([]);

	constructor(private widgetFactory:WidgetFactory, private dataSources:DataSources){
		this.viewTypes = DashboardReflection.views;
		this.viewTypesMap = DashboardReflection.viewTypesMap;
	}

	widgetSettings:Array<WidgetViewSetting> = [
		{ id: "id", type: "string", name: "ID", required: true },
		{ id: "title", type: "string", name: "Widget Title", required: true },
		{ id: "dataSource", type: "select", name: "Data Source", options: this.dataSources.allDataSources, required: true }
	].map((widgetSettingOptions:WidgetViewSettingDescription) => {
		return new WidgetViewSetting(widgetSettingOptions.id, widgetSettingOptions);
	});

	widgetViews:Array<WidgetViewSettings> = [];

	addView(){
		let viewType = this.viewTypesMap.get(this.currentWidgetViewTypeId);
		let dataSource = this.dataSources.getDataSourceById(this.widgetSettingValues.dataSource);

		let view = {
			type: viewType.id,
			settings: viewType.getSettings(dataSource)
		};

		this.widgetViews.push(viewType);
		this.widgetSettingValues.views = Object.freeze(this.widgetSettingValues.views.concat([view]));
		this.onSettingChange();
	}

	onDataSourceChange(){
		var dataSource = this.dataSources.getDataSourceById(this.widgetSettingValues.dataSource);
		var self = this;

		this.widgetSettingValues.views.forEach(view => {
			let viewType = self.viewTypesMap.get(view.type);
			view.settings = viewType.getSettings(dataSource);
		});
	}

	widgetSettingValues = {
		id: "newWidgetID",
		title: "New Widget",
		dataSource: this.dataSources.allDataSources[0].id,
		views: []
	};

	onViewChange(widgetViewOptions:WidgetViewModelConfig, viewIndex:number){
		let widgetSettings = Object.assign({}, this.widgetSettingValues);
		widgetSettings.views = widgetSettings.views.slice(0);
		widgetSettings.views[viewIndex] = widgetViewOptions;

		let widget = this.widgetFactory.createWidget(widgetSettings);
		this.update.emit({ widget: widget });
	}

	onSettingChange(settingData?:{setting:string }){
		if (settingData && settingData.setting === "dataSource")
			this.onDataSourceChange();

		let widget = this.widgetFactory.createWidget(this.widgetSettingValues);
		this.update.emit({ widget: widget });
	}
}