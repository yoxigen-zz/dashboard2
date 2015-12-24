import {Component, Input, OnChanges} from 'angular2/core';
import {WidgetViewTypeModel} from "../models/WidgetViewTypeModel";
import {ViewTypeComponentInterface} from "../interfaces/ViewTypeComponentInterface";
import {Response} from "angular2/http";
import {WidgetViewSettings, WidgetViewSettingType, WidgetViewSetting} from "../reflection/ViewSettingsDecorators";
import {WidgetViewSettingTypeField} from "../reflection/ViewSettingsDecorators";

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
}

@WidgetViewSettings({ name: "Table", selector: "table-view", id: "table" })
class TableViewComponentSettings{
	@WidgetViewSetting({ name: "Table Fields", list: { itemType: "field" } })
	fields:Array<TableField>;
}