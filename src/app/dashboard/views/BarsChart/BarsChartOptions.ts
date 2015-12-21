import {ConditionalOptions} from "../../conditional/Conditional";
import {BarsChartItem} from "./BarItemModel";

export interface BarsChartOptions{
	min?:number,
	max?:number,
	valueProperty:string,
	onclick?:(item:BarsChartItem) => void,
	getValue?: (item:BarsChartItem) => number,
	getColor?: (item:BarsChartItem, index:number) => string,
	colorPattern?:Array<string>,
	color?:{
		conditional?:ConditionalOptions
		pattern?: Array<string>,
		value?: string
	},
	formatValue?: (value:any, item:BarsChartItem) => string,
	getTooltip?: (item:BarsChartItem) => string
}