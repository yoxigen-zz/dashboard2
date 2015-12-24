import {WidgetViewSetting} from "./WidgetViewSetting";
import {WidgetViewSettingsInterface} from "./WidgetViewSettingsInterface";

export class WidgetViewSettingType implements WidgetViewSettingsInterface{
	private _settings:Array<WidgetViewSetting> = Object.freeze([]);

	constructor(public id:string, public name:string){}

	get settings(){
		return this._settings;
	}

	addSetting(setting:WidgetViewSetting){
		return this.addSettings([setting]);
	}

	addSettings(settings:Array<WidgetViewSetting>){
		return this._settings = Object.freeze(this._settings.concat(settings));
	}

	getDefaultSettings():Object{
		return {};
	}
}