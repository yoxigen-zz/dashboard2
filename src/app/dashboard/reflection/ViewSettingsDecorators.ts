import {WidgetViewDescription} from "./WidgetViewDescription";
import {DashboardReflection} from "./DashboardReflection";

export function WidgetView(properties:WidgetViewDescription) {
	return (target:Object) => {
		DashboardReflection.addView(properties);
	}
}

export function ViewSettingProperty(properties:Object) {
	return (target:Object, key:string) => {
		console.log("pp: ", target, properties);
	}
}