import {Component, Input, OnChanges} from 'angular2/core';
import {DashboardModel} from '../models/DashboardModel';
import {WidgetComponent} from './WidgetComponent';

@Component({
	selector: "dashboard",
	template: `
    	<div class="dashboard">
			<header class="dashboard-header">
				<div class="pull-right">
					<button (click)="dashboard.refresh()" [disabled]="dashboard.disabled">Refresh</button>
				</div>
				<h1 class="dashboard-title">{{dashboard.title}}</h1>
			</header>
			<widget *ngFor="#widget of dashboard.widgets" [widget]="widget"></widget>
        </div>
    `,
	directives: [WidgetComponent]
})
export class DashboardComponent implements OnChanges{
	@Input() dashboard:DashboardModel;

	ngOnChanges(changes){
		if (changes.dashboard){
			this.dashboard.refresh();
		}
	}
}