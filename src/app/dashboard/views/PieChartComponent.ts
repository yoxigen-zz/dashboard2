///<reference path="../../typings/c3.d.ts" />

import {Component, ElementRef, Input, OnChanges} from "angular2/core";
import {ViewTypeComponentInterface} from "../interfaces/ViewTypeComponentInterface";
import {TableField} from "./TableViewComponent";
import {WidgetViewSetting} from "../reflection/ViewSettingsDecorators";
import {PropertyType} from "../reflection/PropertyType";
import {DataSourceModel} from "../models/DataSourceModel";
import {WidgetViewSettings} from "../reflection/ViewSettingsDecorators";

@Component({
	selector: "pie-chart",
	template: `
		<div class="chart"></div>
	`
})
export class PieChartComponent implements ViewTypeComponentInterface, OnChanges{
	@Input() settings:PieChartComponentSettings;
	@Input() data:any;

	chart:c3.ChartAPI;

	constructor(private elementRef:ElementRef){
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
		let nameProperty:string = this.settings.nameProperty || "name",
			valueProperty:string = this.settings.valueProperty || "value";

		return data.map(item => {
			return [item[nameProperty], item[valueProperty]];
		});
	}
}

@WidgetViewSettings({
	name: "Pie Chart",
	selector: "pie-chart",
	id: "pie",
	getSettings: (dataSource:DataSourceModel):PieChartComponentSettings => {
		var name = dataSource.getFirstPropertyOfType(PropertyType.String),
			value = dataSource.getFirstPropertyOfType(PropertyType.Number);

		let settings = {
			nameProperty: name && name.name,
			valueProperty: value && value.name
		};

		return settings;
	}
})
class PieChartComponentSettings{
	@WidgetViewSetting({ name: "Name Property", type: PropertyType.String, fromDataSource: true })
	nameProperty:string;

	@WidgetViewSetting({ name: "Value Property", type: PropertyType.String, fromDataSource: true })
	valueProperty:string;
}