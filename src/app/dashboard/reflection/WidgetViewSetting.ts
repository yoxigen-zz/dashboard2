import {WidgetViewSettingDescription} from "./WidgetViewSettingDescription";
import {PropertyType} from "./PropertyType";

export class WidgetViewSetting implements WidgetViewSettingDescription{
	id:string;
	name:string;
	type:PropertyType;
	options: Array<{ id:string, name:string }>;
	list: {
		itemType?: string,
		fields?: Array<WidgetViewSetting>
	};
	required: boolean = false;
	fromDataSource: boolean = false;

	constructor(id:string, settingDescription:WidgetViewSettingDescription){
		this.id = id;
		Object.assign(this, settingDescription);
	}
}