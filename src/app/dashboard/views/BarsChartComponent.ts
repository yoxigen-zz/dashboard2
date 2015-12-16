///<reference path="../../typings/c3.d.ts" />

import {Component, ElementRef, Input, OnChanges} from "angular2/core";
import {ViewTypeComponentInterface} from "../interfaces/ViewTypeComponentInterface";
import {NgFor, NgIf} from "angular2/common";

@Component({
	selector: "bars-chart",
	directives: [NgIf, NgFor],
	template: `
		<div class="bars-chart">
			<ul></ul>
			<ul class="bars-chart-legend" *ngIf="settings.legend">
				<li *ngFor="#legendItem of settings.legend">
					<i class="material-icons" [style]="{color: legendItem.color }">stop</i> {{legendItem.name}}
				</li>
			</ul>
		</div>
	`
})
export class BarsChartComponent implements ViewTypeComponentInterface, OnChanges{
	@Input() settings:Object;
	@Input() data:any;

	elementRef:ElementRef;

	constructor(elementRef:ElementRef){
		this.elementRef = elementRef;
	}

	ngOnChanges(changes){
		if (this.data && this.settings)
			this.renderChart();
	}

	renderChart():void{
		if (this.data) {
			var chartOptions:c3.ChartConfiguration = {
				data: {
					columns: this.getChartColumns(this.data),
					type: "donut"
				},
				bindto: this.elementRef.nativeElement.querySelector(".chart"),
				size: {
					height: 300
				}
			};

			this.chart = c3.generate(chartOptions);
		}
	}

	getChartColumns(data:any[]):Array<c3.PrimitiveArray>{
		return data.map(item => {
			return [item.name, item.value];
		});
	}
}