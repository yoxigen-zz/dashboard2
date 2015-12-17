import {PieChartComponent} from "./PieChartComponent";
import {TableViewComponent} from "./TableViewComponent";
import {BarsChartComponent} from "./BarsChart/BarsChartComponent";
import {Type} from "angular2/core";
import {BarsChartService} from "./BarsChart/BarsChartService";
import {BarComponent} from "./BarsChart/BarComponent";

export const WIDGET_VIEW_DIRECTIVES:Type[] = [
	PieChartComponent,
	TableViewComponent,
	BarsChartComponent
];

export const WIDGET_VIEW_PROVIDERS:Type[] = [
	BarsChartService
];