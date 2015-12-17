///<reference path="../../../typings/c3.d.ts" />

import {Component, ElementRef, Input, OnChanges} from "angular2/core";
import {ViewTypeComponentInterface} from "../../interfaces/ViewTypeComponentInterface";
import {BarsChartItem} from "./BarItemModel";
import {BarComponent} from "./BarComponent";
import {BarsChartOptions} from "./BarsChartOptions";
import {BarsChartService} from "./BarsChartService";

@Component({
	selector: "bars-chart",
	directives: [BarComponent],
	template: `
		<div class="bars-chart">
			<ul>
				<li *ngFor="#item of data">
					<bar [data]="item"></bar>
				</li>
			</ul>
			<ul class="bars-chart-legend" *ngIf="settings.legend">
				<li *ngFor="#legendItem of settings.legend">
					<i class="material-icons" [style]="{color: legendItem.color }">stop</i> {{legendItem.name}}
				</li>
			</ul>
		</div>
	`
})
export class BarsChartComponent implements ViewTypeComponentInterface, OnChanges{
	@Input() settings:BarsChartOptions;
	@Input() data:Array<BarsChartItem>;

	elementRef:ElementRef;
	barsChartService:BarsChartService;

	private OUTTER_VALUE_CLASS:string = "outter-value";

	private options:BarsChartOptions;
	maxValue:number;
	minValue:number = 0;

	constructor(elementRef:ElementRef, barsChartService:BarsChartService){
		this.elementRef = elementRef;
		this.options = barsChartService.parseOptions(this.settings);
		this.barsChartService = barsChartService;
	}

	ngOnChanges(changes){
		if (changes.settings)
			this.options = this.barsChartService.parseOptions(this.settings);

		if (this.data) {
			Object.assign(this, this.barsChartService.parseBarsData(this.data, this.options));
			//this.renderChart();
		}
	}

	renderChart():void{
		let barsListEl = this.elementRef.nativeElement.querySelector("ul"),
			elementWidth:number = barsListEl.clientWidth;

		var largestSize = this.maxValue - this.minValue;

	}
}