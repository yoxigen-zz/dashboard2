import {Component, Output, EventEmitter} from "angular2/core";
import {WidgetFactory} from "../../dashboard/services/WidgetFactory";
import {DataSources} from "../../dashboard/services/DataSources";
import {WidgetViewModel} from "../../dashboard/models/WidgetViewModel";
import {WidgetViewSettings} from "../../dashboard/reflection/WidgetViewSettings";
import {DashboardReflection} from "../../dashboard/reflection/DashboardReflection";
import {Utils} from "../../dashboard/services/utils";
import {WidgetViewModelConfig} from "../../dashboard/models/WidgetViewModel";
import {WidgetViewSettingsComponent} from "./WidgetViewSettingsComponent";

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
						<input type="text" *ngSwitchWhen="'string'" [(ngModel)]="widgetSettingValues[setting.id]" (ngModelChange)="onSettingChange(setting)" />
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
					<li *ngFor="#view of widgetViews">
						<h5>{{view.name}}</h5>
						<widget-view-settings [widgetViewSettings]="view"></widget-view-settings>
					</li>
				</ul>
			</div>
		</div>
	`
})
export class WidgetSettingsComponent{
	@Output() update:EventEmitter<any> = new EventEmitter();

	viewTypes:Array<WidgetViewSettings>;
	viewTypesMap:Map<string, WidgetViewSettings>;

	currentWidgetViewTypeId:string;

	constructor(private widgetFactory:WidgetFactory, private dataSources:DataSources){
		this.viewTypes = DashboardReflection.views;
		this.viewTypesMap = Utils.Arrays.toMap(this.viewTypes);
	}

	widgetSettings = [
		{ id: "id", type: "string", name: "ID", required: true },
		{ id: "title", type: "string", name: "Widget Title", required: true },
		{ id: "dataSource", type: "select", name: "Data Source", options: this.dataSources.allDataSources, required: true }
	];

	widgetViews:Array<WidgetViewSettings> = [];

	addView(){
		let viewType = this.viewTypesMap.get(this.currentWidgetViewTypeId);
		this.widgetViews.push(viewType);
	}

	widgetSettingValues = {
		id: "newWidgetID",
		title: "New Widget",
		dataSource: this.dataSources.allDataSources[0].id,
		views: [
			{
				"type": "bars",
				"settings": {
					"valueProperty": "value",
					"color": {
						"conditional": {
							"defaultValue": "$primary",
							"conditionGroups": [
								{
									"conditions": [
										{
											"operator": "<=",
											"value": 3
										}
									],
									"output": "Red"
								},
								{
									"conditions": [
										{
											"operator": "<",
											"value": 7
										}
									],
									"output": "Orange"
								}
							]
						}
					}
				}
			}
		]
	};

	onSettingChange(){
		this.update.emit({ widget: this.widgetFactory.createWidget(this.widgetSettingValues) });
	}
}