import {WidgetViewSettingDescription} from "./WidgetViewSettingDescription";
import {WidgetViewDescription} from "./WidgetViewDescription";
import {WidgetViewSetting} from "./WidgetViewSetting";
import {WidgetViewModel} from "../models/WidgetViewModel";
import {WidgetViewModelConfig} from "../models/WidgetViewModel";
import {WidgetViewSettingsInterface} from "./WidgetViewSettingsInterface";
import {DataSourceModel} from "../models/DataSourceModel";
import {WidgetViewSettingDefaultValues} from "./WidgetViewSettingDefaultValues";

export class WidgetViewSettings implements WidgetViewSettingsInterface{
	private _settings:Array<WidgetViewSetting>;

	id:string;
	name:string;
	selector:string;
	getSettings: (dataSource:DataSourceModel) => Object;

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
			defaultSettings[setting.id] = WidgetViewSettingDefaultValues.getDefaultSettingValue(setting);
		});

		return {
			type: this.id,
			settings: defaultSettings
		};
	}

	createView():WidgetViewModel{
		return new WidgetViewModel({
			type: this.id,
			settings: this.getDefaultSettings()
		});
	}
}