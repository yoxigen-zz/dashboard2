import {WidgetViewSettingDescription} from "./WidgetViewSettingDescription";

export class WidgetViewSetting implements WidgetViewSettingDescription{
	id:string;
	name:string;
	type:string;
	options: Array<{ id:string, name:string }>;
	list: {
		itemType?: string,
		fields?: Array<WidgetViewSetting>
	};
	required: boolean;

	constructor(id:string, settingDescription:WidgetViewSettingDescription){
		this.id = id;
		Object.assign(this, settingDescription);
	}
}