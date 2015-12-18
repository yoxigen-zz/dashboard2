import {Component, Input} from 'angular2/core';
import {WidgetViewTypeModel} from "../models/WidgetViewTypeModel";
import {WIDGET_VIEW_DIRECTIVES} from "../views/views";
import { Observable } from 'rxjs/Rx';

@Component({
	selector: "widget-view",
	inputs: ["data"],
	directives: WIDGET_VIEW_DIRECTIVES,
	template: `
        <div class="widget-view" [ngSwitch]="view.type.id">
        	<table-view *ngSwitchWhen="'table'" [settings]="view.settings" [data]="data">Loading...</table-view>
        	<pie-chart *ngSwitchWhen="'pie'" [settings]="view.settings" [data]="data">Loading...</pie-chart>
        	<bars-chart *ngSwitchWhen="'bars'" [settings]="view.settings" [data]="data">Loading...</bars-chart>
        </div>
    `
})
export class WidgetViewComponent{
	@Input() view:WidgetViewTypeModel;
	@Input() data:any;
	@Input() data$:Observable<any>;
}
