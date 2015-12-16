import {Component, Input} from 'angular2/core';
import {WidgetViewTypeModel} from "../models/WidgetViewTypeModel";
import {PieChartComponent, TableViewComponent} from "../views/views";
import {CORE_DIRECTIVES} from "angular2/common";

@Component({
	selector: "widget-view",
	inputs: ["data"],
	directives: [CORE_DIRECTIVES, PieChartComponent, TableViewComponent],
	template: `
        <div class="widget-view" [ngSwitch]="view.type.id">
        	<table-view *ngSwitchWhen="'table'" [settings]="view.settings" [data]="data">Loading...</table-view>
        	<pie-chart *ngSwitchWhen="'pie'" [settings]="view.settings" [data]="data">Loading pie...</pie-chart>
        </div>
    `
})
export class WidgetViewComponent{
	@Input() view:WidgetViewTypeModel;
	@Input() data:any;
}
