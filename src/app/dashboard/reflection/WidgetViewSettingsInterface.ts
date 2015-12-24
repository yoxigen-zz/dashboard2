import {WidgetViewSetting} from "./WidgetViewSetting";

export interface WidgetViewSettingsInterface{
	id:string;
	name:string;
	settings:Array<WidgetViewSetting>;

	addSetting(setting:WidgetViewSetting):void;
	addSettings(settings:Array<WidgetViewSetting>):void;

	getDefaultSettings():Object;
}