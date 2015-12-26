import {Component} from "angular2/core";
import {Input} from "angular2/core";
import {WidgetViewSetting} from "../../dashboard/reflection/WidgetViewSetting";
import {WidgetViewSettingType} from "../../dashboard/reflection/WidgetViewSettingType";
import {OnChanges} from "angular2/core";
import {DashboardReflection} from "../../dashboard/reflection/DashboardReflection";
import {WidgetViewSettingsComponent} from "./WidgetViewSettingsComponent";
import {EventEmitter} from "angular2/core";
import {Output} from "angular2/core";

@Component({
	selector: "widget-view-setting",
	directives: [WidgetViewSettingComponent],
	template: `
		<div *ngIf="setting.list && listItemType">
			<ul>
				<li *ngFor="#listItem of settingData; #i=index">
					<ul>
						<li *ngFor="#listItemSetting of listItemType.settings">
							{{listItemSetting.name}}:
							<widget-view-setting
								[setting]="listItemSetting"
								[settingData]="listItem[listItemSetting.id]"
								(update)="onListItemChange($event, i)"></widget-view-setting>
						</li>
					</ul>
				</li>
			</ul>
			<button (click)="addListItem()">Add Item</button>
		</div>
		<div *ngIf="!setting.list" [ngSwitch]="setting.type">
			<input type="text" *ngSwitchWhen="'string'" [(ngModel)]="settingData" (ngModelChange)="onSettingChange()" />
			<input type="number" *ngSwitchWhen="'number'" [(ngModel)]="settingData" (ngModelChange)="onSettingChange()" />
			<input type="date" *ngSwitchWhen="'date'" [(ngModel)]="settingData" (ngModelChange)="onSettingChange()" />
		</div>
	`
})
export class WidgetViewSettingComponent implements OnChanges{
	@Input() setting:WidgetViewSetting;
	@Input() settingData:any;

	@Output() update:EventEmitter<{ setting:WidgetViewSetting, value:any }> = new EventEmitter();

	listItemType:WidgetViewSettingType;

	addListItem(){
		this.settingData = Object.freeze((this.settingData || []).concat([this.listItemType.getDefaultSettings()]));
		this.onSettingChange();
	}

	ngOnChanges(changes){
		if (changes.setting && this.setting.list)
			this.listItemType = DashboardReflection.getSettingType(this.setting.list.itemType);
	}

	onListItemChange($event, listItemIndex:number){
		this.settingData[listItemIndex][$event.setting.id] = $event.value;
		this.onSettingChange();
	}

	onSettingChange($event?){
		this.update.emit({ setting: this.setting, value: this.settingData });
	}
}