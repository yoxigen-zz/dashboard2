import {Component, Input} from 'angular2/core';
import {WidgetModel} from '../models/WidgetModel';
import {WidgetViewComponent} from "./WidgetViewComponent";

@Component({
    selector: "widget",
	directives: [WidgetViewComponent],
    template: `
        <div class="widget">
        	<div class="widget-contents">
        		<header class="widget-contents-header">
					<h2>{{widget.title}}</h2>
					<small>Last updated: {{widget.lastUpdateTime | date:'medium'}}</small>
        		</header>
        		<div class="widget-contents-body" *ngIf="!widget.error">
        			<widget-view *ngFor="#view of widget.views" [view]="view" [data]="widget.data"></widget-view>
        		</div>
        		<div class="widget-error" *ngIf="widget.error">
        			<div class="widget-error-message">
        				{{widget.error.text}}
        				<div class="widget-error-message-status">
        					<label>Status</label>: {{widget.error.status}}
        				</div>
        			</div>
        		</div>
			</div>
        </div>
    `
})
export class WidgetComponent{
    @Input() widget:WidgetModel;
}
