import {WidgetViewDescription} from "./WidgetViewDescription";
import {DashboardReflection} from "./DashboardReflection";
import {WidgetViewSettingTypeDescription} from "./WidgetViewSettingTypeDescription";
import {WidgetViewSettingDescription} from "./WidgetViewSettingDescription";
import {Type} from "angular2/core";

export function WidgetViewSettings(properties:WidgetViewDescription) {
	return (target:Object) => {
		DashboardReflection.addView(target.toString(), properties);
	}
}

export function WidgetViewSettingType(properties:WidgetViewSettingTypeDescription){
	return (target:Object) => {
		DashboardReflection.addSettingType(target.toString(), properties);
	}
}

export function WidgetViewSettingTypeField(widgetViewSettingDescription:WidgetViewSettingDescription){
	return (target:Object, key:string) => {
		DashboardReflection.addViewTypeSetting(target.constructor.toString(), key, widgetViewSettingDescription);
	}
}

export function WidgetViewSetting(widgetViewSettingDescription:WidgetViewSettingDescription) {
	return (target:Object, key:string) => {
		DashboardReflection.addViewSetting(target.constructor.toString(), key, widgetViewSettingDescription);
	}
}