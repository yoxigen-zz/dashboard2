import {Component, Input, CORE_DIRECTIVES, NgSwitch, NgSwitchWhen} from 'angular2/angular2';
import {WidgetViewTypeModel} from "../models/WidgetViewTypeModel";
import {PieChartComponent, TableViewComponent} from "./views/views";
import {Observable} from "angular2/core";

@Component({
	selector: "widget-view",
	inputs: ["data"],
	directives: [NgSwitch, NgSwitchWhen, PieChartComponent, TableViewComponent],
	template: `
        <div class="widget-view" [ng-switch]="view.type.id">
        	<table-view *ngSwitchWhen="'table'" [settings]="view.settings" [data]="data">Loading...</table-view>
        	<pie-chart *ngSwitchWhen="'pie'" [settings]="view.settings" [data]="data">Loading pie...</pie-chart>
        </div>
    `
})
export class WidgetViewComponent{
	@Input() view:WidgetViewTypeModel;
	@Input() data:any;
}
