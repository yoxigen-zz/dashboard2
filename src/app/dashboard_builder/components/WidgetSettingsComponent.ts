import {Input} from "angular2/core";
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
import {PropertyType} from "../../dashboard/reflection/PropertyType";
import {DataSourceModel} from "../../dashboard/models/DataSourceModel";
import {WidgetModelConfig} from "../../dashboard/models/WidgetModel";
import {OnChanges} from "angular2/core";

@Component({
	selector: "widget-settings",
	directives: [WidgetViewSettingsComponent],
	template: `
		<div class="widget-builder-settings" *ngIf="widget">
			<h1>Settings</h1>
			<ul>
				<li *ngFor="#setting of widgetSettings" [ngSwitch]="setting.type">
					<label>{{setting.name}}
						<select *ngSwitchWhen="propertyType.Select"
							[(ngModel)]="widget[setting.id]"
							(ngModelChange)="onSettingChange({ setting: setting, value: widget[setting.id]} )">
							<option *ngFor="#option of setting.options" [value]="option.id">{{option.name}}</option>
						</select>
						<input type="text" *ngSwitchWhen="propertyType.String" [(ngModel)]="widget[setting.id]" (ngModelChange)="onSettingChange({ setting: setting.id, value: widget[setting.id] })" />
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
					<li *ngFor="#view of widget.views; #i=index">
						<h5>{{view.type}}</h5>
						<widget-view-settings
							[view]="view"
							[dataSource]="dataSource"
							(update)="onViewChange($event, i)"></widget-view-settings>
							<button (click)="removeView(view)">Remove View</button>
					</li>
				</ul>
			</div>
		</div>
	`
})
export class WidgetSettingsComponent implements OnChanges{
	@Output() update:EventEmitter<any> = new EventEmitter();
	@Input() widget:WidgetModelConfig;

	viewTypes:Array<WidgetViewSettings>;
	viewTypesMap:Map<string, WidgetViewSettings>;

	currentWidgetViewTypeId:string;

	views:Array<WidgetViewModel> = Object.freeze([]);
	propertyType = PropertyType;

	dataSource:DataSourceModel;

	widgetSettings:Array<WidgetViewSetting> = [
		{ id: "id", type: PropertyType.String, name: "ID", required: true },
		{ id: "title", type: PropertyType.String, name: "Widget Title", required: true },
		{
			id: "dataSource",
			type: PropertyType.Select,
			name: "Data Source",
			options: this.dataSources.allDataSources,
			required: true
		}
	].map((widgetSettingOptions:WidgetViewSettingDescription) => {
		return new WidgetViewSetting(widgetSettingOptions.id, widgetSettingOptions);
	});

	constructor(private widgetFactory:WidgetFactory, private dataSources:DataSources){
		this.viewTypes = DashboardReflection.views;
		this.viewTypesMap = DashboardReflection.viewTypesMap;
		this.currentWidgetViewTypeId = this.viewTypesMap.get("table").id;
	}

	addView(){
		let viewType = this.viewTypesMap.get(this.currentWidgetViewTypeId);

		let view = {
			type: viewType.id,
			settings: viewType.getSettings(this.dataSource)
		};

		this.widget.views.push(view);
		this.onViewChange(view, this.widget.views.length - 1, "add");
	}

	removeView(view:WidgetViewModelConfig){
		let viewIndex = this.widget.views.indexOf(view);
		if (~viewIndex)
			this.widget.views.splice(viewIndex, 1);

		this.onViewChange(view, viewIndex, "remove");
	}

	onDataSourceChange(){
		var self = this;

		this.widget.views.forEach(view => {
			let viewType = self.viewTypesMap.get(view.type);
			view.settings = viewType.getSettings(this.dataSource);
		});
	}

	onViewChange(widgetViewOptions:WidgetViewModelConfig, viewIndex:number, action?:string){
		let widgetSettings = Object.assign({}, this.widget);
		widgetSettings.views = widgetSettings.views.slice(0);
		widgetSettings.views[viewIndex] = widgetViewOptions;

		this.update.emit({ widget: widgetSettings, view: viewIndex, action: action || "change" });
	}

	onSettingChange(settingData?:{setting:WidgetViewSetting, value:any }, additionalData?:Object){
		if (settingData && settingData.setting.id === "dataSource") {
			this.dataSource = this.dataSources.getDataSourceById(settingData.value);
			this.onDataSourceChange();
		}

		this.update.emit(Object.assign({ widget: this.widget }, additionalData));
	}

	ngOnChanges(changes){
		if (changes.widget && this.widget.dataSource)
			this.dataSource = this.dataSources.getDataSourceById(this.widget.dataSource);
	}
}