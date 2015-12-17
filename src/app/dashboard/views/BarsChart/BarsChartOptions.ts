export interface BarsChartOptions{
	min?:number,
	max?:number,
	valueProperty:string,
	onclick?:(item:any) => void,
	getValue?: (item:any) => number,
	getColor?: (item:any, itemSize:number, itemIndex:number) => string,
	colorPattern?:Array<string>,
	color?:string,
	formatValue?: (value:any, item:any) => string,
	getTooltip?: (item:any) => string
}