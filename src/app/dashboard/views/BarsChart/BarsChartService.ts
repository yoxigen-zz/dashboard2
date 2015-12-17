import {Injectable} from "angular2/core";
import {BarsChartItem} from "./BarItemModel";
import {BarsChartOptions} from "./BarsChartOptions";

@Injectable()
export class BarsChartService{
	DEFAULT_SETTINGS:BarsChartOptions = {
		min: 0,
		valueProperty: "value"
	};

	parseOptions(options?:BarsChartOptions){
		let parsedOptions = Object.assign({}, this.DEFAULT_SETTINGS, options);
		parsedOptions.getValue = this.prepareGetItemValue(parsedOptions);
		parsedOptions.getColor = this.prepareGetItemColor(parsedOptions);

		return parsedOptions;
	}

	parseBarsData(data:Array<any>, options:BarsChartOptions){
		let parsedData = Object.freeze(data.map((item, i:number) => {
			return Object.assign({}, item, {
				value: options.getValue(item)
			});
		}).sort(function(a, b){
			if (a.value === b.value)
				return 0;

			return a.value < b.value ? 1 : -1;
		}));

		let minValue:number = !isNaN(options.min) ? options.min : parsedData[parsedData.length - 1].value;
		let maxValue:number = !isNaN(options.max) ? options.max : parsedData[0].value;
		let sizeDelta = maxValue - minValue;

		parsedData = parsedData.map((item, i:number) => {
			return Object.freeze(Object.assign(item, {
				color: options.getColor(item, 0, i),
				size: item.value / sizeDelta
			}));
		});

		return {
			data: parsedData,
			minValue,
			maxValue
		};
	}

	private prepareGetItemValue(options:BarsChartOptions):(item:any) => number{
		if (options.getValue)
			return options.getValue;

		if (options.valueProperty) {
			return (item:any) => {
				return item[options.valueProperty];
			};
		}
	}

	private prepareGetItemColor(options:BarsChartOptions): (item:any, itemSize:number, itemIndex:number) => string{
		if (options.getColor)
			return options.getColor;

		if (options.colorPattern){
			return (item:any, itemSize:number, index:number) => {
				if (options.colorPattern.length === 1)
					return options.colorPattern[0];

				return options.colorPattern[index % options.colorPattern.length];
			}
		}

		if (options.color)
			return (item:any, itemSize:number, index:number) => { return options.color };

		return null;
	}
}