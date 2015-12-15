///<reference path="../../../typings/c3.d.ts" />

import {Component, ElementRef, Input} from "angular2/core";
import {ViewTypeComponentInterface} from "../../interfaces/ViewTypeComponentInterface";
import {OnChanges} from "angular2/core";

@Component({
	selector: "pie-chart",
	template: `
		<div class="chart"></div>
	`
})
export class PieChartComponent implements ViewTypeComponentInterface, OnChanges{
	@Input() settings:Object;
	@Input() data:any;

	elementRef:ElementRef;
	chart:c3.ChartAPI;

	constructor(elementRef:ElementRef){
		this.elementRef = elementRef;
	}

	ngOnChanges(changes){
		if (changes.data){
			if (this.chart) {
				this.chart.load({
					columns: this.getChartColumns(this.data)
				});
			}
			else
				this.renderChart();
		}
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