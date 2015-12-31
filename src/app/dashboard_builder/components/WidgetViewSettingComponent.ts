import {Component} from "angular2/core";
import {Input} from "angular2/core";
import {WidgetViewSetting} from "../../dashboard/reflection/WidgetViewSetting";
import {WidgetViewSettingType} from "../../dashboard/reflection/WidgetViewSettingType";
import {OnChanges} from "angular2/core";
import {DashboardReflection} from "../../dashboard/reflection/DashboardReflection";
import {WidgetViewSettingsComponent} from "./WidgetViewSettingsComponent";
import {EventEmitter} from "angular2/core";
import {Output} from "angular2/core";
import {PropertyType, PropertyTypes} from "../../dashboard/reflection/PropertyType";
import {DataSourceModel} from "../../dashboard/models/DataSourceModel";

@Component({
	selector: "widget-view-setting",
	directives: [WidgetViewSettingComponent],
	template: `
		<div *ngIf="setting.fromDataSource && dataSource">
			<select
				[(ngModel)]="settingData"
				(ngModelChange)="onSettingChange()">
				<option *ngFor="#dataProperty of dataSource.properties" [value]="dataProperty.name">{{dataProperty.name}}</option>
			</select>
		</div>
		<div *ngIf="setting.list && listItemType">
			<ul>
				<li *ngFor="#listItem of settingData; #i=index">
					<ul>
						<li *ngFor="#listItemSetting of listItemType.settings">
							{{listItemSetting.name}}:
							<widget-view-setting
								[setting]="listItemSetting"
								[settingData]="listItem[listItemSetting.id]"
								[dataSource]="dataSource"
								(update)="onListItemChange($event, i)"></widget-view-setting>
						</li>
					</ul>
				</li>
			</ul>
			<button (click)="addListItem()">Add Item</button>
		</div>
		<div *ngIf="!setting.list && !setting.fromDataSource" [ngSwitch]="setting.type">
			<input type="text" *ngSwitchWhen="propertyType.String" [(ngModel)]="settingData" (ngModelChange)="onSettingChange()" />
			<input type="number" *ngSwitchWhen="propertyType.Number" [(ngModel)]="settingData" (ngModelChange)="onSettingChange()" />
			<input type="date" *ngSwitchWhen="propertyType.Date" [(ngModel)]="settingData" (ngModelChange)="onSettingChange()" />
			<select *ngSwitchWhen="propertyType.Type"
				[(ngModel)]="settingData"
				(ngModelChange)="onSettingChange()">
				<option *ngFor="#p of propertyTypes" [value]="p">{{propertyType[p]}}</option>
			</select>
		</div>
	`
})
export class WidgetViewSettingComponent implements OnChanges{
	@Input() setting:WidgetViewSetting;
	@Input() settingData:any;
	@Input() dataSource:DataSourceModel;

	@Output() update:EventEmitter<{ setting:WidgetViewSetting, value:any }> = new EventEmitter();

	listItemType:WidgetViewSettingType;
	propertyType = PropertyType;
	propertyTypes = PropertyTypes;

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