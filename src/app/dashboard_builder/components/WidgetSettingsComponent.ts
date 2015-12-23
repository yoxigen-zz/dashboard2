import {Component, Output, EventEmitter} from "angular2/core";
import {WidgetFactory} from "../../dashboard/services/WidgetFactory";
import {DataSources} from "../../dashboard/services/DataSources";

@Component({
	selector: "widget-settings",
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
		</div>
	`
})
export class WidgetSettingsComponent{
	@Output() update:EventEmitter<any> = new EventEmitter();

	constructor(private widgetFactory:WidgetFactory, private dataSources:DataSources){}

	widgetSettings = [
		{ id: "id", type: "string", name: "ID", required: true },
		{ id: "title", type: "string", name: "Widget Title", required: true },
		{ id: "dataSource", type: "select", name: "Data Source", options: this.dataSources.allDataSources, required: true }
	];

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