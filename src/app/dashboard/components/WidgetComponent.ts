import {Component, Input} from 'angular2/core';
import {NgFor} from "angular2/common";
import {WidgetModel} from '../models/WidgetModel';
import {WidgetViewComponent} from "./WidgetViewComponent";

@Component({
    selector: "widget",
	directives: [NgFor, WidgetViewComponent],
    template: `
        <div class="widget">
        	<div class="widget-contents">
        		<header class="widget-contents-header">
					<h2>{{widget.title}}</h2>
					<small>Last updated: {{widget.lastUpdateTime | date:'medium'}}</small>
        		</header>
        		<div class="widget-contents-body">
        			<widget-view *ngFor="#view of widget.views" [view]="view" [data]="widget.data"></widget-view>
        		</div>
			</div>
        </div>
    `
})
export class WidgetComponent{
    @Input() widget:WidgetModel;
}
