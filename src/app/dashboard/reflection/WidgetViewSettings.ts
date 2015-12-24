import {WidgetViewSettingDescription} from "./WidgetViewSettingDescription";
import {WidgetViewDescription} from "./WidgetViewDescription";
import {WidgetViewSetting} from "./WidgetViewSetting";
import {WidgetViewModel} from "../models/WidgetViewModel";
import {WidgetViewModelConfig} from "../models/WidgetViewModel";
import {WidgetViewSettingsInterface} from "./WidgetViewSettingsInterface";

export class WidgetViewSettings implements WidgetViewDescription, WidgetViewSettingsInterface{
	private _settings:Array<WidgetViewSetting>;

	id:string;
	name:string;
	selector:string;

	constructor(viewDescription:WidgetViewDescription){
		Object.assign(this, viewDescription);
	}

	get settings(){
		return this._settings;
	}

	addSetting(setting:WidgetViewSetting):Array<WidgetViewSetting>{
		return this.addSettings([setting]);
	}

	addSettings(settings:Array<WidgetViewSetting>):Array<WidgetViewSetting>{
		return this._settings = Object.freeze((this._settings || []).concat(settings));
	}

	getDefaultSettings():WidgetViewModelConfig{
		var defaultSettings = {};

		this.settings.forEach(setting => {
			defaultSettings[setting.id] = this.getDefaultSettingValue(setting);
		});

		return {
			type: this.id,
			settings: defaultSettings
		};
	}

	private getDefaultSettingValue(setting:WidgetViewSetting):any{
		if (setting.list)
			return [];

		switch(setting.type){
			case "string":
				return "";
			case "number":
				return 1;
			case "boolean":
				return true;
			case "field":
				return { id: "field_id", name: "Field Name" };
			default:
				return null;
		}
	}
}