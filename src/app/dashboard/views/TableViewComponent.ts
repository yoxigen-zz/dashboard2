import {Component, Input, OnChanges} from 'angular2/core';
import {WidgetViewTypeModel} from "../models/WidgetViewTypeModel";
import {ViewTypeComponentInterface} from "../interfaces/ViewTypeComponentInterface";
import {Response} from "angular2/http";
import {WidgetViewSettings, WidgetViewSettingType, WidgetViewSetting} from "../reflection/ViewSettingsDecorators";
import {WidgetViewSettingTypeField} from "../reflection/ViewSettingsDecorators";
import {DataSourceModel} from "../models/DataSourceModel";

@Component({
	selector: "table-view",
	inputs: ["data"],
	styles: [`
		.table-view{ width: 100%; border-collapse: collapse; }
		.table-view th, .table-view td{ padding: .5rem; }
		.table-view th{ font-weight: strong; text-align: left; }
		.table-view tbody tr{ border-top: solid 1px rgba(0,0,0,.06); }
		.table-view td{ color: rgba(0,0,0,.87) }
	`],
	template: `
        <table class="table-view">
        	<thead>
        		<tr>
        			<th *ngFor="#field of settings.fields">{{field.name}}</th>
        		</tr>
			</thead>
			<tbody>
				<tr *ngFor="#item of data">
					<td *ngFor="#field of settings.fields">{{item[field.id]}}</td>
				</tr>
			</tbody>
        </table>
    `
})
export class TableViewComponent implements ViewTypeComponentInterface{
	@Input() settings:TableViewComponentSettings;
	@Input() data:any[];
}

@WidgetViewSettingType({ name: "Field", id: "field" })
export class TableField{

	@WidgetViewSettingTypeField({ name: "ID", type: "string" })
	id:string;

	@WidgetViewSettingTypeField({ name: "Name", type: "string" })
	name:string;

	@WidgetViewSettingTypeField({
		name: "Type",
		type: "string",
		options: [
			{ id: "string", name: "String" },
			{ id: "number", name: "Number" },
			{ id: "date", name: "Date" }
		]
	})
	type:string;

	constructor(id:string, name:string, type:string){
		this.id = id;
		this.name = name;
		this.type = type;
	}
}

@WidgetViewSettings({
	name: "Table",
	selector: "table-view",
	id: "table",
	getSettings: (dataSource:DataSourceModel):Object => {
		let settings = {
			fields: dataSource.properties.map((property:{ name:string, type:string }):TableField => {
				return new TableField(property.name, property.name, property.type);
			})
		};

		return settings;
	}
})
class TableViewComponentSettings{
	@WidgetViewSetting({ name: "Table Fields", list: { itemType: "field" } })
	fields:Array<TableField>;
}