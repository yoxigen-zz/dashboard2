import {Component, Input, OnChanges} from "angular2/core";
import {BarsChartItem} from "./BarItemModel";

@Component({
	selector: "bar",
	template: `
		<div [ngStyle]="{ width: width + '%', 'background-color': data.color }" class="bars-chart-bar">
			<span class="bars-chart-value">{{data.name}}</span>
		</div>
	`
})
export class BarComponent implements OnChanges{
	@Input() data:BarsChartItem;

	width:number;

	ngOnChanges(changes:Object){
		this.width = 100 * this.data.size;
	}
}