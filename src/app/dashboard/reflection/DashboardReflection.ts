import {Injectable} from "angular2/core";
import {WidgetViewDescription} from "./WidgetViewDescription";
import {WidgetViewSettingDescription} from "./WidgetViewSettingDescription";
import {Type} from "angular2/core";
import {WidgetViewSettings} from "./WidgetViewSettings";
import {WidgetViewSetting} from "./WidgetViewSetting";
import {WidgetViewSettingTypeDescription} from "./WidgetViewSettingTypeDescription";
import {WidgetViewSettingType} from "./WidgetViewSettingType";

export module DashboardReflection{
	export var views:Array<WidgetViewSettings> = Object.freeze([]);

	var viewsMap:Map<string, WidgetViewSettings> = new Map<string, WidgetViewSettings>();
	var unusedSettings:Map<string, Array<WidgetViewSetting>>;
	var unusedSettingTypesSettings:Map<string, Array<WidgetViewSetting>>;
	var settingTypes:Map<string, WidgetViewSettingType> = new Map<string, WidgetViewSettingType>();
	var settingTypesMap:Map<string, WidgetViewSettingType> = new Map<string, WidgetViewSettingType>();

	enum SettingParentType{ ViewType, SettingType}

	export function getSettingType(settingTypeId:string):WidgetViewSettingType{
		return settingTypesMap.get(settingTypeId);
	}

	export function addView(viewName:string, viewDescription:WidgetViewDescription):void {
		var viewSettings = new WidgetViewSettings(viewDescription);
		views = Object.freeze(views.concat([viewSettings]));
		viewsMap.set(viewName, viewSettings);

		let unusedViewSettings = unusedSettings && unusedSettings.get(viewName);
		if (unusedViewSettings){
			viewSettings.addSettings(unusedViewSettings);
			unusedSettings.delete(viewName);
		}
	}

	export function addViewSetting(viewName:string, settingId:string, widgetViewSettingDescription:WidgetViewSettingDescription):void{
		addSetting(viewName, settingId, widgetViewSettingDescription, SettingParentType.ViewType);
	}

	export function addSettingType(typeName:string, settingTypeDescription:WidgetViewSettingTypeDescription):void{
		var settingType = new WidgetViewSettingType(settingTypeDescription.id, settingTypeDescription.name);
		settingTypes.set(typeName, settingType);
		settingTypesMap.set(settingTypeDescription.id, settingType);

		let unusedViewSettings = unusedSettingTypesSettings && unusedSettingTypesSettings.get(typeName);
		if (unusedViewSettings){
			settingType.addSettings(unusedViewSettings);
			unusedSettingTypesSettings.delete(typeName);
		}
	}

	export function addViewTypeSetting(viewName:string, settingId:string, widgetViewSettingDescription:WidgetViewSettingDescription):void{
		addSetting(viewName, settingId, widgetViewSettingDescription, SettingParentType.SettingType);
	}

	function addSetting(viewName:string, settingId:string, widgetViewSettingDescription:WidgetViewSettingDescription, settingParentType:SettingParentType):void{
		let parentMap = settingParentType === SettingParentType.ViewType ? viewsMap : settingTypes,
			parentUnusedSettings = settingParentType === SettingParentType.ViewType ? unusedSettings : unusedSettingTypesSettings;

		let parentSettings = parentMap.get(viewName),
			setting = new WidgetViewSetting(settingId, widgetViewSettingDescription);

		if (parentSettings)
			parentSettings.addSetting(setting);
		else{
			if (!parentUnusedSettings) {
				parentUnusedSettings = new Map<string, Array<WidgetViewSetting>>();
				if (settingParentType === SettingParentType.ViewType)
					unusedSettings = parentUnusedSettings;
				else
					unusedSettingTypesSettings = parentUnusedSettings;
			}

			let unusedViewSettings = parentUnusedSettings.get(viewName);
			if (!unusedViewSettings)
				parentUnusedSettings.set(viewName, unusedViewSettings = []);

			unusedViewSettings.push(setting);
		}
	}
}