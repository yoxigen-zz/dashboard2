import {Component, Output, EventEmitter} from "angular2/core";

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
							<option *ngFor="#option of setting.options">{{option.name}}</option>
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

	private datasources = [
	{
		"url": "data/user_types",
		"name": "User Types",
		"isList": true,
		"properties": [
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "value",
				"type": "number"
			}
		]
	},
	{
		"url": "data/users",
		"name": "Users",
		"isList": true,
		"properties": [
			{
				"name": "id",
				"type": "number"
			},
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "age",
				"type": "number"
			}
		]
	},
	{
		"url": "data/users_health",
		"name": "Users Health",
		"isList": true,
		"properties": [
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "health",
				"type": "number"
			}
		]
	}
];

	widgetSettings = [
		{ id: "id", type: "string", name: "ID", required: true },
		{ id: "title", type: "string", name: "Widget Title", required: true },
		{ id: "dataSource", type: "select", name: "Data Source", options: this.datasources, required: true }
	];

	widgetSettingValues = {
		id: "newWidgetID",
		title: "New Widget"
	};

	onSettingChange(){
		this.update.emit(this.widgetSettingValues);
	}
}