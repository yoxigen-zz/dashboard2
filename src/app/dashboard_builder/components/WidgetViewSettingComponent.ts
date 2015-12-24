import {Component} from "angular2/core";
import {Input} from "angular2/core";
import {WidgetViewSetting} from "../../dashboard/reflection/WidgetViewSetting";
import {WidgetViewSettingType} from "../../dashboard/reflection/WidgetViewSettingType";
import {OnChanges} from "angular2/core";
import {DashboardReflection} from "../../dashboard/reflection/DashboardReflection";
import {WidgetViewSettingsComponent} from "./WidgetViewSettingsComponent";

@Component({
	selector: "widget-view-setting",
	directives: [WidgetViewSettingComponent],
	template: `
		<div *ngIf="setting.list && listItemType">
			<ul>
				<li *ngFor="#listItem of listItems">
					<ul>
						<li *ngFor="#listItemSetting of listItemType.settings">
							{{listItemSetting.name}}:
							<widget-view-setting [setting]="listItemSetting"></widget-view-setting>
						</li>
					</ul>
				</li>
			</ul>
			<button (click)="addListItem()">Add Item</button>
		</div>
		<div *ngIf="!setting.list" [ngSwitch]="setting.type">
			<input type="text" *ngSwitchWhen="'string'" [(ngModel)]="settingValue" />
			<input type="number" *ngSwitchWhen="'number'" [(ngModel)]="settingValue" />
			<input type="date" *ngSwitchWhen="'date'" [(ngModel)]="settingValue" />
		</div>
	`
})
export class WidgetViewSettingComponent implements OnChanges{
	@Input() setting:WidgetViewSetting;

	listItems:Array<string>;
	settingValue:any;
	listItemType:WidgetViewSettingType;

	addListItem(){
		this.listItems = Object.freeze((this.listItems || []).concat(["TEST"]));
	}

	ngOnChanges(changes:Object){
		if (this.setting.list)
			this.listItemType = DashboardReflection.getSettingType(this.setting.list.itemType);
	}
}