import {WidgetViewSettingDescription} from "./WidgetViewSettingDescription";

export class WidgetViewSetting implements WidgetViewSettingDescription{
	id:string;
	name:string;
	type:string;
	list: {
		itemType?: string,
		fields?: Array<WidgetViewSetting>
	};

	constructor(id:string, settingDescription:WidgetViewSettingDescription){
		this.id = id;
		Object.assign(this, settingDescription);
	}
}