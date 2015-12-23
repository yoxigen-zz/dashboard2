import {Injectable} from "angular2/core";
import {WidgetViewDescription} from "./WidgetViewDescription";

export module DashboardReflection{
	var views:Array<WidgetViewDescription> = Object.freeze([]);

	export function addView(viewDescription:WidgetViewDescription):void {
		views = Object.freeze(views.concat([viewDescription]));
		console.log("views: ", views);
	}
}