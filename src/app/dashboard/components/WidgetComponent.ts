import {Component, Input, CORE_DIRECTIVES, NgFor} from 'angular2/angular2';
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
        			<widget-view *ng-for="#view of widget.views" [view]="view" [data]="widget.data"></widget-view>
        		</div>
			</div>
        </div>
    `
})
export class WidgetComponent{
    @Input() widget:WidgetModel;
}
